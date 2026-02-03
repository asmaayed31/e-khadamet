import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { AuthFormComponent } from './auth-form.component';
import { ProcessStepsComponent } from './process-steps.component';
import { ServiceDescriptionComponent } from './service-description.component';

type Language = 'fr' | 'ar';

@Component({
  selector: 'app-acceuil2',
  templateUrl: './acceuil2.component.html',
  styleUrls: ['./acceuil2.component.css'],
  imports: [HeaderComponent, AuthFormComponent, ProcessStepsComponent, ServiceDescriptionComponent]
})
export class Acceuil2Component {
  language: Language = 'fr';

  onLanguageChange(lang: Language) {
    this.language = lang;
  }
}