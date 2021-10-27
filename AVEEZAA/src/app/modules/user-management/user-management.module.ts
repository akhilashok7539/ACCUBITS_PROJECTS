import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { MaterialModule } from '@app/shared/material/material.module';
import { CoreModule } from '@app/core/core.module';


@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
