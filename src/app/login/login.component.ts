import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  defaultLanguage = 'php';
  myCommentaire = "Rien à signaler..."
  submitHandler(f: NgForm) {
    console.log(f);
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
