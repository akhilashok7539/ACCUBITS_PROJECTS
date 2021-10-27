import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { MaterialModule } from '@app/shared/material/material.module';
import { CoreModule } from '@app/core/core.module';
import { CustomersViewComponent } from './customers-view/customers-view.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { CustomersProductlistComponent } from './customers-productlist/customers-productlist.component';
import { CustomersCatelogueComponent } from './customers-catelogue/customers-catelogue.component';
import { CustomersCatelogueHistoryComponent } from './customers-catelogue-history/customers-catelogue-history.component';
import { CustomerProductListViewComponent } from './customer-product-list-view/customer-product-list-view.component';
import { CustomersViewCatelogueHistoryVersionComponent } from './customers-view-catelogue-history-version/customers-view-catelogue-history-version.component';


@NgModule({
  declarations: [CustomersListComponent, CustomersViewComponent, CustomersDetailsComponent, CustomersProductlistComponent, CustomersCatelogueComponent, CustomersCatelogueHistoryComponent, CustomerProductListViewComponent, CustomersViewCatelogueHistoryVersionComponent],
  entryComponents:[CustomerProductListViewComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
