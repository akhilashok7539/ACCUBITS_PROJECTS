import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoardOfCouncilPageRoutingModule } from './board-of-council-routing.module';

import { BoardOfCouncilPage } from './board-of-council.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardOfCouncilPageRoutingModule
  ],
  declarations: [BoardOfCouncilPage]
})
export class BoardOfCouncilPageModule {}
