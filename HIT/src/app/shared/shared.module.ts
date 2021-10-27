import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error/form-error.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ClickOutsideDirective } from '../directives/click-outside.directive';
import { TwoDigitDecimaNumberDirective } from '../directives/two-digit-decima-number.directive';
import { InputNumberDirective } from '../directives/input-number.directive';
import { DebounceDirective } from '../directives/debounce.directive';
import { AutoFocusDirective } from '../directives/auto-focus.directive'
import { SearchPipe } from '../pipes/search.pipe';
import { TimeAgoPipe } from '../pipes/time-ago.pipe';
import { from } from 'rxjs';
import { ShortNumberPipe } from '../pipes/short-number.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [FormErrorComponent, 
    DropdownComponent, 
    ClickOutsideDirective, 
    AutoFocusDirective,
    TwoDigitDecimaNumberDirective,
    InputNumberDirective,
    DebounceDirective,
    SearchPipe,
    TimeAgoPipe,
    ShortNumberPipe,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ShareButtonsModule,
    ShareIconsModule
  ],
  exports: [FormErrorComponent,TranslateModule,ShareButtonsModule,ShareIconsModule, DropdownComponent, ClickOutsideDirective, InputNumberDirective, TwoDigitDecimaNumberDirective, DebounceDirective,SearchPipe,TimeAgoPipe,ShortNumberPipe]
})
export class SharedModule { }
