import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-exemple-signals',
  imports: [],
  templateUrl: './exemple-signals.component.html',
  styleUrl: './exemple-signals.component.css',
})
export class ExempleSignalsComponent {
  langage = signal<string>('javascript');
  annee = signal<number>(2025);

  message = computed(() => {
    return this.annee() + " est l'année de " + this.langage();
  });

  constructor() {
    effect(() => {
      console.log('La valeur du signal ' + this.langage() + ' a été modifiée');
    });
  }

  changeSignal() {
    this.langage.set('Java');
  }

  changeSignalV2() {
    this.langage.update((previousValue) => {
      return previousValue + ' et java';
    });
  }

  changeSignalAnnee() {
    this.annee.set(2030);
  }
}
