import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CvComponent } from './cv/cv.component';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { DirectComponent } from './direct/direct.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { RecruterComponent } from './recruter/recruter.component';
import { GestionCandidatsService } from './services/gestion-candidats.service';
import { ExempleSignalsComponent } from './exemple-signals/exemple-signals.component';
import { HomeProductsComponent } from './products/home-products/home-products.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    FirstComponent,
    SecondComponent,
    CvComponent,
    HomeAccountsComponent,
    DirectComponent,
    ManageServersComponent,
    RecruterComponent,
    ExempleSignalsComponent,
    HomeProductsComponent,
    RouterOutlet,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [GestionCandidatsService],
})
export class AppComponent {
  title = 'ng-GL-A-25';

  loggerMessage(msg: any) {
    console.log(msg);
  }
}
