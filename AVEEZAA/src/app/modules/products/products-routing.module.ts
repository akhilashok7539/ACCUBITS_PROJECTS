import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductsComponent } from './create-products/create-products.component';
import { ProductsViewComponent } from './products-view/products-view.component';

const routes: Routes = [
  {
    path: "list",
    component: ProductsViewComponent
  },
  {
    path: "create",
    component: CreateProductsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
