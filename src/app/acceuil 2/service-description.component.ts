
import { CommonModule } from '@angular/common';
import { CardComponent, CardContentComponent, CardHeaderComponent, CardTitleComponent } from '../components/ui/card';
import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';


type Language = 'fr' | 'ar';

interface ServiceDescriptionProps {
  language: Language;
}

const content = {
  fr: {
    title: "À propos du service",
    description: "Le certificat de résidence est un document officiel qui atteste de votre adresse de domicile. Il est délivré par le Ministère de l'Intérieur et peut être utilisé dans diverses démarches administratives.",
    uses: "Utilisations courantes :",
    usesList: [
      "Inscription à l'école ou à l'université",
      "Ouverture d'un compte bancaire",
      "Démarches administratives diverses",
      "Demandes de documents officiels"
    ],
    validity: "Validité",
    validityText: "Le certificat est valable pour une durée de 6 mois à partir de la date de délivrance."
  },
  ar: {
    title: "حول الخدمة",
    description: "شهادة الإقامة هي وثيقة رسمية تثبت عنوان إقامتك. يتم إصدارها من قبل وزارة الداخلية ويمكن استخدامها في مختلف الإجراءات الإدارية.",
    uses: "الاستخدامات الشائعة:",
    usesList: [
      "التسجيل في المدرسة أو الجامعة",
      "فتح حساب بنكي",
      "إجراءات إدارية متنوعة",
      "طلبات الوثائق الرسمية"
    ],
    validity: "الصلاحية",
    validityText: "الشهادة صالحة لمدة 6 أشهر من تاريخ الإصدار."
  }
};

@Component({
  selector: 'app-service-description',
  templateUrl: './service-description.component.html',
  styleUrls: ['./service-description.component.css'],
  standalone: true,
  imports: [NgFor],
})
export class ServiceDescriptionComponent implements ServiceDescriptionProps {
  @Input() language: Language = 'fr';

  get t() {
    return content[this.language];
  }
}
