import type { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { HomeProductsComponent } from './products/home-products/home-products.component';
import { InfosComponent } from './infos/infos.component';

export let myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: InfosComponent },
  { path: 'accounts', component: HomeAccountsComponent },
  { path: 'products', component: HomeProductsComponent },
];
