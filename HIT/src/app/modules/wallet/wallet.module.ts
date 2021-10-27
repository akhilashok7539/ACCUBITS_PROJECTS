import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { WalletLandingComponent } from './wallet-landing/wallet-landing.component';
import { RedeemPopupComponent } from './redeem-popup/redeem-popup.component';
import { RedeemConfirmPopupComponent } from './redeem-confirm-popup/redeem-confirm-popup.component';
import { ViewNoticeComponent } from './view-notice/view-notice.component';
import { RedeemPopUpConfirmationComponent } from './redeem-pop-up-confirmation/redeem-pop-up-confirmation.component';
// import { AddMoneyComponent } from './add-money/add-money.component';


@NgModule({
  declarations: [WalletComponent, WalletLandingComponent, RedeemPopupComponent, RedeemConfirmPopupComponent, ViewNoticeComponent, RedeemPopUpConfirmationComponent],
  imports: [
    CommonModule,
    WalletRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    MaterialModule,
    CoreModule,
    SharedModule
  ]
})
export class WalletModule { }
