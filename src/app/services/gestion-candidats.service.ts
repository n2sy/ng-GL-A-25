import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private allCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 52, 'chef de projet', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 27, 'designer', 'lisa.png'),
    new Candidat(4, 'nidhal', 'jelassi', 40, 'enseignant'),
  ];

  getAllCandidats() {
    return this.allCandidats;
  }

  addCandidat() {
    this.allCandidats.push(
      new Candidat(3, 'NEW', 'CANDIDAT', 27, 'designer', 'lisa.png')
    );
  }

  constructor() {}
}
