import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { NotificationComponent } from './component/notification/notification.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { SearchComponent } from './component/search/search.component';
import { UpdateRemoveDailougeComponent } from './component/update-remove-dailouge/update-remove-dailouge.component';
import { MessageBoxComponent } from './component/message-box/message-box.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { ButtomFotterComponent } from './component/buttom-fotter/buttom-fotter.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { AdminSideBarComponent } from './component/admin-side-bar/admin-side-bar.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, AdminHeaderComponent, NotificationComponent, SearchComponent, UpdateRemoveDailougeComponent, MessageBoxComponent, SideBarComponent, ButtomFotterComponent, AdminSideBarComponent],
  imports: [
    CommonModule,
    PickerModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MaterialModule
    // AppRoutingModule
  ],
  exports:[HeaderComponent,AdminSideBarComponent,AdminHeaderComponent,FooterComponent,UpdateRemoveDailougeComponent ,SideBarComponent,ButtomFotterComponent]
})
export class CoreModule { }
