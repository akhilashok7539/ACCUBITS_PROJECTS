import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseCompetitionComponent } from './choose-competition/choose-competition.component';
import { ChooseGameComponent } from './choose-game/choose-game.component';
import { ChooseChampionshipComponent } from './choose-championship/choose-championship.component'
import { CompetitionGamesComponent } from './competition-games/competition-games.component';
import { CreateCompetitionComponent } from './create-competition/create-competition.component';
import { EntryFeeComponent } from './entry-fee/entry-fee.component';
import { HomeComponent } from './home.component';
import { ReviewCompetitionComponent } from './review-competition/review-competition.component';
import { from } from 'rxjs';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: CompetitionGamesComponent
      },
      {
        path: 'create-competition',
        component: CreateCompetitionComponent
      },
      {
        path: 'choose-competition',
        component: ChooseCompetitionComponent
      },
      {
        path: 'choose-game',
        component: ChooseGameComponent
      },
      {
        path: 'choose-championship',
        component: ChooseChampionshipComponent
      },
      {
        path: 'entry-fee',
        component: EntryFeeComponent
      },
      {
        path: 'review-competition',
        component: ReviewCompetitionComponent
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
