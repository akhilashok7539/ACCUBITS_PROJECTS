import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletLandingComponent } from './wallet-landing/wallet-landing.component';
import { WalletComponent } from './wallet.component';


const routes: Routes = [
  {
    path: '',
    component: WalletComponent,
    children: [
        {
          path: '',
          component: WalletLandingComponent
        },
    ]
  }
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
