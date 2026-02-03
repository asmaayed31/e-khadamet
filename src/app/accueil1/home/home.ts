import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { HeroComponent } from '../components/hero/hero.component';
import { ServiceCardComponent, ServiceCardData } from '../components/service-card/service-card.component';
import { InfoSectionComponent } from '../components/info-section/info-section.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LanguageServiceImpl } from '@accueil1/services/language.service';

export interface ServiceCard {
  icon: string;
  titleKey: string;
  descKey: string;
  color: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ServiceCardComponent,
    InfoSectionComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen flex flex-col bg-gray-50" [dir]="langService.getCurrentLanguage() === 'ar' ? 'rtl' : 'ltr'">
      <app-header></app-header>
      
      <main class="flex-1">
        <app-hero></app-hero>
        
        <!-- Services Section -->
        <section id="services" class="py-16 px-4 max-w-7xl mx-auto w-full">
          <div class="text-center mb-12">
            <h2 class="text-3xl mb-4 text-gray-900">{{ langService.t('services.title') }}</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              {{ langService.t('services.subtitle') }}
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <app-service-card 
              *ngFor="let service of services" 
              [service]="service">
            </app-service-card>
          </div>
        </section>

        <app-info-section></app-info-section>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class Home {
  langService = inject(LanguageServiceImpl);
  
  services: ServiceCardData[] = [
    {
      icon: '🏠︎',
      titleKey: 'services.interieur',
      descriptionKey: 'services.interieur.desc',
      link: '/acceuil2'
    },
    {
      icon: '🇭',
      titleKey: 'services.sante',
      descriptionKey: 'services.sante.desc',
      link: '/noservices'
    },
    {
      icon: '⛟',
      titleKey: 'services.transport',
      descriptionKey: 'services.transport.desc',
      link: '/noservices'
    },
    {
      icon: '✚',
      titleKey: 'services.other',
      descriptionKey: 'services.other.desc',
      link: '/noservices'
    }
  ];
}
