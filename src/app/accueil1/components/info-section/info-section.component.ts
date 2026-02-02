import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageServiceImpl } from '@accueil1/services/language.service';

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-white py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl mb-4 text-gray-900">{{ langService.t('why.title') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            {{ langService.t('why.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Sécurisé -->
          <div class="text-center p-6">
            <div class="w-20 h-20 bg-[#E31D1A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">⛉</span>
            </div>
            <h3 class="text-xl mb-3 text-gray-900">{{ langService.t('why.secure') }}</h3>
            <p class="text-gray-600">
              {{ langService.t('why.secure.desc') }}
            </p>
          </div>

          <!-- Rapide -->
          <div class="text-center p-6">
            <div class="w-20 h-20 bg-[#E31D1A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">⚡︎</span>
            </div>
            <h3 class="text-xl mb-3 text-gray-900">{{ langService.t('why.fast') }}</h3>
            <p class="text-gray-600">
              {{ langService.t('why.fast.desc') }}
            </p>
          </div>

          <!-- Fiable -->
          <div class="text-center p-6">
            <div class="w-20 h-20 bg-[#E31D1A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">✓</span>
            </div>
            <h3 class="text-xl mb-3 text-gray-900">{{ langService.t('why.reliable') }}</h3>
            <p class="text-gray-600">
              {{ langService.t('why.reliable.desc') }}
            </p>
          </div>
        </div>

        <!-- Section Instructions -->
        <div class="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 class="text-2xl mb-6 text-gray-900 text-center">{{ langService.t('how.title') }}</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="w-12 h-12 bg-[#E31D1A] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                1
              </div>
              <h4 class="mb-2 text-gray-900">{{ langService.t('how.step1') }}</h4>
              <p class="text-sm text-gray-600">{{ langService.t('how.step1.desc') }}</p>
            </div>

            <div class="text-center">
              <div class="w-12 h-12 bg-[#E31D1A] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                2
              </div>
              <h4 class="mb-2 text-gray-900">{{ langService.t('how.step2') }}</h4>
              <p class="text-sm text-gray-600">{{ langService.t('how.step2.desc') }}</p>
            </div>

            <div class="text-center">
              <div class="w-12 h-12 bg-[#E31D1A] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                3
              </div>
              <h4 class="mb-2 text-gray-900">{{ langService.t('how.step3') }}</h4>
              <p class="text-sm text-gray-600">{{ langService.t('how.step3.desc') }}</p>
            </div>

            <div class="text-center">
              <div class="w-12 h-12 bg-[#E31D1A] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                4
              </div>
              <h4 class="mb-2 text-gray-900">{{ langService.t('how.step4') }}</h4>
              <p class="text-sm text-gray-600">{{ langService.t('how.step4.desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class InfoSectionComponent {
  langService = inject(LanguageServiceImpl);
}
