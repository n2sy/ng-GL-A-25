import {
  DatePipe,
  NgClass,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { ShortPipe } from '../pipes/short.pipe';

@Component({
  selector: 'app-manage-servers',
  imports: [NgClass, UpperCasePipe, TitleCasePipe, DatePipe, ShortPipe],
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
  tabServers = [
    {
      name: 'Production Server',
      type: 'small',
      date_d: new Date(2020, 6, 5),
      status: 'critical',
    },
    {
      name: 'Development Test Server',
      type: 'large',
      date_d: new Date(2020, 6, 5),
      status: 'stable',
    },
    {
      name: 'Development Server',
      type: 'medium',
      date_d: new Date(2022, 2, 10),
      status: 'offline',
    },
    {
      name: 'Nidhal Server',
      type: 'small',
      date_d: new Date(2020, 6, 5),
      status: 'stable',
    },
  ];

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-warning': st == 'offline',
      'list-group-item-danger': st == 'critical',
    };
  }
}
