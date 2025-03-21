import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { NoAvatarPipe } from '../pipes/no-avatar.pipe';

@Component({
  selector: 'app-details',
  imports: [NoAvatarPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() selCandidate: Candidat;
}
