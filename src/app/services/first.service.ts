import { Injectable } from '@angular/core';

@Injectable()
export class FirstService {
  constructor() {}

  showInfos() {
    console.log('Je suis le First Service');
  }
}
