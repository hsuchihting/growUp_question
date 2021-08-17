import { HomeComponent } from './pages/home/home.component';
import { Option1Component } from './pages/option1/option1.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QaBeComponent } from './pages/option1/qa-be/qa-be.component';
import { QaFeComponent } from './pages/option1/qa-fe/qa-fe.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'option1',
    component: Option1Component,
    children: [
      {
        path: '',
        component: Option1Component,
      },
      {
        path: 'qa_be',
        component: QaBeComponent,
      },
      {
        path: 'qa_fe',
        component: QaFeComponent,
      },
    ],
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
