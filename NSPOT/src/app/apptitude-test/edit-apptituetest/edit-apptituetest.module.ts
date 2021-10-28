import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditApptituetestPageRoutingModule } from './edit-apptituetest-routing.module';

import { EditApptituetestPage } from './edit-apptituetest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditApptituetestPageRoutingModule
  ],
  declarations: [EditApptituetestPage]
})
export class EditApptituetestPageModule {}
