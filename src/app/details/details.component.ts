import { Component, inject, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { NoAvatarPipe } from '../pipes/no-avatar.pipe';
import { GestionRecruesService } from '../services/gestion-recrues.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [NoAvatarPipe, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() selCandidate: Candidat;

  private recrueService = inject(GestionRecruesService);

  recruterHandler() {
    this.recrueService.addRecrue(this.selCandidate);
  }
}
