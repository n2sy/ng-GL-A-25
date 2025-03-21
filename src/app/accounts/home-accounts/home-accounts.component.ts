import { Component } from '@angular/core';
import { AddAccountComponent } from '../add-account/add-account.component';
import { ItemAccountComponent } from '../item-account/item-account.component';

@Component({
  selector: 'app-home-accounts',
  imports: [AddAccountComponent, ItemAccountComponent],
  templateUrl: './home-accounts.component.html',
  styleUrl: './home-accounts.component.css',
})
export class HomeAccountsComponent {
  tabAccounts = [
    {
      name: 'Wassim Account',
      status: 'active',
    },
    {
      name: 'Najwa Account',
      status: 'inactive',
    },
  ];

  addAccount(newAccount) {
    this.tabAccounts.push(newAccount);
  }
}
