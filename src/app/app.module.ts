import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QaBeComponent } from './qa-be/qa-be.component';
import { QaFeComponent } from './qa-fe/qa-fe.component';

@NgModule({
  declarations: [
    AppComponent,
    QaBeComponent,
    QaFeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
