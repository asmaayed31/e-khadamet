import { Routes } from '@angular/router';
import { Home } from './accueil1/home/home';
import { Acceuil2Component } from './acceuil 2/acceuil2.component';
import { ServicesComponent } from './noservices/no-services/no-services.component';
import { VerifOtpComponent } from './verifOTP/verifOTP.component';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'acceuil2',
    component: Acceuil2Component,
  },
  {
    path: 'noservices',
    component: ServicesComponent,
  },
  {
    path: 'verifOTP',
    component: VerifOtpComponent,
  },
];

