import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewQuestionsApptitudePage } from './view-questions-apptitude.page';

const routes: Routes = [
  {
    path: '',
    component: ViewQuestionsApptitudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewQuestionsApptitudePageRoutingModule {}
