import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersViewComponent } from './customers-view/customers-view.component';

const routes: Routes = [
  {
    path: "list",
    component: CustomersListComponent
  },
  {
    path: "view",
    component: CustomersViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
