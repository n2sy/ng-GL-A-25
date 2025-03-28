import { Component, inject } from '@angular/core';
import { GestionRecruesService } from '../services/gestion-recrues.service';
import { Candidat } from '../models/candidat';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-recruter',
  imports: [ItemComponent],
  templateUrl: './recruter.component.html',
  styleUrl: './recruter.component.css',
})
export class RecruterComponent {
  tabRecrues: Candidat[] = [];
  private recrueSer = inject(GestionRecruesService);

  ngOnInit() {
    this.tabRecrues = this.recrueSer.allRecrues;
  }
}
