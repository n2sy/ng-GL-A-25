import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-liste',
  imports: [ItemComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
//  providers: [GestionCandidatsService],
})
export class ListeComponent {
  listeCandidats: Candidat[] = [];
  @Output() eventToCv = new EventEmitter<Candidat>();

  constructor(private candSer: GestionCandidatsService) {}

  ngOnInit() {
   // this.listeCandidats = this.candSer.getAllCandidats();
    this.candSer.getAllCandidatsAPI().subscribe(
        {
            next : (response : Candidat[]) => {
                console.log(response);
                
                this.listeCandidats = response;
            },
            error : (err) => {
                console.log(err);
                alert('Connexion impossible... chargement de données fictives');
                this.listeCandidats = this.candSer.getAllCandidats();
                
            }
        }
    )
  }

  showCandidats() {
    console.log(this.candSer.getAllCandidats());
  }

  sendCandidateToCv(cand) {
    this.eventToCv.emit(cand);
  }
}
