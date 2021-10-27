import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule } from '@angular/router';
import { TablePaginationFooterComponent } from './component/table-pagination-footer/table-pagination-footer.component';
import { CsvFileUploadComponent } from './component/csv-file-upload/csv-file-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/shared/material/material.module';
import { FileDragDropDirective } from '../directives/file-drag-drop.directive';
import { TableFilterOptionComponent } from './component/table-filter-option/table-filter-option.component';
import { ClickOutsideDirective } from '../directives/click-outside.directive';

@NgModule({
  declarations: [SideBarComponent, HeaderComponent, ClickOutsideDirective,FileDragDropDirective,TablePaginationFooterComponent, CsvFileUploadComponent, TableFilterOptionComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[HeaderComponent,SideBarComponent,TableFilterOptionComponent,TablePaginationFooterComponent,CsvFileUploadComponent]
})
export class CoreModule { }
