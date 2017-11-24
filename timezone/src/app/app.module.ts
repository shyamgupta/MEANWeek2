import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as moment  from 'moment';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
