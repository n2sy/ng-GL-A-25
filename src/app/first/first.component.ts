import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-first',
  imports: [FormsModule, SecondComponent],
  templateUrl: './first.component.html',
  //styleUrl: './first.component.css'
})
export class FirstComponent {
  section: string = 'GL-A';
  textColor: string = 'pink';
  hd: boolean = false;

  clickHandler() {
    alert("J'ai été cliqué !");
  }

  updateSection(newValue: any) {
    this.section = newValue;
  }
}
