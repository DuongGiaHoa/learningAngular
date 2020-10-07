import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'day003DataBinding';
  inputType = 'text';
  user = {
    name: 'hoa',
    age: 24,
  };

  handler(){
    console.log('AppComponent -> handler -> handler');

  }
}
