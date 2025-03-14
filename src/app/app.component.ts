import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CvComponent } from './cv/cv.component';

@Component({
  selector: 'app-root',
  imports: [FirstComponent, SecondComponent, CvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-GL-A-25';

  loggerMessage(msg: any) {
    console.log(msg);
  }
}
