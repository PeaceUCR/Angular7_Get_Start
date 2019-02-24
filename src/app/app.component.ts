import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root', //match the name root element in index.html and then replace by template
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None// no build-in attribute in html element in browser, possible for style applied scope https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656086?start=0
})
export class AppComponent {
  title = 'first-angular7';
}
