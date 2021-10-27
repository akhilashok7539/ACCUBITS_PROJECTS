import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'competition',
    loadChildren: () => import('./modules/competition/competition.module').then((m) => m.CompetitionModule)
  },
  {
    path:'feed',
    loadChildren: () => import('./modules/feed/feed.module').then((m) => m.FeedModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./modules/wallet/wallet.module').then((m) => m.WalletModule)
  },
  {
    path: 'team/:id',
    loadChildren: () => import('./modules/team/team.module').then((m) => m.TeamModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./modules/teams-clubs/teams-clubs.module').then((m) => m.TeamsClubsModule)
  },
  {
    path: 'rules',
    loadChildren: () => import('./modules/terms-and-conditions/terms-and-conditions.module').then((m) => m.TermsAndConditionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
