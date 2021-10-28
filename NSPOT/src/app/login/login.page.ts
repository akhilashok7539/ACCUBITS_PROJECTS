import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { endPoints } from '../_config/endpoints';
import { InstituteService } from '../_services/institute.service';
import { LoaderService } from '../_services/loader.service';
import { ToasterService } from '../_services/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  username;
  password;
  constructor(private apiservice:InstituteService,private toaster: ToasterService,private loader:LoaderService,
    private router:Router,public menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeGesture(false);

  }
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  submit(){
    let req = {
      "password": this.password,
      "username": this.username

    }
    this.loader.present();
    this.apiservice.login(req).subscribe(
      data=> {
        this.loader.dismiss();
      
      if (data['status'] === true) {
          
        console.error(data);
        localStorage.setItem("userLogin",JSON.stringify(data['data']));
        localStorage.setItem("isLoggedIn",JSON.stringify(true));
        this.router.navigate(['/tabs'])
        this.toaster.userLogin();
      }
      else {
        console.error(data);
        this.toaster.erroruserLogin();
      }
    },
      error => {
        this.loader.dismiss();
        console.error(error);
    
      });
  }

  ngAfterContentInit()  {
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeGesture(false);
  }
  ngAfterViewInit() {
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeGesture(false);

  }
  ngOnDestroy() {
    this.menuCtrl.enable(true);
    this.menuCtrl.swipeGesture(false);

  }
}
