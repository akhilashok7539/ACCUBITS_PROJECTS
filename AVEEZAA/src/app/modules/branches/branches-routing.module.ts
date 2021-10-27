import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchsListingComponent } from './branchs-listing/branchs-listing.component';
import { CreateBranchComponent } from './create-branch/create-branch.component';

const routes: Routes = [
  {
    path: "list",
    component: BranchsListingComponent
  },
  {
    path: "create",
    component: CreateBranchComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
