import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [FormsModule],
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
