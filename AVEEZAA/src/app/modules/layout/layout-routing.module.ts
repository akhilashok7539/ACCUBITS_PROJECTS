import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./layout.component";


const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
  children: [
    {
      path: "products",
      loadChildren: () => import('../products/products.module').then((m) => m.ProductsModule),
    },
    {
      path: "products-list",
      loadChildren: () => import('../products-list/products-list.module').then((m) => m.ProductsListModule),
    },
    {
      path: "customers",
      loadChildren: () => import('../customers/customers.module').then((m) => m.CustomersModule),
    },
    {
      path: "branches",
      loadChildren: () => import('../branches/branches.module').then((m) => m.BranchesModule),
    },
    {
      path: "user",
      loadChildren: () => import('../user-management/user-management.module').then((m) => m.UserManagementModule),
    },
    {
      path: "system-settings",
      loadChildren: () => import('../system-settings/system-settings.module').then((m) => m.SystemSettingsModule),
    },
  ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
