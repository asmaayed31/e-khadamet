import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageServiceImpl } from '@accueil1/services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative bg-gray-900 text-white py-20 px-4 overflow-hidden">
      <!-- Motif décoratif -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div class="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
        <div class="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl mb-6">
            {{ langService.t('hero.welcome') }}
          </h1>
          <p class="text-xl md:text-2xl mb-4 text-white/90">
            {{ langService.t('hero.subtitle') }}
          </p>
          <p class="text-lg mb-8 text-white/80">
            {{ langService.t('hero.description') }}
          </p>

          <!-- Bouton CTA -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-200 transition-colors shadow-lg text-lg">
              {{ langService.t('hero.cta.request') }}
            </button>
            <button class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors text-lg">
              {{ langService.t('hero.cta.learn') }}
            </button>
          </div>

          <!-- Statistiques -->
          <div class="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            <div class="text-center">
              <div class="text-3xl mb-2">50K+</div>
              <div class="text-sm text-white/80">{{ langService.t('hero.stats.users') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl mb-2">100K+</div>
              <div class="text-sm text-white/80">{{ langService.t('hero.stats.documents') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl mb-2">24/7</div>
              <div class="text-sm text-white/80">{{ langService.t('hero.stats.availability') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent {
  langService = inject(LanguageServiceImpl);
}
