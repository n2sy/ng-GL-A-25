import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [RouterLink],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
    //private router = inject(Router);
    constructor(private router : Router) { }
    
    goToAccounts() {
        this.router.navigateByUrl("accounts")
    }
    
    goToCv() {
        this.router.navigate(['cv'])
    }

}
