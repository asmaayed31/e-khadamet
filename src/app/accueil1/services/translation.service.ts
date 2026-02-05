import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Language = 'fr' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<Language>('fr');
  public currentLanguage$ = this.currentLanguage.asObservable();
  private isBrowser: boolean;

  private translations: Record<Language, Record<string, string>> = {
    fr: {
      // Header
      'home': 'Accueil',
      'about': 'À propos',
      'services': 'Services',
      'contact': 'Contact',
      'login': 'Connexion',
      'language': 'Langue',

      // Hero
      'hero_title': 'Bienvenue sur e-Khadamet',
      'hero_subtitle': 'Obtenez votre attestation de résidence en toute simplicité',
      'hero_desc': 'Plateforme officielle pour l\'obtention des services administratifs en ligne',
      'start_now': 'Commencer Maintenant',
      'learn_more': 'En Savoir Plus',

      // Services
      'our_services': 'Nos Services',
      'services_desc': 'Accédez facilement à nos services',
      'residence_attestation': 'Attestation de Résidence',
      'residence_desc': 'Demande et obtention rapide de votre attestation',
      'track_request': 'Suivi de Demande',
      'track_desc': 'Suivez l\'état de votre demande en temps réel',
      'documents': 'Documents Requis',
      'documents_desc': 'Consultez la liste complète des documents',
      'support': 'Support Client',
      'support_desc': 'Assistance disponible 24h/24, 7j/7',
      'services.empty': 'Aucun service n\'est disponible pour ce secteur',

      // Features
      'why_choose': 'Pourquoi Choisir e-Khadamet ?',
      'fast': 'Rapide',
      'fast_desc': 'Traitement en moins de 24 heures',
      'secure': 'Sécurisé',
      'secure_desc': 'Vos données sont cryptées et protégées',
      'easy': 'Facile',
      'easy_desc': 'Interface intuitive et conviviale',
      'transparent': 'Transparent',
      'transparent_desc': 'Suivi en temps réel de votre demande',
      'support_text': 'Support',
      'support_text_desc': 'Assistance disponible à tout moment',

      // Stats
      'requests_processed': 'Demandes Traitées',
      'customer_satisfaction': 'Satisfaction Client',
      'avg_time': 'Délai Moyen',

      // CTA
      'ready_to_start': 'Prêt à Commencer ?',
      'create_account': 'Créer un Compte',
      'read_guide': 'Lire le Guide',

      // Footer
      'address': 'Adresse',
      'phone': 'Téléphone',
      'email': 'Email',
      'ministry': 'Ministère de l\'Intérieur',
      'tunisia': 'Tunis, Tunisie',
      'contact_ministry': 'Contacter le Ministère',
      'reply_24h': 'Réponse en 24h',
      'all_rights': 'Tous les droits réservés © 2026 e-Khadamet',

      // OTP Verification
      'otp_title': 'Vérification OTP',
      'otp_service': 'Attestation de Résidence',
      'otp_back_link': 'Retour à l\'accueil',
      'otp_header': 'Vérification OTP',
      'otp_desc': 'Entrez le code à 6 chiffres envoyé à votre téléphone',
      'verify': 'Vérifier',
      'no_code': 'Vous n\'avez pas reçu votre code OTP ?',
      'resend_in': 'Vous pouvez le renvoyer dans',
      'resend': 'Renvoyer le code',
      'otp_error': 'Veuillez saisir les 6 chiffres',
      'otp_resent': 'Un nouveau code OTP a été envoyé !',
    },
    ar: {
      // Header
      'home': 'الرئيسية',
      'about': 'عن البرنامج',
      'services': 'الخدمات',
      'contact': 'اتصل بنا',
      'login': 'تسجيل الدخول',
      'language': 'اللغة',

      // Hero
      'hero_title': 'مرحبا بك في خدماتي',
      'hero_subtitle': 'احصل على شهادة السكن بكل سهولة',
      'hero_desc': 'منصة رسمية للحصول على الخدمات الإدارية بشكل إلكتروني',
      'start_now': 'ابدأ الآن',
      'learn_more': 'تعرف على المزيد',

      // Services
      'our_services': 'خدماتنا',
      'services_desc': 'الوصول بسهولة إلى خدماتنا',
      'residence_attestation': 'شهادة السكن',
      'residence_desc': 'طلب والحصول السريع على شهادتك',
      'track_request': 'تتبع الطلب',
      'track_desc': 'تابع حالة طلبك في الوقت الفعلي',
      'documents': 'الوثائق المطلوبة',
      'documents_desc': 'استشير القائمة الكاملة للوثائق',
      'support': 'الدعم الفني',
      'support_desc': 'مساعدة متاحة على مدار الساعة',
      'services.empty': 'لا توجد خدمات متاحة لهذا القطاع',

      // Features
      'why_choose': 'لماذا اختيار خدماتي ؟',
      'fast': 'سريع',
      'fast_desc': 'معالجة خلال أقل من 24 ساعة',
      'secure': 'آمن',
      'secure_desc': 'بياناتك مشفرة ومحمية',
      'easy': 'سهل',
      'easy_desc': 'واجهة بديهية وسهلة الاستخدام',
      'transparent': 'شفاف',
      'transparent_desc': 'تتبع فوري لطلبك',
      'support_text': 'الدعم',
      'support_text_desc': 'المساعدة متاحة في أي وقت',

      // Stats
      'requests_processed': 'الطلبات المعالجة',
      'customer_satisfaction': 'رضا العملاء',
      'avg_time': 'الوقت المتوسط',

      // CTA
      'ready_to_start': 'هل أنت مستعد للبدء ؟',
      'create_account': 'إنشاء حساب',
      'read_guide': 'قراءة الدليل',

      // Footer
      'address': 'العنوان',
      'phone': 'الهاتف',
      'email': 'البريد الإلكتروني',
      'ministry': 'وزارة الداخلية',
      'tunisia': 'تونس، تونسية',
      'contact_ministry': 'اتصل بالوزارة',
      'reply_24h': 'رد في 24 ساعة',
      'all_rights': 'جميع الحقوق محفوظة © 2026 خدماتي',

      // OTP Verification
      'otp_title': 'التحقق من OTP',
      'otp_service': 'شهادة الإقامة',
      'otp_back_link': 'عودة إلى الرئيسية',
      'otp_header': 'التحقق من OTP',
      'otp_desc': 'أدخل الرمز المكون من 6 أرقام المرسل إلى هاتفك',
      'verify': 'التحقق',
      'no_code': 'لم تستلم رمز OTP الخاص بك؟',
      'resend_in': 'يمكنك إعادة إرساله في',
      'resend': 'إعادة إرسال الرمز',
      'otp_error': 'يرجى إدخال الأرقام الستة',
      'otp_resent': 'تم إرسال رمز OTP جديد!',
    }
  };

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    
    if (this.isBrowser) {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage) {
        this.currentLanguage.next(savedLanguage);
      }
    }
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage.value;
  }

  setLanguage(language: Language): void {
    this.currentLanguage.next(language);
    if (this.isBrowser) {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }

  get(key: string): string {
    const lang = this.getCurrentLanguage();
    return this.translations[lang][key as keyof typeof this.translations['fr']] || key;
  }

  instant(key: string): string {
    return this.get(key);
  }
}
