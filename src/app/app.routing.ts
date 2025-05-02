import type { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { HomeProductsComponent } from './products/home-products/home-products.component';
import { InfosComponent } from './infos/infos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { allowGuard } from './allow.guard';
import { blockGuard } from './block.guard';
import { quitterLoginGuard } from './quitter-login.guard';
import { quitterFormGuard } from './quitter-form.guard';

export let myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent, canActivate : [allowGuard], canDeactivate : [quitterFormGuard] },
      { path: ':id', component: InfosComponent },
      { path: ':id/edit', component: EditComponent, canActivate : [allowGuard] },
    ],
  },
  { path: 'accounts', component: HomeAccountsComponent },
  { path: 'login', component: LoginComponent, canActivate : [blockGuard], canDeactivate : [quitterLoginGuard] },
  { path: 'products', component: HomeProductsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }, //wild route
];
