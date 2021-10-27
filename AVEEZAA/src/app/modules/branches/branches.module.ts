import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { BranchsListingComponent } from './branchs-listing/branchs-listing.component';
import { MaterialModule } from '@app/shared/material/material.module';
import { CoreModule } from '@app/core/core.module';
import { CreateBranchComponent } from './create-branch/create-branch.component';


@NgModule({
  declarations: [BranchsListingComponent, CreateBranchComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    BranchesRoutingModule
  ]
})
export class BranchesModule { }
