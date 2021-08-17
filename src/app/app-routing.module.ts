import { QaFeComponent } from './qa-fe/qa-fe.component';
import { QaBeComponent } from './qa-be/qa-be.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'qa_be',
    component: QaBeComponent,
  },
  { path: 'qa_fe', component: QaFeComponent },
  {
    path:"**",
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
