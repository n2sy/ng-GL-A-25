import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, type ParamMap } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import type { Candidat } from '../models/candidat';
import { NoAvatarPipe } from '../pipes/no-avatar.pipe';

@Component({
  selector: 'app-infos',
  imports: [RouterLink, NoAvatarPipe],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  selectedCandidate: Candidat;
  private actRoute = inject(ActivatedRoute);
  private candService = inject(GestionCandidatsService);
  private router = inject(Router);

  ngOnInit() {
    // console.log(this.actRoute.snapshot.params);
    this.selectedCandidate = this.candService.getCandidateById(
      this.actRoute.snapshot.paramMap.get('id')
    );
    // this.actRoute.paramMap.subscribe({
    //   next: (p: ParamMap) => {
    //     this.myId = p.get('id');
    //   },
    // });
  }
  
  deleteHandler() {
    if(confirm('Etes-vous sûr de vouloir supprimer ce candidat ?'))
         {
          this.candService.deleteCandidat(this.selectedCandidate._id);
          this.router.navigateByUrl('/cv');
            
         }
  }
}
