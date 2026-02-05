import { Component, signal, computed, effect, viewChildren, ElementRef, afterNextRender, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LanguageServiceImpl } from '../accueil1/services/language.service';
import { ButtonComponent } from '../components/ui/button';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-verif-otp',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ButtonComponent],
  templateUrl: './verifOTP.component.html',
  styleUrl: './verifOTP.component.css',
})
export class VerifOtpComponent implements OnInit, OnDestroy {

  // Using signals for modern Angular style
  otp = signal<string[]>(Array(6).fill(''));
  timer = signal(60);
  canResend = signal(false);
  language = signal<'fr' | 'ar'>('fr');

  private intervalId?: number;
  private languageSubscription?: Subscription;

  // Get all input elements
  inputs = viewChildren<ElementRef<HTMLInputElement>>('otpInput');

  langService = inject(LanguageServiceImpl);

  constructor() {
    // Start timer when component is initialized
    afterNextRender(() => {
      this.startTimer();
      // Optional: auto-focus first input
      this.inputs()?.[0]?.nativeElement.focus();
    });

    // React to timer changes
    effect(() => {
      if (this.timer() <= 0) {
        this.canResend.set(true);
        this.clearTimer();
      }
    });
  }

  ngOnInit(): void {
    // Subscribe to language changes
    this.languageSubscription = this.langService.language$.subscribe((lang: 'fr' | 'ar') => {
      this.language.set(lang);
    });
  }

  ngOnDestroy(): void {
    this.clearTimer();
    this.languageSubscription?.unsubscribe();
  }

  // Computed signal for translations - reactive to language changes
  t = computed(() => {
    // Access language() to make this computed signal reactive
    const currentLang = this.language();
    return {
      title: this.langService.t('otp_title'),
      service: this.langService.t('otp_service'),
      backLink: this.langService.t('otp_back_link'),
      header: this.langService.t('otp_header'),
      desc: this.langService.t('otp_desc'),
      verify: this.langService.t('verify'),
      noCode: this.langService.t('no_code'),
      resendIn: this.langService.t('resend_in'),
      resend: this.langService.t('resend'),
    };
  });

  onLanguageChange(): void {
    const newLang = this.language() === 'fr' ? 'ar' : 'fr';
    this.language.set(newLang);
    this.langService.setLanguage(newLang);
  }

  private startTimer() {
    this.clearTimer(); // safety
    this.intervalId = window.setInterval(() => {
      this.timer.update(t => Math.max(0, t - 1));
    }, 1000);
  }

  private clearTimer() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  onInputChange(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Only accept single digit
    if (value && !/^\d$/.test(value)) {
      input.value = '';
      return;
    }

    this.otp.update(arr => {
      const newArr = [...arr];
      newArr[index] = value;
      return newArr;
    });

    // Auto focus next
    if (value && index < 5) {
      this.inputs()?.[index + 1]?.nativeElement.focus();
    }
  }

  onKeyDown(index: number, event: KeyboardEvent): void {
    if (event.key === 'Backspace' && !this.otp()[index] && index > 0) {
      this.inputs()?.[index - 1]?.nativeElement.focus();
    }
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pasted = (event.clipboardData?.getData('text') || '').trim().slice(0, 6);

    if (!/^\d+$/.test(pasted)) return;

    const chars = pasted.split('');
    this.otp.update(() => {
      const newOtp = Array(6).fill('');
      chars.forEach((c, i) => {
        if (i < 6) newOtp[i] = c;
      });
      return newOtp;
    });

    // Focus last filled or last input
    const nextFocus = Math.min(chars.length, 5);
    this.inputs()?.[nextFocus]?.nativeElement.focus();
  }

  verify(): void {
    const code = this.otp().join('');
    if (code.length != 6) {
      alert(this.langService.t('otp_error'));
    }
  }

  resend(): void {
    if (!this.canResend()) return;

    console.log('Resending OTP...');
    alert(this.langService.t('otp_resent'));

    // Reset state
    this.otp.set(Array(6).fill(''));
    this.timer.set(60);
    this.canResend.set(false);
    this.inputs()?.[0]?.nativeElement.focus();

    this.startTimer();
  }

  formatTime(): string {
    const t = this.timer();
    const mins = Math.floor(t / 60);
    const secs = t % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}
