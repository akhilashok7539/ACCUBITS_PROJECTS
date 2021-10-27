import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListViewComponent } from './products-list-view/products-list-view.component';
import { MaterialModule } from '@app/shared/material/material.module';
import { CoreModule } from '@app/core/core.module';
import { AllProductsViewComponent } from './all-products-view/all-products-view.component';
import { CreateProductsListComponent } from './create-products-list/create-products-list.component';
import { CreateLinkProductComponent } from './create-link-product/create-link-product.component';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductsListViewComponent, AllProductsViewComponent, CreateProductsListComponent, CreateLinkProductComponent],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsListModule { }
