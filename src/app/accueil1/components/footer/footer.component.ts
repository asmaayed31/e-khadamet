import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageServiceImpl } from '@accueil1/services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer id="contact" class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- À propos -->
          <div>
            <h3 class="text-lg mb-4">{{ langService.t('footer.about') }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              {{ langService.t('footer.about.desc') }}
            </p>
          </div>

          <!-- Liens rapides -->
          <div>
            <h3 class="text-lg mb-4">{{ langService.t('footer.quick.links') }}</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  {{ langService.t('services.interieur') }}
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  {{ langService.t('services.sante') }}
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  {{ langService.t('footer.faq') }}
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  {{ langService.t('footer.guide') }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-lg mb-4">{{ langService.t('footer.contact') }}</h3>
            <ul class="space-y-3 text-sm">
              <li class="flex items-center gap-2 text-gray-400">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>+216 71 XXX XXX</span>
              </li>
              <li class="flex items-center gap-2 text-gray-400">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>contact@e-khadamet.tn</span>
              </li>
              <li class="flex items-center gap-2 text-gray-400">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1 1 0 01-1.414 0l-4.24-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Tunis, Tunisie</span>
              </li>
            </ul>
          </div>

          <!-- Réseaux sociaux -->
          <div>
            <h3 class="text-lg mb-4">{{ langService.t('footer.follow') }}</h3>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E31D1A] transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E31D1A] transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7-1.33 2-4 6-7 7"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E31D1A] transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16.5 7.5a2 2 0 11-4 0 2 2 0 014 0m-6 5a2 2 0 11-4 0 2 2 0 014 0m3-3a5 5 0 015 5v1h-10v-1a5 5 0 015-5z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Ligne de séparation -->
        <div class="border-t border-gray-800 mt-8 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>{{ langService.t('footer.rights') }}</p>
            <div class="flex gap-6">
              <a href="#" class="hover:text-white transition-colors">
                {{ langService.t('footer.legal') }}
              </a>
              <a href="#" class="hover:text-white transition-colors">
                {{ langService.t('footer.privacy') }}
              </a>
              <a href="#" class="hover:text-white transition-colors">
                {{ langService.t('footer.terms') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  langService = inject(LanguageServiceImpl);
}
