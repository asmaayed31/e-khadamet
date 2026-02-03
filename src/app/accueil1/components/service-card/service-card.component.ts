import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageServiceImpl } from '@accueil1/services/language.service';

export interface ServiceCardData {
  titleKey: string;
  descriptionKey: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a
      [routerLink]="service.link"
      class="block bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white group"
    >
      <div class="flex flex-col items-center text-center">
        <div class="w-16 h-16 bg-[#2563EB]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-gray-900 transition-colors">
          <span class="text-3xl">{{ service.icon }}</span>
        </div>
        
        <h3 class="text-xl mb-3 text-gray-900 group-hover:text-[#2563EB] transition-colors">
          {{ langService.t(service.titleKey) }}
        </h3>
        
        <p class="text-gray-600 text-sm leading-relaxed">
          {{ langService.t(service.descriptionKey) }}
        </p>

        <div class="mt-4 text-[#2563EB] text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
          <span>{{ langService.t('services.access') }}</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  `,
  styles: []
})
export class ServiceCardComponent {
  @Input() service!: ServiceCardData;
  langService = inject(LanguageServiceImpl);
}
