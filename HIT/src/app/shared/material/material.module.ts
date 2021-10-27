import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';

const materialComponents=[MatDatepickerModule,MatMenuModule,MatSidenavModule,MatButtonModule,MatIconModule,MatNativeDateModule,MatFormFieldModule,MatTooltipModule]
@NgModule({
  imports: [materialComponents],
  exports:[materialComponents]
})
export class MaterialModule { }
