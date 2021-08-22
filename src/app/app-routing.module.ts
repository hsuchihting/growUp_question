import { EditCaseComponent } from './pages/edit-case/edit-case.component';
import { AddCaseComponent } from './pages/add-case/add-case.component';
import { QuestionDetailComponent } from './pages/question-detail/question-detail.component';
import { QuestionBeComponent } from './pages/question-be/question-be.component';
import { QuestionFeComponent } from './pages/question-fe/question-fe.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'questionFe',
    component: QuestionFeComponent,
  },
  {
    path: 'questionBe',
    component: QuestionBeComponent,
  },
  {
    path: 'question-detail',
    component: QuestionDetailComponent,
  },
  {
    path: 'add-case',
    component: AddCaseComponent,
  },
  {
    path: 'edit-case',
    component: EditCaseComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
