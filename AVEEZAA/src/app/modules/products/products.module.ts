import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsViewComponent } from './products-view/products-view.component';
import { MaterialModule } from '@app/shared/material/material.module';
import { CoreModule } from '@app/core/core.module';
import { CreateProductsComponent } from './create-products/create-products.component';

@NgModule({
  declarations: [ProductsViewComponent, CreateProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    CoreModule
  ]
})
export class ProductsModule { }
