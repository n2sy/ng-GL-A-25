import { inject, Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GestionCandidatsService {
    link = "http://localhost:3000/cv/persons"
    private http = inject(HttpClient);
  private allCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 52, 'chef de projet', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 27, 'designer', 'lisa.png'),
    new Candidat(4, 'nidhal', 'jelassi', 40, 'enseignant'),
  ];
  
  uploadAvatar(f : FormData) {
    return this.http.post('http://localhost:3000/images/upload', f)
  }

  getAllCandidats() {
    return this.allCandidats;
  }
  getAllCandidatsAPI() {
   return  this.http.get(this.link)
  }

  getCandidateById(id) {
    return this.allCandidats.find((c) => c._id == id);
  }
  
  updateCandidat(uCand) {
    let i = this.allCandidats.findIndex(cand => cand._id == uCand._id);
    this.allCandidats[i] = uCand
  }

  addCandidat(newCandidate) {
    newCandidate.id = this.allCandidats[this.allCandidats.length - 1]._id + 1;;
    this.allCandidats.push(newCandidate);
  }
  addCandidatAPI(newCandidate) {
    return this.http.post(this.link + '/free', newCandidate);
  }
  
  deleteCandidat(id) {
    let i = this.allCandidats.findIndex(cand => cand._id == id);
    this.allCandidats.splice(i, 1)
  }

  constructor() {}
}
