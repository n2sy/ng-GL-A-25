import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
    candidateToUpdate : Candidat;
    private actRoute = inject(ActivatedRoute);
    private router = inject(Router);
    private candSer = inject(GestionCandidatsService);
    
    ngOnInit() {
        let id = this.actRoute.snapshot.paramMap.get('id');
      this.candSer.getCandidateByIdAPI(id).subscribe(
            {
                next :(response : Candidat) => {
                    this.candidateToUpdate = response
                }
            }
        )
    }
    submitHandler(newValueForm) {
        
        
        this.candSer.updateCandidatAPI(newValueForm,this.candidateToUpdate._id).subscribe({
            next : (response) => {
                alert(response["message"]);
                this.router.navigateByUrl("/cv")
            }
        })
    }
}
