import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ResponsiblePlayerComponent } from './responsible-player/responsible-player.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { HowToJoinComponent } from './how-to-join/how-to-join.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RulesComponent } from './rules/rules.component';
import { YourAccountComponent } from './your-account/your-account.component';
import { WithdrawalsComponent } from './withdrawals/withdrawals.component';
import { DepositsComponent } from './deposits/deposits.component';
import { GameRulesComponent } from './game-rules/game-rules.component';
import { JoiningCompetitionsComponent } from './joining-competitions/joining-competitions.component';
import { CreatingCompetitionsComponent } from './creating-competitions/creating-competitions.component';
import { FaqComponent } from './faq/faq.component';
import { IdentityVerficationComponent } from './identity-verfication/identity-verfication.component';
import { SelfexclusionComponent } from './selfexclusion/selfexclusion.component';


const routes: Routes = [
  {
    path: 'responsible-player',
    component: ResponsiblePlayerComponent
  },
  {
    path: 'terms-of-use',
    component: TermsOfUseComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'how-to-join',
    component: HowToJoinComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'game-rules',
    component:GameRulesComponent
  },
  {
    path:'account',
    component:YourAccountComponent
  },
  {
    path:'withdrawals',
    component:WithdrawalsComponent
  },
  {
    path:'deposits',
    component:DepositsComponent
  },
  {
    path:'joining-competion',
    component:JoiningCompetitionsComponent
  },
  {
    path:'creative-competion',
    component:CreatingCompetitionsComponent
  },
  {
    path:'faq',
    component:FaqComponent
  },
  {
    path:'identityVerfication',
    component:IdentityVerficationComponent
  },
  {
    path:'viewMore',
    component:SelfexclusionComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsAndConditionsRoutingModule { }
