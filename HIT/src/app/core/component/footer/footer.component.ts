import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  loggedIn = false;
  subscribeProfile: Subscription;

  constructor(
    private router:Router,
    private dataService:DataServiceService
  ) { }

  ngOnInit(): void {
    this.subscribeProfile = this.dataService.currentUser.subscribe(data => {
      if (data) {
        this.loggedIn = true;
 
      }
    });
  }
  getlang(){
    // console.log(localStorage.getItem('lang'));
    return localStorage.getItem('lang')
  }
  goToSettings(){
    this.router.navigate(['/feed/profile']);
    this.dataService.showFriends(8);
  }
  openMga(){
    window.open("https://www.authorisation.mga.org.mt/verification.aspx?lang=en&company=671c2548-ec97-4aa3-9339-442fc68a6e44&details=1", "", "width=800,height=1000");
  }
  opengambling()
  {
    window.open("https://www.gamblingtherapy.org/", "", "width=800,height=1000");

  }
  openLogo()
  {
    window.open("https://verification.curacao-egaming.com/validateview.aspx?domain=hit-game.com", "_blank",);

  }
}

