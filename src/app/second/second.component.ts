import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
})
export class SecondComponent {
  @Input({ required: true }) cl: string = 'red';

  @Output() msgToParent = new EventEmitter();

  clickHandler() {
    this.msgToParent.emit('Message de la part du Second Component');
  }
}
