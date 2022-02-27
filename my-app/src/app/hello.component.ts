import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: '<h2>{{title}}</h2>',
})
export class HelloWorldComponent {
  title: string = 'hello world from component';
}
