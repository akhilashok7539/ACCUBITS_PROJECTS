import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/shared/service/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  close = false;
  loggedIn=false;
  showLanguage=false;
  currentLang='';
  parallax_item = [ 
    {
      top: '30%',
      left: '22%',
      size: 'tiny',
      rotate: '0',
      opacity: '1',
    },
    {
      top: '15%',
      left: '20%',
      size: 'small',
      rotate: '0',
      opacity: '1',
      inversion: 'true',
    },
  ];

  constructor(
    private router:Router,
    public languageService:LanguageService,
    private translateService:TranslateService
  ) { }

  ngOnInit(): void {
    this.currentLang = this.translateService.store.currentLang;
    localStorage.clear();
  }
  ngAfterViewInit(): void {
    localStorage.setItem("lang",this.currentLang);
  }
  onHome(){
    localStorage.setItem('navigate_to_competetion',null)
    this.router.navigateByUrl('/')
  }
  selectLanguage(item){
    this.translateService.use(item);
    this.currentLang = item;
    localStorage.setItem("lang",item);
  }
  showLanguageList(){
    this.showLanguage = !this.showLanguage;
  }
  onClose(){
    this.close=false;
  }
}
