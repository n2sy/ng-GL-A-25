import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  defaultLanguage = 'php';
  myCommentaire = "Rien à signaler...";
  showRegister = true;
  showError = false;
  private authSer = inject(AuthService);
  private router = inject(Router);
  submitHandler(f: NgForm) {
    console.log(f);
    if(this.showRegister) {
        this.authSer.inscription(f.value).subscribe(
            {
                next : (response) => {
                    alert("Inscription réussie")
                    this.showRegister = false;
                    f.reset();
                }
            }
        )
    }
    else {
        this.authSer.seConnecter(f.value).subscribe(
            {
                next : (response) => {
                    localStorage.setItem("access_token", response["token"])
                    alert("Connextion réussie");
                    
                    this.router.navigateByUrl("/cv")
                    
                    
                    // this.showRegister = true;
                },
                error : (err) => {
                    this.showError = true;
                    f.reset();
                }
            }
        )
        
    }
  }
  
  toggleShowRegister() {
    this.showRegister = !this.showRegister;
  }

  onSubmit(f) {
    console.log(f);
    
  }
  
  generatePwd(f: NgForm) {
    f.form.patchValue(
        {
            password : "azerty123"
        }
    )
  }
  
  resetHandler(f : NgForm){
    f.form.reset();
}
}
