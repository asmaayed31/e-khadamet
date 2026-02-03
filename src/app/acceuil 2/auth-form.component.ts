import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent, CardContentComponent, CardDescriptionComponent, CardHeaderComponent, CardTitleComponent } from '../components/ui/card';
import { InputComponent } from '../components/ui/input';
import { LabelComponent } from '../components/ui/label';
import { ButtonComponent } from '../components/ui/button';

type Language = 'fr' | 'ar';

interface AuthFormProps {
  language: Language;
}

const content = {
  fr: {
    login: {
      title: "Connexion",
      description: "Connectez-vous à votre compte e-khadammet",
      phone: "Numéro de téléphone",
      password: "Mot de passe",
      button: "Se connecter",
      noAccount: "Vous n'avez pas de compte ?",
      createAccount: "Créer un compte"
    },
    register: {
      title: "Créer un compte",
      description: "Inscrivez-vous pour accéder aux services",
      lastName: "Nom",
      firstName: "Prénom",
      dob: "Date de naissance",
      phone: "Numéro de téléphone",
      password: "Mot de passe",
      button: "S'inscrire",
      hasAccount: "Vous avez déjà un compte ?",
      login: "Se connecter"
    }
  },
  ar: {
    login: {
      title: "تسجيل الدخول",
      description: "قم بتسجيل الدخول إلى حسابك e-khadammet",
      phone: "رقم الهاتف",
      password: "كلمة المرور",
      button: "تسجيل الدخول",
      noAccount: "ليس لديك حساب؟",
      createAccount: "إنشاء حساب"
    },
    register: {
      title: "إنشاء حساب",
      description: "قم بالتسجيل للوصول إلى الخدمات",
      lastName: "الاسم",
      firstName: "اللقب", 
      dob: "تاريخ الميلاد",
      phone: "رقم الهاتف",
      password: "كلمة المرور",
      button: "التسجيل",
      hasAccount: "لديك حساب بالفعل؟",
      login: "تسجيل الدخول"
    }
  }
};

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    CardContentComponent,
    CardDescriptionComponent,
    CardHeaderComponent,
    CardTitleComponent,
    InputComponent,
    LabelComponent,
    ButtonComponent
  ]
})
export class AuthFormComponent implements AuthFormProps {
  @Input() language: Language = 'fr';
  isLogin = true;

  get loginContent() {
    return content[this.language].login;
  }

  get registerContent() {
    return content[this.language].register;
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    // Handle form submission
  }
}
