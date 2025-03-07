import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
})
export class SecondComponent {
  @Input({ required: true }) cl: string = 'red';
}
