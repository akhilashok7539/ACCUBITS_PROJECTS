import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TermsAndConditionsRoutingModule } from './terms-and-conditions-routing.module';
import { ResponsiblePlayerComponent } from './responsible-player/responsible-player.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HelpComponent } from './help/help.component';
import { HowToJoinComponent } from './how-to-join/how-to-join.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RulesComponent } from './rules/rules.component';
import { YourAccountComponent } from './your-account/your-account.component';
import { WithdrawalsComponent } from './withdrawals/withdrawals.component';
import { DepositsComponent } from './deposits/deposits.component';
import { CreatingCompetitionsComponent } from './creating-competitions/creating-competitions.component';
import { JoiningCompetitionsComponent } from './joining-competitions/joining-competitions.component';
import { GameRulesComponent } from './game-rules/game-rules.component';
import { FaqComponent } from './faq/faq.component';
import { IdentityVerficationComponent } from './identity-verfication/identity-verfication.component';
import { DisputeComponent } from './dispute/dispute.component';
import { AntiMoneyComponent } from './anti-money/anti-money.component';
import { FairnessComponent } from './fairness/fairness.component';
import { PersonaldataComponent } from './personaldata/personaldata.component';
import { AccountsPayoutsComponent } from './accounts-payouts/accounts-payouts.component';
import { SelfexclusionComponent } from './selfexclusion/selfexclusion.component';
import { ShareButtonsPopupModule } from 'ngx-sharebuttons/popup';
@NgModule({
  declarations: [ResponsiblePlayerComponent, TermsOfUseComponent, PrivacyPolicyComponent, HelpComponent, HowToJoinComponent, AboutUsComponent, ContactUsComponent, RulesComponent, YourAccountComponent, WithdrawalsComponent, DepositsComponent, CreatingCompetitionsComponent, JoiningCompetitionsComponent, GameRulesComponent, FaqComponent, IdentityVerficationComponent, DisputeComponent, AntiMoneyComponent, FairnessComponent, PersonaldataComponent, AccountsPayoutsComponent, SelfexclusionComponent],
  imports: [
    CommonModule,
    ShareButtonsPopupModule,
    TermsAndConditionsRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ]
})
export class TermsAndConditionsModule { }
