import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewSystemSettingsComponent } from './view-system-settings/view-system-settings.component';

const routes: Routes = [
  {
    path: "view",
    component: ViewSystemSettingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemSettingsRoutingModule { }
