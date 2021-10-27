import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCompetitionLayoutComponent } from './admin-competition-layout/admin-competition-layout.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { CompetitionManagementComponent } from './competition-management/competition-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { SuspiciousManagementComponent } from './suspicious-management/suspicious-management.component';
import { TransactionManagementComponent } from './transaction-management/transaction-management.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UserManagementLayoutComponent } from './user-management-layout/user-management-layout.component';
import { UserManagementComponent } from './user-management/user-management.component';


const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'competition-management/match/:id',
        component: AdminCompetitionLayoutComponent
      },
      {
        path: 'user-management',
        component: UserManagementComponent
      },
      {
        path:'suspicious-management',
        component:SuspiciousManagementComponent
      },
      {
        path: 'transactions',
        component:TransactionsComponent
      },
      {
        path: 'user-management/detail',
        component: UserManagementLayoutComponent
      },
      {
        path: 'competition-management',
        component: CompetitionManagementComponent
      },
      {
        path: 'sub-admin',
        component: SubAdminComponent
      },
      {
        path: 'transaction-management',
        component: TransactionManagementComponent
      },
      { path: '',   redirectTo: '/admin/layout/dashboard', pathMatch: 'full' }, // redirect to `first-component`
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
