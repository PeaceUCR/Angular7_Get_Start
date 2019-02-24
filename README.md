
# How Angular works(understand generated source code)?

https://www.udemy.com/the-complete-guide-to-angular-2/

/src/main.ts bootstrap the modules form /src/app/app.module.ts

in /src/app/app.module.ts contains /src/app/app.component.ts
    
    @Component({
      selector: 'app-root', //match the name root element in index.html and then replace by template
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })


    
Then let's create new component, in folder /src/app/testComponent,
declare component and export it, then
add <app-test></app-test>(will be compiled and convert to test component) in app.component.html
    
    <app-test></app-test>

add /src/app/app.module.ts
    
    @NgModule({
      declarations: [
        AppComponent,
        TestComponent // import and added here
      ],
      imports: [
        BrowserModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })

then new Ui will show in screen without err in err in browser console.

for **selector** in @Component : can select element, attributes.....refer to

https://angular.io/api/core/Directive#selector

for **styleUrls** in @Component: style only inside the Component

if want to add global style, put in /src/styles.css

bind data from export {{data}} in template 
    
    export class TestComponent {
        data: "test data for binding"
    }

binding element attr
    
    <button [disabled] = "isDisabled">Click Me</button>

binding and event handler, change fires like blur.....
    
    <button (click)="clickHandler()"  [disabled] = "isDisabled">Click Me</button>
    <input type="text" [placeholder]= "data" (change)="changeHandler($event)" />


two-way binding in input, first import FormsModule, change in src/app/app.module.ts
    
    import { FormsModule } from '@angular/forms';
    
    @NgModule({
      declarations: [
        AppComponent,
        TestComponent
      ],
      imports: [
        BrowserModule,
        FormsModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }

then in template
    
    <div><label>Name</label><input type="text" placeholder= "input your name" [(ngModel)]="name" /></div>
    <div>the name is {{name}}</div>
    
Now we create a child component src/app/testComponent/test.component.item.ts, (note each time create the new element,
remember to add in /src/app/app.module.ts),
how to **pass value from parent to child**,refer https://angular.io/guide/component-interaction
in child element, declare @Input(attr_name) variable : type
    
    export class TestComponentItem{
      @Input('displayValueAttribute') displayValue : string
    }

Then use Ng-For for repeated output
    
    <app-item *ngFor="let item of items" [displayValueAttribute]="item"></app-item>

Pass event handler, in parent element
    
        childClickHandler(index: number){
          console.log(index+" child element has been clicked");
        }
        <app-item *ngFor="let item of items; let i = index" [displayValueAttribute]="item" [displayIndex]="i" (clicked)="childClickHandler($event)"></app-item>
    
then in child element , note the **different name** of @output **clicked** and method **clicking**

    
what is output? https://angular.io/guide/template-syntax#declaring-input-and-output-properties
https://angular.io/api/core/EventEmitter
output for event passing,
output accept method from parent, then event_emiter, emit that parent method when child is being clicked? ?     
      
      @Output() clicked = new EventEmitter<number>();
    
      clicking(index : number){
        this.clicked.emit(index);
      } 

**=======Add Augury Extension to Chrome for Debug=======**
https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656262?start=0

Access HTML element in template by @ViewChild, in template
    
    <div #myViewElement>the name is {{name}}</div>
in ts,declare by
    
        @ViewChild('myViewElement') myViewElement;
Access by this.myViewElement
    
        clickHandler(){
          console.log("click me has been clicked!");
          console.log(this);
          console.log(this.myViewElement);
        }

Finally The component lifecycle may useful in development, check later
https://angular.io/guide/lifecycle-hooks
https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656102?start=275

    
# Dependency Injection 
   
https://angular.io/guide/architecture-services
https://angular.io/guide/singleton-services

the http request is observable NOT promise
https://stackoverflow.com/questions/37364973/promise-vs-observable
https://angular.io/guide/observables

but can convert to promise by 
https://stackoverflow.com/questions/36777284/angular-2-convert-observable-to-promise

**how to create?**
1. add HttpClientModule in app.module.ts
2. add new service app/app.data.service.ts
3. inject test.component.ts
    
        constructor(private dataService: DataService){
         
          dataService.getData().subscribe(value=>{
            console.log(value);
          });
        }

**Singleton Service**
![alt text](https://github.com/PeaceUCR/Angular7_Get_Start/blob/master/first-angular7/Screen%20Shot%202019-02-23%20at%206.11.30%20PM.png?raw=true)

# Router
https://angular.io/guide/router

In app.module.ts 

import { RouterModule, Routes } from '@angular/router'  

then set routes
        
        const appRoutes: Routes = [
          { path: 'home', component: TestComponent },
          { path: 'route', component: TestRouteComponent },
        ];

add to  import
      
      RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
          )
    

finally in app.component.html
    
    <router-outlet></router-outlet>
    <!-- Routed components go here -->

Then it works now, go / or /route to check ,
more details check https://angular.io/guide/router


==========Auto Generated Doc Separator=======================

## FirstAngular7

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
