import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemSettingsRoutingModule } from './system-settings-routing.module';
import { ViewSystemSettingsComponent } from './view-system-settings/view-system-settings.component';


@NgModule({
  declarations: [ViewSystemSettingsComponent],
  imports: [
    CommonModule,
    SystemSettingsRoutingModule
  ]
})
export class SystemSettingsModule { }
