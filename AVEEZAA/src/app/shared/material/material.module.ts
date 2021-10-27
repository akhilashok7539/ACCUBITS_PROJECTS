import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';

const materialComponents=[MatDatepickerModule,MatProgressBarModule,MatButtonModule,MatSidenavModule,MatMenuModule,MatCheckboxModule,MatSnackBarModule
  ,MatIconModule,MatNativeDateModule,MatFormFieldModule,MatTooltipModule,MatPaginatorModule,MatTabsModule]
@NgModule({
  imports: [materialComponents],
  exports:[materialComponents]
})
export class MaterialModule { }
