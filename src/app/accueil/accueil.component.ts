import { HttpClient } from '@angular/common/http';
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
    constructor(private router : Router, private http : HttpClient) { }
    
    ngOnInit() {
        this.http.get("https://jsonplaceholder.typicode.com/userhhs").subscribe(
            {
                next : (response) => {
                    console.log(response);  
                },
                error : (err) => {
                    console.log(err);  
                },
                complete : () => {
                    console.log("Flux fermée");
                }
            }
        )
    }
    
    goToAccounts() {
        this.router.navigateByUrl("accounts")
    }
    
    goToCv() {
        this.router.navigate(['cv'])
    }

}
