import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QaBeComponent } from './pages/option1/qa-be/qa-be.component';
import { QaFeComponent } from './pages/option1/qa-fe/qa-fe.component';
import { Option1Component } from './pages/option1/option1.component';


@NgModule({
  declarations: [
    AppComponent,
    QaBeComponent,
    QaFeComponent,
    Option1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
