import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  imports: [],
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css',
})
export class AddAccountComponent {
  allOptions = ['', 'active', 'inactive', 'unknown'];
  @Output() eventToHomeAccount = new EventEmitter();

  addHandler(nameValue, selectValue) {
    this.eventToHomeAccount.emit({
      name: nameValue,
      status: selectValue,
    });
  }
}
