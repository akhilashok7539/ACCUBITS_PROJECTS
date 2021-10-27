import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import { CommonService } from '../../../core/service/common.service';
import { AuthService } from '../../service/auth.service';
import { ApiService } from '../../../core/service/api.service';
import { Title } from '@angular/platform-browser';
import { from, Subscription } from 'rxjs';
import { ChatService } from '../../service/chat.service';
import { MessagingService } from 'src/app/shared/service/messaging.service';
import { LanguageService } from 'src/app/shared/service/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = '';
  userName;
  profile;
  close = false;
  search = false;
  notification = false;
  loggedIn = false;
  expand = false;
  readStatus = true;
  showLanguage = false;
  notificationData = [];
  @Input() fixed = false;
  today = new Date();
  total = 0;
  limit = 10;
  page = 1;
  show = localStorage.getItem('userName');
  totalPage = 0;
  currentLang = '';
  menu = [
    { name: 'Home', value: '/' },
    { name: 'Competiion', value: '/competition/details' },
    { name: 'Games', value: '' },
    { name: 'Feed', value: '' },
    { name: 'Wallet', value: '' },
  ];
  avatar = '';
  subscribeProfile: Subscription;
  languageUpdated :Subscription;
  constructor(public router: Router,
    public auth: AuthService,
    private titleService: Title,
    private chatService: ChatService,
    public commonService: CommonService,
    private messagingService: MessagingService,
    private activatedroute: ActivatedRoute,
    public languageService: LanguageService,
    private dataService: DataServiceService,
    private translateService: TranslateService,
    private service: ApiService) {
    // this.menu = this.Routes.filter(menuItem => menuItem);
    console.log(languageService.supportLanguages);
    

  }
  is_login;
  message;
  check() {
    return localStorage.getItem('userName');;
  }
  ngOnInit(): void {
    console.log('ocalStorage.setItem(')
    if(this.loggedIn === false)
    {

      this.currentLang = this.translateService.store.currentLang;
      this.currentLang = 'por';
      if(!localStorage.getItem('user_id')){ 
        if(!localStorage.getItem('lang')){
          localStorage.setItem("lang", 'por');
          this.currentLang = 'por'
        }
      }
      this.translateService.use(localStorage.getItem("lang")); 
   
    }
    else{
      // this.currentLang = this.translateService.store.currentLang;
      this.translateService.use(localStorage.getItem("lang")); 
    }
   
    this.checkIfData();
    const found = localStorage.getItem('fcm_token');
    this.message = this.messagingService.currentMessage

    if (found !== undefined && found !== null) {
      this.chatService.connectPushNotification(found);
    }
    this.subscribeProfile = this.dataService.currentUser.subscribe(data => {
      if (data) {
        this.loggedIn = true;
        this.profile = data;
      }
    });
    this.languageUpdated = this.dataService.language.subscribe(data =>{
      console.log(data);
      if (data === true) {
    this.checkIfData();
       
      }
    })
  }
  ngOnDestroy(): void {
    if (this.subscribeProfile) {
      this.subscribeProfile.unsubscribe();
    };
  }
  logout() {
    localStorage.setItem("lang","por")
    this.dataService.profile(null);
    this.auth.doLogoutUser();
    this.translateService.use('por');
  }
  redirectToSignIn() {
      this.dataService.profile(null);
      this.auth.redirectTosignIn();
  }
  signUp() {
    localStorage.clear();
    this.router.navigate(['/user/sign-up']);
  }
  addCompetition() {
    this.expand = false;
    this.router.navigate(['/choose-competition']);
    // localStorage.setItem('type','1')
    // this.router.navigate(['/create-competition']);
  }
  setDocTitle(title: string) {
    localStorage.setItem('competition_active_index', '1'),
      localStorage.setItem('competition_bet_active_index', '1')
    localStorage.setItem('competition_view_active_index', '1')
    this.titleService.setTitle('Hit-' + title);
  }
  showHome() {
    this.router.navigate(['/']);
  }
  selectLanguage(item) {
    console.log(item);
    
    this.translateService.use(item);
    this.showLanguage = false;
    this.currentLang = item;
    localStorage.setItem("lang", item);
  }
  showLanguageList() {
    this.showLanguage = !this.showLanguage;
  }
  showLanguageListFalse() {
    this.showLanguage = false;
  }
  checkIfData() {
    if (localStorage.getItem("JWT_TOKEN") !== null) {
      this.loggedIn = true;
      this.commonService._getProfile().subscribe((response) => {
        localStorage.setItem('userName', response.data.username);
        localStorage.setItem('userName_id', response.data.guid);
        this.dataService.profile(response.data);
        this.userName = localStorage.userName;
        this.avatar = this.userName.substring(0, 2);
        console.log("PROFILE DETAILS in header",response.data.language);
       
        if(response.data.language === 1)
        {
          this.currentLang = 'en';
          localStorage.setItem("lang",this.currentLang)
          this.translateService.use(this.currentLang); 
        }else  if(response.data.language === 2)
        {
          this.currentLang = 'por';
          localStorage.setItem("lang",this.currentLang)
          this.translateService.use(this.currentLang); 

          
        }else if(response.data.language === 3)
        {
          this.currentLang = 'es';
          localStorage.setItem("lang",this.currentLang)

          this.translateService.use(this.currentLang); 
          
        }
      
      });
    }
  }
  close_notfct(e) {
    this.notification = false;
  }
  getNotification() {
    let apiParams = {
      size: this.limit,
      page: this.page,
      unread: this.readStatus,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet(`/v1/notification/list?` + params).subscribe((response) => {
      response.data.rows.map(item => {
        this.notificationData.push(item);
      })
      console.log(this.notificationData);
      
      this.total = response.data.totalCount;
      this.totalPage = response.data.totalPages;
    });
  }
  moreNotification() {
    if (this.page < this.totalPage) {
      this.page = this.page + 1;
      this.getNotification();
    }
  }
  onSearch() {
    this.search = true;
  }
  close_search() {
    this.search = false;
  }
  openNotification() {
    this.getNotification();
    this.notification = true;
  }
  filterNotification(e) {
    console.log(e);
    
    this.notificationData = [];
    if (e == 2) {
      this.readStatus = true;
    } else {
      this.readStatus = false;
    }
    this.page = 1;
    this.getNotification();
  }
  onclose() {
    this.close = false
  }
}
