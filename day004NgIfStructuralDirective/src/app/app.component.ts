import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'day004NgIfStructuralDirective';
  user = {
    name: 'HDG',
    age: 24,
  };
}
