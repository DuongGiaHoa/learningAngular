import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'day006AttributeDirectiveClassStyle';

  isDanger = false;
  isWarning = false;
  classes = 'box pink-bg';
}
