import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsViewComponent } from './all-products-view/all-products-view.component';
import { CreateProductsListComponent } from './create-products-list/create-products-list.component';
import { ProductsListViewComponent } from './products-list-view/products-list-view.component';

const routes: Routes = [
  {
    path: "list",
    component: ProductsListViewComponent
  },
  {
    path: "all-product",
    component: AllProductsViewComponent
  },
  {
    path: "create",
    component: CreateProductsListComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsListRoutingModule { }
