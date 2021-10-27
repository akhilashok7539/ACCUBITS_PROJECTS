import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { CommonService } from '../../../core/service/common.service';
import { AuthService } from '../../service/auth.service'



@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  userName;
  loggedIn = false;
  expand = false;
  @Input() fixed = false;
  menu=[
    {name:'Home',value:'/'},
    {name:'Competiion',value:'/competition/details'},
    {name:'Games',value:''},
    {name:'Feed',value:''},
    {name:'Wallet',value:''},
  ];
  avatar='';
  constructor(public router: Router, public auth:AuthService, public commonService: CommonService, private activatedroute:ActivatedRoute) { 
    // this.menu = this.Routes.filter(menuItem => menuItem);

  }

  ngOnInit(): void {
    this.checkIfData();
  }
  logout() {
   this.auth.doLogoutAdmin();
  }
  

  checkIfData() {
    // if (localStorage.getItem("JWT_TOKEN") !== null) {
    //   this.loggedIn = true; this.commonService._getProfile().subscribe((response) => {
    //     localStorage.setItem('userName', response.data.username);
    //     this.userName = localStorage.userName;
    //     this.avatar = this.userName.substring(0,2);
    //   });
    // }
  }

}

