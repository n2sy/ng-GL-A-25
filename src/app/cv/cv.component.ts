import { Component, inject } from '@angular/core';
import { ListeComponent } from '../liste/liste.component';
import { DetailsComponent } from '../details/details.component';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { RecruterComponent } from '../recruter/recruter.component';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-cv',
  imports: [ListeComponent, DetailsComponent, RecruterComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  providers: [FirstService, GestionRecruesService],
})
export class CvComponent {
  tabCandidats: Candidat[] = [];
  selectedCandidat: Candidat;

  //1ere méthode
  constructor(
    private firstSer: FirstService,
    private candSer: GestionCandidatsService
  ) {}

  //2ème méthode
  //private firstSerV2 = inject(FirstService);

  ngOnInit() {
    this.firstSer.showInfos();
    //this.firstSerV2.showInfos();
    this.tabCandidats = this.candSer.getAllCandidats();
  }

  addHandler() {
  //  this.candSer.addCandidat();
  }

  showCandidats() {
    console.log(this.candSer.getAllCandidats());
  }

  recupererCandidatSelectionne(cand) {
    this.selectedCandidat = cand;
    console.log(this.selectedCandidat);
  }
}
