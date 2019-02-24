/**
 * Created by hea on 2/21/19.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../app.data.service";

@Component({
  selector: 'app-test', //<app-test><app-test> element then compile into component
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

//OnInit? https://angular.io/guide/lifecycle-hooks#lifecycle-sequence
export class TestComponent implements OnInit{
    //equals this.data = ""....
    data =  "test data for binding";
    passingData = "I am data from parent";
    isDisabled = false;
    name = "";
    items = ["item1","item2","item3"];

    @ViewChild('myViewElement') myViewElement;

    constructor(private dataService: DataService){
      /* change not work, use arrow function
      setTimeout(function () {
        this.isDisabled = true;
      },2000);
      */

      //this inside your arrow function would have the same value as it did right before the arrow function was assigned.
      setTimeout(()=> {this.isDisabled = true;}
      ,2000);

      dataService.getData().subscribe(value=>{
        console.log(value);
      }, error=>{
        console.log("ooh!"+error);
      });
    }

    ngOnInit(){

    }

    clickHandler(){
      console.log("click me has been clicked!");
      console.log(this);
      console.log(this.myViewElement);
    }

    changeHandler(event : any){
      console.log("input value changes");
      console.log(event);
    }

    isValid():boolean{
      if(this.name&&this.name.length>3){
        return true;
      }
      return false;
    }

    childClickHandler(childEvent){
      console.log(childEvent.index+" child element has been clicked");
      console.log(childEvent.eventObj);
    }
}
