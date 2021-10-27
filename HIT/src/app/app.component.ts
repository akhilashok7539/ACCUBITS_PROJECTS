import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { from } from 'rxjs';
import { TwilloService } from 'src/app/core/service/twillo.service'
import { MessagingService } from './shared/service/messaging.service';
import { LanguageService } from './shared/service/language.service';
import { UserIdleService } from 'angular-user-idle';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './core/service/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hit-frontend';
  message;
  currentUrl='';
  supportLanguages=['en','por','es']
  constructor(
    private twilloService: TwilloService,
    private messagingService: MessagingService,
    private translateService:TranslateService,
    private languageService:LanguageService,
    private userIdle: UserIdleService,
    private router: Router,
    public auth:AuthService
  ) {
    this.translateService.addLangs(this.languageService.supportLanguages);
    this.translateService.use('por');
  }
  ngOnInit() {
    if (localStorage.getItem('twilio_token') !== null) {
      this.twilloService.ngOnInit();
      this.messagingService.requestPermission(localStorage.getItem('user_id'))
      this.messagingService.receiveMessage()
      this.message = this.messagingService.currentMessage;
    }
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentUrl = e.url;
      }
    });
    //Start watching for user inactivity.
    this.userIdle.startWatching();
    
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    
    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => this.idleLogout());
  }

  idleLogout(){
    if(this.currentUrl.includes('/admin')){
      this.auth.doLogoutAdmin()
    }else{
      this.auth.doLogoutUser()
    }
  }

} 
