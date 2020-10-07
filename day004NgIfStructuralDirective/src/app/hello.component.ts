import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: '<h1>Hello {{name}}</h1>',
  // style: [`h1`]
})
export class HelloComponent {
  @Input() name: string;

  ngOnInit() {
    console.log('hello init');
  }

  ngOnDestroy() {
    console.log('hello Destroy');

  }
}
