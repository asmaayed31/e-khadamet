import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageServiceImpl } from '@accueil1/services/language.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './no-services.component.html',
})
export class ServicesComponent {
  langService = inject(LanguageServiceImpl);

  toggleLanguage(): void {
    const current = this.langService.getCurrentLanguage();
    this.langService.setLanguage(current === 'fr' ? 'ar' : 'fr');
  }
}
