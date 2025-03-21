import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { NoAvatarPipe } from '../pipes/no-avatar.pipe';

@Component({
  selector: 'app-item',
  imports: [NoAvatarPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() oneCandidate: Candidat;

  @Output() eventToListe = new EventEmitter<Candidat>();

  sendCandidateToListe() {
    this.eventToListe.emit(this.oneCandidate);
  }
}
