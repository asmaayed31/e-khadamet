import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageServiceImpl } from '@accueil1/services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo et Titre -->
          <div class="flex items-center gap-2">
            <img src="/images/flagtunisia.png" alt="Tunisia Flag" class="w-12 h-12 rounded-lg shadow-sm" loading="lazy"/>
            <img src="/images/logonidham-removebg-preview.png" alt="e-Khadamet Logo" class="h-14 object-contain" loading="lazy"/>
            <div class="border-l border-gray-300 pl-4">
              <h1 class="text-xl text-[#E31D1A] tracking-tight font-semibold leading-tight">
                {{ langService.t('header.title') }}
              </h1>
              <p class="text-xs text-gray-600">{{ langService.t('header.subtitle') }}</p>
            </div>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex items-center gap-6">
            <a href="#accueil" class="text-gray-700 hover:text-[#E31D1A] transition-colors">
              {{ langService.t('header.home') }}
            </a>
            <a href="#services" class="text-gray-700 hover:text-[#E31D1A] transition-colors">
              {{ langService.t('header.services') }}
            </a>
            <a href="#aide" class="text-gray-700 hover:text-[#E31D1A] transition-colors">
              {{ langService.t('header.help') }}
            </a>
            <a href="#contact" class="text-gray-700 hover:text-[#E31D1A] transition-colors">
              {{ langService.t('header.contact') }}
            </a>
          </nav>

          <!-- Boutons de connexion et langue -->
          <div class="flex items-center gap-3">
            <!-- Bouton changement de langue -->
            <button
              (click)="toggleLanguage()"
              class="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              [title]="langService.getCurrentLanguage() === 'fr' ? 'Switch to Arabic' : 'Changer en français'"
            >
               🌐
              <span class="text-sm font-medium">{{ langService.getCurrentLanguage() === 'fr' ? 'العربية' : 'FR' }}</span>
            </button>

            <button class="px-4 py-2 text-[#E31D1A] border border-[#E31D1A] rounded hover:bg-[#E31D1A] hover:text-white transition-colors">
              {{ langService.t('header.login') }}
            </button>
            <button class="px-4 py-2 bg-[#E31D1A] text-white rounded hover:bg-[#C41915] transition-colors">
              {{ langService.t('header.register') }}
            </button>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  langService = inject(LanguageServiceImpl);

  toggleLanguage(): void {
    const current = this.langService.getCurrentLanguage();
    this.langService.setLanguage(current === 'fr' ? 'ar' : 'fr');
  }
}
