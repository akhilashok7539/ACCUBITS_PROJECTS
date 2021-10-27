import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { CompetitionManagementComponent } from './competition-management/competition-management.component';
import { TransactionManagementComponent } from './transaction-management/transaction-management.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserManagementLayoutComponent } from './user-management-layout/user-management-layout.component';
import { AdminUserActivityComponent } from './admin-user-activity/admin-user-activity.component';
import { AdminJoinCompetitionComponent } from './admin-join-competition/admin-join-competition.component';
import { AdminTransactionHistoryComponent } from './admin-transaction-history/admin-transaction-history.component';
import { AdminFundReportComponent } from './admin-fund-report/admin-fund-report.component';
import { AdminWalletBalceComponent } from './admin-wallet-balce/admin-wallet-balce.component';
import { AdminFinancialInfoComponent } from './admin-financial-info/admin-financial-info.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { AdminAddEditPopComponent } from './admin-add-edit-pop/admin-add-edit-pop.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FromToFilterComponent } from './from-to-filter/from-to-filter.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TransactionsComponent } from './transactions/transactions.component';
import { AdminCompetitionLayoutComponent } from './admin-competition-layout/admin-competition-layout.component';
import { AdminMatchOverviewsComponent } from './admin-competition-layout/admin-match-overviews/admin-match-overviews.component';
import { AdminMatchResultComponent } from './admin-competition-layout/admin-match-result/admin-match-result.component';
import { AdminMatchLeaderboardComponent } from './admin-competition-layout/admin-match-leaderboard/admin-match-leaderboard.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SuspiciousManagementComponent } from './suspicious-management/suspicious-management.component';
import { SuspiciousTransactionsComponent } from './suspicious-transactions/suspicious-transactions.component';
import { SuspeciousUsersComponent } from './suspecious-users/suspecious-users.component';
import { SuspeciousCompetitionComponent } from './suspecious-competition/suspecious-competition.component';

@NgModule({
  declarations: [AdminMatchOverviewsComponent, AdminMatchResultComponent, AdminMatchLeaderboardComponent,UserManagementComponent,CompetitionManagementComponent, TransactionManagementComponent, UserManagementLayoutComponent, AdminUserActivityComponent, AdminJoinCompetitionComponent, AdminTransactionHistoryComponent, AdminFundReportComponent, AdminWalletBalceComponent, AdminFinancialInfoComponent, SubAdminComponent, AdminAddEditPopComponent, DashboardComponent, FromToFilterComponent, TransactionsComponent, AdminCompetitionLayoutComponent, SuspiciousManagementComponent, SuspiciousTransactionsComponent, SuspeciousUsersComponent, SuspeciousCompetitionComponent],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    ReactiveFormsModule,
    NgxChartsModule,
    CoreModule,
    NgxPaginationModule,
    SharedModule,
    FormsModule,
    CoreModule,
    SlickCarouselModule,
    MaterialModule,
    Ng2TelInputModule
  ]
})
export class AdminLayoutModule { }
