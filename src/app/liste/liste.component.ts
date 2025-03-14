import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  imports: [ItemComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
})
export class ListeComponent {
  @Input() listeCandidats: Candidat[] = [];
  @Output() eventToCv = new EventEmitter<Candidat>();

  sendCandidateToCv(cand) {
    this.eventToCv.emit(cand);
  }
}
