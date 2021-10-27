import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { AuthService } from '../../service/auth.service';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/service/language.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [
    trigger('slide_in_out', [
      state('slide_in', style({
        width: '350px',
        // css styles when the element is in slide_in
      })),
      state('slide_out', style({
        width: '0px'
        // css styles when the element is in slide_out
      })),
      // animation effect when transitioning from one state to another
      transition('slide_in <=> slide_out', animate(300))
    ]),
  ]
})
export class SideBarComponent implements OnInit {
  oncheck = false;
  slider_state:string = "slide_in";
  is_login = localStorage.getItem('userName');
  @Input() loggedIn;
  @Input() profile;
  userProfile;
  @Input() avatar;
  @Input() userName;
  subscribeProfile:Subscription;
  showLanguage = false;
  currentLang = '';

  @Output() close_notfct = new EventEmitter<boolean>();
  constructor(
    private router:Router,
    public auth:AuthService, 
    private dataService:DataServiceService,
    private translateService: TranslateService,
    public languageService: LanguageService,
  ) { }

  ngOnInit(): void {
    this.subscribeProfile = this.dataService.currentUser.subscribe(data => {
      if(data !== null){
        this.userProfile = data;
        console.log('user dadqwdqwd',this.userProfile)
      }
    });
    this.currentLang =   localStorage.getItem("lang");;
  }
  closesidebar(event): void {
    if (event) {
      if (this.oncheck === true) {
        this.slider_state = this.slider_state === 'slide_out' ? 'slide_in' : 'slide_out';
        this.close_notfct.emit();
      }
    }
  }
  onHome(){
    localStorage.setItem('competition_active_index','1'),
    localStorage.setItem('competition_bet_active_index','1')
    localStorage.setItem('competition_view_active_index','1')
    localStorage.setItem('navigate_to_competetion',null)
    this.router.navigateByUrl('/')
    this.slider_state = this.slider_state === 'slide_out' ? 'slide_in' : 'slide_out';
    this.close_notfct.emit();
  }
  onCompetetion(){
    localStorage.setItem('competition_active_index','1'),
    localStorage.setItem('competition_bet_active_index','1')
    localStorage.setItem('competition_view_active_index','1')
    this.router.navigateByUrl('/competition/landing')
    this.slider_state = this.slider_state === 'slide_out' ? 'slide_in' : 'slide_out';
    this.close_notfct.emit();
  }
  onteam(){
    localStorage.setItem('competition_active_index','1'),
    localStorage.setItem('competition_bet_active_index','1')
    localStorage.setItem('competition_view_active_index','1')
    this.router.navigateByUrl('/teams')
    this.slider_state = this.slider_state === 'slide_out' ? 'slide_in' : 'slide_out';
    this.close_notfct.emit();
  }
  onClose(){
    this.close_notfct.emit();
    this.slider_state = this.slider_state === 'slide_out' ? 'slide_in' : 'slide_out';
  }
  onLogin(){
    this.router.navigateByUrl('/user')
    this.close_notfct.emit();
    this.slider_state = this.slider_state === 'slide_out' ? 'slide_in' : 'slide_out';
  }
  logout() {
    this.dataService.profile(null);
    this.auth.doLogoutUser();
   }
   onFeed(){
    localStorage.setItem('competition_active_index','1'),
    localStorage.setItem('competition_bet_active_index','1')
    localStorage.setItem('competition_view_active_index','1')
    this.router.navigateByUrl('/feed/profile')
    this.close_notfct.emit();
    this.slider_state = this.slider_state === 'slide_out' ? 'slide_in' : 'slide_out'; 
   }
   onWallet(){
    localStorage.setItem('competition_active_index','1'),
    localStorage.setItem('competition_bet_active_index','1')
    localStorage.setItem('competition_view_active_index','1')
    this.router.navigateByUrl('/wallet')
    this.close_notfct.emit();
    this.slider_state = this.slider_state === 'slide_out' ? 'slide_in' : 'slide_out'; 
   }
   onMessage() {
    this.close_notfct.emit();
    this.dataService.allfriendMessage(true);
   }
   feed(){
     this.router.navigateByUrl('/feed/profile')
   }
   onViewDetails()
   {
     this.router.navigateByUrl('/rules/viewMore')
   }
   showLanguageList() {
     console.log("clicked");
     
    this.showLanguage = !this.showLanguage;
  }
  showLanguageListFalse() {
    this.showLanguage = false;
  }
  selectLanguage(item) {
    console.log(item);
    
    this.translateService.use(item);
    this.showLanguage = false;
    this.currentLang = item;
    localStorage.setItem("lang", item);
  }
}
