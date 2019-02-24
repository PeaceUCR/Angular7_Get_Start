import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './testComponent/test.component';
import { TestComponentItem } from './testComponent/test.component.item';

import {TestRouteComponent} from  './testRouteComponent/app.test.route.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: TestComponent },
  { path: 'route', component: TestRouteComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestComponentItem,
    TestRouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
