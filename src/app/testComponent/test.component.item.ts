/**
 * Created by hea on 2/22/19.
 */
import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-item', //<app-test><app-test> element then compile into component
  template: '<p (click)="clicking($event,index)">{{index}}.I am here! {{displayValue}}</p>'
})

export class TestComponentItem{
  @Input('displayIndex') index : number;
  @Input('displayValueAttribute') displayValue : string;

  //output & eventEmitter, refer to https://angular.io/guide/template-syntax#declaring-input-and-output-properties
  //https://angular.io/api/core/EventEmitter
  @Output() clicked = new EventEmitter<any>();

  clicking(event: any,index : number){
    this.clicked.emit({eventObj: event, index: index});
  }
}
