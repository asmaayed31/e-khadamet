import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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
      createAccount: "Créer un compte",
      successMessage: "vous pouvez maintenant connecter avec le mot de passe envoyer a votre numéro"
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
      createAccount: "إنشاء حساب",
      successMessage: "يمكنك الآن الاتصال بكلمة المرور المرسلة إلى رقم هاتفك"
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
    ReactiveFormsModule,
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
export class AuthFormComponent implements AuthFormProps, OnInit {
  @Input() language: Language = 'fr';
  isLogin = true;
  showSuccessMessage = false;
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });

    this.registerForm = this.fb.group({
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/)]],
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/)]],
      dob: ['', [Validators.required, this.dateNotInFutureValidator]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]]
    });
  }

  dateNotInFutureValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const minDate = new Date(today.getFullYear() - 90, today.getMonth(), today.getDate());
    if (selectedDate > today || selectedDate < minDate) {
      return { invalidDate: true };
    }
    return null;
  }

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
    if (this.isLogin && this.loginForm.valid) {
      // Navigate to verifOTP for login
      this.router.navigate(['/verifOTP']);
    } else if (!this.isLogin && this.registerForm.valid) {
      // Handle registration
      console.log('Registration submitted');
      // Switch to login form after successful registration
      this.isLogin = true;
      this.showSuccessMessage = true;
    }
  }

  get phoneError() {
    const control = this.loginForm.get('phone');
    if (control?.hasError('required')) {
      return 'Le numéro de téléphone est requis.';
    }
    if (control?.hasError('pattern')) {
      return 'Le numéro de téléphone doit contenir exactement 8 chiffres.';
    }
    return '';
  }

  get passwordError() {
    const control = this.loginForm.get('password');
    if (control?.hasError('required')) {
      return 'Le mot de passe est requis.';
    }
    if (control?.hasError('minlength') || control?.hasError('maxlength')) {
      return 'Le mot de passe doit contenir exactement 6 caractères.';
    }
    return '';
  }

  get lastNameError() {
    const control = this.registerForm.get('lastName');
    if (control?.hasError('required')) {
      return 'Le nom est requis.';
    }
    if (control?.hasError('pattern')) {
      return 'Le nom doit contenir uniquement des lettres.';
    }
    return '';
  }

  get firstNameError() {
    const control = this.registerForm.get('firstName');
    if (control?.hasError('required')) {
      return 'Le prénom est requis.';
    }
    if (control?.hasError('pattern')) {
      return 'Le prénom doit contenir uniquement des lettres.';
    }
    return '';
  }

  get dobError() {
    const control = this.registerForm.get('dob');
    if (control?.hasError('required')) {
      return 'La date de naissance est requise.';
    }
    if (control?.hasError('invalidDate')) {
      return 'Date de naissance invalide.';
    }
    return '';
  }

  get registerPhoneError() {
    const control = this.registerForm.get('phone');
    if (control?.hasError('required')) {
      return 'Le numéro de téléphone est requis.';
    }
    if (control?.hasError('pattern')) {
      return 'Le numéro de téléphone doit contenir exactement 8 chiffres.';
    }
    return '';
  }
}
