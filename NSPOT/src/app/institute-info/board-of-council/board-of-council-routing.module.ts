import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardOfCouncilPage } from './board-of-council.page';

const routes: Routes = [
  {
    path: '',
    component: BoardOfCouncilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardOfCouncilPageRoutingModule {}
