import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../components/ui/button';

type Language = 'fr' | 'ar';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const content = {
  fr: {
    title: "Ministère de l'Intérieur",
    subtitle: "e-khadammet - Services Électroniques",
    service: "Certificat de Résidence",
    backLink: "← Retour à l'accueil"
  },
  ar: {
    title: "وزارة الداخلية",
    subtitle: "خدمات إلكترونية - e-khadammet",
    service: "شهادة الإقامة",
    backLink: "→ العودة إلى الرئيسية"
  }
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [ButtonComponent]
})
export class HeaderComponent implements HeaderProps {
  @Input() language: Language = 'fr';
  @Output() languageChange = new EventEmitter<Language>();

  get t() {
    return content[this.language];
  }

  onLanguageChange() {
    this.languageChange.emit(this.language === 'fr' ? 'ar' : 'fr');
  }
}
