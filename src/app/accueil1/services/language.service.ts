import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type Language = 'fr' | 'ar';

interface LanguageService {
  language$: Observable<Language>;
  setLanguage(lang: Language): void;
  t(key: string): string;
  getCurrentLanguage(): Language;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceImpl implements LanguageService {
  private languageSubject = new BehaviorSubject<Language>('fr');
  language$ = this.languageSubject.asObservable();

  private translations = {
    fr: {
      // Header
      'header.title': 'e-Khadamet Tunisie',
      'header.subtitle': 'Portail des Services Administratifs',
      'header.home': 'Accueil',
      'header.services': 'Services',
      'header.help': 'Aide',
      'header.contact': 'Contact',
      'header.login': 'Connexion',
      'header.register': "S'inscrire",

      // Hero
      'hero.welcome': 'Bienvenue sur e-Khadamet Tunisie',
      'hero.subtitle': 'Portail Officiel des Services Administratifs en Ligne',
      'hero.description': 'Simplifiez vos démarches administratives - Obtenez votre attestation de résidence et autres documents officiels en quelques clics',
      'hero.cta.request': 'Demander une Attestation',
      'hero.cta.learn': 'En Savoir Plus',
      'hero.stats.users': 'Utilisateurs',
      'hero.stats.documents': 'Documents Émis',
      'hero.stats.availability': 'Service Disponible',

      // Services
      'services.title': 'services par secteur',
      'services.subtitle': 'Toutes vos démarches administratives sont classées par domaine afin que vous puissiez y accéder rapidement et facilement',
      'services.interieur': 'Ministère de l\'Intérieur',
      'services.interieur.desc': 'Découvrez tous les services de ce secteur',
      'services.sante': 'Santé',
      'services.sante.desc': 'Découvrez tous les services de ce secteur ',
      'services.transport': 'Transport',
      'services.transport.desc': 'Découvrez tous les services de ce secteur ',
      'services.other': 'Autres Services',
      'services.other.desc': 'Découvrez tous nos services administratifs en ligne',
      'services.access': 'Accéder au service',

      // Why Choose
      'why.title': 'Pourquoi choisir e-Khadamet ?',
      'why.subtitle': 'Une plateforme sécurisée et efficace pour tous vos besoins administratifs',
      'why.secure': 'Sécurisé',
      'why.secure.desc': 'Vos données sont protégées par les standards de sécurité les plus élevés',
      'why.fast': 'Rapide',
      'why.fast.desc': 'Obtenez vos documents en quelques minutes, 24h/24 et 7j/7',
      'why.reliable': 'Fiable',
      'why.reliable.desc': 'Documents officiels reconnus par toutes les administrations tunisiennes',

      // How To
      'how.title': 'Comment obtenir votre attestation ?',
      'how.step1': 'Créez un compte',
      'how.step1.desc': 'Inscrivez-vous avec vos informations personnelles',
      'how.step2': 'Choisissez le service',
      'how.step2.desc': 'Sélectionnez le type de document souhaité',
      'how.step3': 'Complétez le formulaire',
      'how.step3.desc': 'Remplissez les informations requises',
      'how.step4': 'Téléchargez',
      'how.step4.desc': 'Recevez et téléchargez votre document',

      // Footer
      'footer.about': 'e-Khadamet Tunisie',
      'footer.about.desc': 'Votre portail officiel pour tous les services administratifs en ligne de la République Tunisienne.',
      'footer.quick.links': 'Liens Rapides',
      'footer.faq': 'FAQ',
      'footer.guide': "Guide d'utilisation",
      'footer.contact': 'Contact',
      'footer.follow': 'Suivez-nous',
      'footer.rights': '© 2026 e-Khadamet Tunisie - Tous droits réservés',
      'footer.legal': 'Mentions légales',
      'footer.privacy': 'Politique de confidentialité',
      'footer.terms': "Conditions d'utilisation",
    },
    ar: {
      // Header
      'header.title': 'خدمات تونس الإلكترونية',
      'header.subtitle': 'بوابة الخدمات الإدارية',
      'header.home': 'الرئيسية',
      'header.services': 'الخدمات',
      'header.help': 'المساعدة',
      'header.contact': 'الاتصال',
      'header.login': 'تسجيل الدخول',
      'header.register': 'التسجيل',

      // Hero
      'hero.welcome': 'مرحبا بكم في خدمات تونس الإلكترونية',
      'hero.subtitle': 'البوابة الرسمية للخدمات الإدارية عبر الإنترنت',
      'hero.description': 'بسّط إجراءاتك الإدارية - احصل على شهادة الإقامة والوثائق الرسمية الأخرى ببضع نقرات',
      'hero.cta.request': 'طلب شهادة',
      'hero.cta.learn': 'معرفة المزيد',
      'hero.stats.users': 'مستخدم',
      'hero.stats.documents': 'وثيقة صادرة',
      'hero.stats.availability': 'خدمة متوفرة',

      // Services
      'services.title': 'الخدمات حسب المجال',
      'services.subtitle': 'جميع إجراءاتك الإداريّة مُصنّفة حسب المجال لتتمكن من الوصول إليها بسرعة وسهولة',
      'services.interieur': 'وزارة الداخلية',
      'services.interieur.desc': 'اكتشف جميع الخدمات في هذا القطاع',
      'services.sante': 'الصحة',
      'services.sante.desc': 'اكتشف جميع الخدمات في هذا القطاع',
      'services.transport': 'النقل',
      'services.transport.desc':  'اكتشف جميع الخدمات في هذا القطاع',
      'services.other': 'خدمات أخرى',
      'services.other.desc': 'اكتشف جميع خدماتنا الإدارية عبر الإنترنت',
      'services.access': 'الوصول إلى الخدمة',

      // Why Choose
      'why.title': 'لماذا تختار خدمات تونس الإلكترونية؟',
      'why.subtitle': 'منصة آمنة وفعالة لجميع احتياجاتك الإدارية',
      'why.secure': 'آمن',
      'why.secure.desc': 'بياناتك محمية بأعلى معايير الأمان',
      'why.fast': 'سريع',
      'why.fast.desc': 'احصل على وثائقك في دقائق معدودة، على مدار الساعة طوال أيام الأسبوع',
      'why.reliable': 'موثوق',
      'why.reliable.desc': 'وثائق رسمية معترف بها من قبل جميع الإدارات التونسية',

      // How To
      'how.title': 'كيفية الحصول على شهادتك؟',
      'how.step1': 'أنشئ حسابا',
      'how.step1.desc': 'سجل بمعلوماتك الشخصية',
      'how.step2': 'اختر الخدمة',
      'how.step2.desc': 'حدد نوع الوثيقة المطلوبة',
      'how.step3': 'أكمل النموذج',
      'how.step3.desc': 'املأ المعلومات المطلوبة',
      'how.step4': 'قم بالتحميل',
      'how.step4.desc': 'استلم وقم بتحميل وثيقتك',

      // Footer
      'footer.about': 'خدمات تونس الإلكترونية',
      'footer.about.desc': 'بوابتك الرسمية لجميع الخدمات الإدارية عبر الإنترنت للجمهورية التونسية.',
      'footer.quick.links': 'روابط سريعة',
      'footer.faq': 'الأسئلة الشائعة',
      'footer.guide': 'دليل الاستخدام',
      'footer.contact': 'الاتصال',
      'footer.follow': 'تابعنا',
      'footer.rights': '© 2026 خدمات تونس الإلكترونية - جميع الحقوق محفوظة',
      'footer.legal': 'الشروط القانونية',
      'footer.privacy': 'سياسة الخصوصية',
      'footer.terms': 'شروط الاستخدام',
    }
  };

  constructor() {}

  setLanguage(lang: Language): void {
    this.languageSubject.next(lang);
  }

  t(key: string): string {
    const lang = this.languageSubject.value;
    return this.translations[lang][key as keyof typeof this.translations['fr']] || key;
  }

  getCurrentLanguage(): Language {
    return this.languageSubject.value;
  }
}
