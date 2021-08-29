import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from './share/share/share.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionFeComponent } from './pages/question-fe/question-fe.component';
import { QuestionBeComponent } from './pages/question-be/question-be.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QuestionDetailComponent } from './pages/question-detail/question-detail.component';
import { AddCaseComponent } from './pages/add-case/add-case.component';
import { EditCaseComponent } from './pages/edit-case/edit-case.component';
import { AddTypeComponent } from './pages/add-type/add-type.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent, QuestionFeComponent, QuestionBeComponent, QuestionDetailComponent, AddCaseComponent, EditCaseComponent, AddTypeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
