import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  imports: [NgStyle, NgClass],
  templateUrl: './direct.component.html',
  styleUrl: './direct.component.css',
})
export class DirectComponent {
  bgColor = 'red';
  police = 'phosphate';
}
