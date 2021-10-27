import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selfexclusion',
  templateUrl: './selfexclusion.component.html',
  styleUrls: ['./selfexclusion.component.scss']
})
export class SelfexclusionComponent implements OnInit {
  fixed = false;
  isWeb = true;
  footerArraySpa: any = [
    {
      url: "https://blog.hit-game.com/about-us/spanish/",
      Name: "Sobre Nós"
    },
    {
      url: "https://blog.hit-game.com/account/spanish/",
      Name: "Sua Conta"
    },
    {
      url: "https://blog.hit-game.com/creative-competitions/spanish/",
      Name: "Criando Ligas"
    },
    {
      url: "https://blog.hit-game.com/joining-competitions/spanish/",
      Name: "Participando de Ligas"
    },
    {
      url: "https://blog.hit-game.com/game-rules/spanish/",
      Name: "Regras dos Jogos"
    },
    {
      url: "https://blog.hit-game.com/game-rules/spanish/",
      Name: "Depositos"
    },
    {
      url: "https://blog.hit-game.com/withdrawals/spanish/",
      Name: "Retiradas"
    },
    {
      url: "https://blog.hit-game.com/identity-verification/spanish/",
      Name: "Identity Verification (KYC)"
    },
    {
      url: "https://blog.hit-game.com/faqs/spanish/",
      Name: "FAQ(Duvidas Fredquentes"
    },
    {
      url: "/rules/contact-us",
      Name: "Contato"
    },
    {
      url: "https://blog.hit-game.com/privacy-policy/spanish/",
      Name: "Politica de Privacidade"
    },
    {
      url: "https://blog.hit-game.com/terms-of-use/spanish/",
      Name: "Termos e Politicas"
    },
    {
      url: "https://blog.hit-game.com/dispute-resolution/spanish/",
      Name: "Dispute Resolution"
    },
    {
      url: "https://blog.hit-game.com/anti-money-laundering/spanish/",
      Name: "Anti Money Laundering"
    },
    {
      url: "https://blog.hit-game.com/fairness-rng/spanish/",
      Name: "Fairness & RNG"
    },
    {
      url: "https://blog.hit-game.com/personal-data/spanish/",
      Name: "Personal Data"
    },
    {
      url: "https://blog.hit-game.com/accounts-payouts-bonuses/spanish/",
      Name: "Accounts Payouts & Bonuses"
    },
    {
      url: "https://blog.hit-game.com/responsible-gaming/spanish/",
      Name: "Responsible Gaming"
    },
    {
      url: "https://blog.hit-game.com/self-exclusion/spanish/",
      Name: "Self-Exclusion"
    },

  ]
  footerArrayPor: any = [
    {
      url: "https://blog.hit-game.com/about-us/portuguese/",
      Name: "Conheça a Hit"
    },
    {
      url: "https://blog.hit-game.com/account/portuguese/",
      Name: "Sua Conta"
    },
    {
      url: "https://blog.hit-game.com/creative-competitions/portuguese/",
      Name: "Criando Ligas"
    },
    {
      url: "https://blog.hit-game.com/joining-competitions/portuguese/",
      Name: "Participando de Ligas"
    },
    {
      url: "https://blog.hit-game.com/game-rules/portuguese/",
      Name: "Regras dos Jogos"
    },
    {
      url: "https://blog.hit-game.com/game-rules/portuguese/",
      Name: "Depósitos"
    },
    {
      url: "https://blog.hit-game.com/withdrawals/portuguese/",
      Name: "Retiradas"
    },
    {
      url: "https://blog.hit-game.com/identity-verification/portuguese/",
      Name: "Verificação de Idetidade (KYC)"
    },
    {
      url: "https://blog.hit-game.com/faqs/portuguese/",
      Name: "FAQ (Dúvidas Frequentes)"
    },
    {
      url: "/rules/contact-us",
      Name: "Contato"
    },
    {
      url: "https://blog.hit-game.com/privacy-policy/portuguese/",
      Name: "Politica de Privacidade"
    },
    {
      url: "https://blog.hit-game.com/terms-of-use/portuguese/",
      Name: "Termos e Politicas"
    },
    {
      url: "https://blog.hit-game.com/dispute-resolution/portuguese/",
      Name: "Resolução de Disputas"
    },
    {
      url: "https://blog.hit-game.com/anti-money-laundering/portuguese/",
      Name: "Anti-Lavagem de Dinheiro"
    },
    {
      url: "https://blog.hit-game.com/fairness-rng/portuguese/",
      Name: "Justiça & RNG"
    },
    {
      url: "https://blog.hit-game.com/personal-data/portuguese/",
      Name: "Dados Pessoais"
    },
    {
      url: "https://blog.hit-game.com/accounts-payouts-bonuses/portuguese/",
      Name: "Conta, Pagamentos & Bonus"
    },
    {
      url: "https://blog.hit-game.com/responsible-gaming/portuguese/",
      Name: "Jogo Responsável"
    },
    {
      url: "https://blog.hit-game.com/self-exclusion/portuguese/",
      Name: "Auto-Exclusão"
    },

  ]
  footerArray: any = [
    {
      url: "https://blog.hit-game.com/about-us/",
      Name: "About Us"
    },
    {
      url: "https://blog.hit-game.com/account/",
      Name: "Your Account"
    },
    {
      url: "https://blog.hit-game.com/creative-competitions/",
      Name: "Creating Competitions"
    },
    {
      url: "https://blog.hit-game.com/joining-competitions/",
      Name: "Joining Competitions"
    },
    {
      url: "https://blog.hit-game.com/game-rules/",
      Name: "Game Rules"
    },
    {
      url: "https://blog.hit-game.com/game-rules/",
      Name: "Deposits"
    },
    {
      url: "https://blog.hit-game.com/withdrawals/",
      Name: "Withdrawals"
    },
    {
      url: "https://blog.hit-game.com/identity-verification/",
      Name: "Identity Verification"
    },
    {
      url: "https://blog.hit-game.com/faqs/",
      Name: "FAQ"
    },
    {
      url: "/rules/contact-us",
      Name: "Contact Us"
    },
    {
      url: "https://blog.hit-game.com/privacy-policy/",
      Name: "Privacy Policy"
    },
    {
      url: "https://blog.hit-game.com/terms-of-use/",
      Name: "Terms of Use"
    },
    {
      url: "https://blog.hit-game.com/dispute-resolution/",
      Name: "Dispute Resolution"
    },
    {
      url: "https://blog.hit-game.com/anti-money-laundering/",
      Name: "Anti Money Laundering"
    },
    {
      url: "https://blog.hit-game.com/fairness-rng/",
      Name: "Fairness & RNG"
    },
    {
      url: "https://blog.hit-game.com/personal-data/",
      Name: "Personal Data"
    },
    {
      url: "https://blog.hit-game.com/accounts-payouts-bonuses/",
      Name: "Accounts Payouts & Bonuses"
    },
    {
      url: "https://blog.hit-game.com/responsible-gaming/",
      Name: "Responsible Gaming"
    },
    {
      url: "https://blog.hit-game.com/self-exclusion/",
      Name: "Self-Exclusion"
    },

  ]
  constructor(
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.app == 1) {
        this.isWeb = false;
      }
    })
  }
  getlang() {
    return localStorage.getItem('lang')
  }
}
