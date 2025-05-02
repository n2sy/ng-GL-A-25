import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [FormsModule, JsonPipe],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  private candSer = inject(GestionCandidatsService);
  private router = inject(Router);
  submitted = false;
  submitHandler(newCandidat, e) {
    //console.log(e.target[4].files[0]);
    this.submitted = true;
    let formData = new FormData();
    formData.set('avatar', e.target[4].files[0]);
    this.candSer.uploadAvatar(formData).subscribe({
      next: (response) => {
        console.log(response);
        newCandidat.avatar = response['fileName'];
        this.candSer.addCandidatAPI(newCandidat).subscribe(
            {
                next : (response) => {
                    alert(response["message"]);
                    this.router.navigateByUrl("/cv")
                },
                error : (err) => {
                        console.log("Probléme liée à l'ajout d'un candidat");
                        
                }
            }
        )
      },
      error: (err) => {
        console.log("Probléme liée à l'upload du avatar");
      },
    });

    // this.candSer.addCandidat(newCandidat);
    // this.router.navigateByUrl("/cv");
  }
}
