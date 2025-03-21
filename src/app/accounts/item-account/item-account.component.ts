import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-account',
  imports: [],
  templateUrl: './item-account.component.html',
  styleUrl: './item-account.component.css',
})
export class ItemAccountComponent {
  @Input() oneAccount;

  updateStatus(newStatus) {
    this.oneAccount.status = newStatus;
  }
}
