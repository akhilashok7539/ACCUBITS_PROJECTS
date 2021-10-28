import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApptitudeTestPage } from './apptitude-test.page';

const routes: Routes = [
  {
    path: '',
    component: ApptitudeTestPage
  },
  {
    path: 'view-questions-apptitude',
    loadChildren: () => import('./view-questions-apptitude/view-questions-apptitude.module').then( m => m.ViewQuestionsApptitudePageModule)
  },  {
    path: 'edit-apptituetest',
    loadChildren: () => import('./edit-apptituetest/edit-apptituetest.module').then( m => m.EditApptituetestPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApptitudeTestPageRoutingModule {}
