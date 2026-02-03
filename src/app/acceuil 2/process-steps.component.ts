import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardContentComponent, CardHeaderComponent, CardTitleComponent } from '../components/ui/card';
import { NgFor } from '@angular/common';


type Language = 'fr' | 'ar';

interface ProcessStepsProps {
  language: Language;
}

const content = {
  fr: {
    title: "Étapes du processus",
    steps: [
      {
        title: "Création de compte",
        description: "Inscrivez-vous avec vos informations personnelles"
      },
      {
        title: "Connexion",
        description: "Connectez-vous avec votre numéro de téléphone et mot de passe"
      },
      {
        title: "Demande de certificat",
        description: "Remplissez le formulaire de demande en ligne"
      },
      {
        title: "Vérification",
        description: "Votre demande sera vérifiée par nos services"
      },
      {
        title: "Téléchargement",
        description: "Téléchargez votre certificat une fois approuvé"
      }
    ]
  },
  ar: {
    title: "خطوات العملية",
    steps: [
      {
        title: "إنشاء حساب",
        description: "قم بالتسجيل بمعلوماتك الشخصية"
      },
      {
        title: "تسجيل الدخول",
        description: "قم بتسجيل الدخول برقم هاتفك وكلمة المرور"
      },
      {
        title: "طلب الشهادة",
        description: "املأ نموذج الطلب عبر الإنترنت"
      },
      {
        title: "التحقق",
        description: "سيتم التحقق من طلبك من قبل خدماتنا"
      },
      {
        title: "التحميل",
        description: "قم بتنزيل شهادتك بمجرد الموافقة عليها"
      }
    ]
  }
};

@Component({
  selector: 'app-process-steps',
  templateUrl: './process-steps.component.html',
  styleUrls: ['./process-steps.component.css'],
  standalone: true,
  imports: [NgFor],
})
export class ProcessStepsComponent implements ProcessStepsProps {
  @Input() language: Language = 'fr';

  get t() {
    return content[this.language];
  }
}
