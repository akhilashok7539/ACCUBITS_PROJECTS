import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute  } from '@angular/router';
import { LoginParams, LoginResponse} from 'src/app/core/interfaces/login.interface';
import { AuthService } from '../../../core/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { from, Observable } from 'rxjs';
import { MessagingService } from 'src/app/shared/service/messaging.service';
import { ApiService } from 'src/app/core/service/api.service';
import { TwilloService } from 'src/app/core/service/twillo.service';
declare global {
  interface Window { dataLayer: any; }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordShow = false;
  type = 'password';
  gu_id = null;
  constructor(private fb: FormBuilder, 
    private toastr: ToastrService, 
    public router: Router,
    private twilloService: TwilloService, 
    private service:ApiService ,
    private messagingService: MessagingService,
    public route: ActivatedRoute,
    private auth: AuthService) { }

  ngOnInit(): void {
      sessionStorage.clear();
      this.messagingService.receiveMessage();
      this.createLoginForm();
      this.route.queryParams.subscribe(params => {
        if(params?.errorReason){
          this.toastr.error(params.errorReason)
        }
        if(params.guid){
          this.gu_id = params.guid;
          localStorage.setItem('navigate_to_competetion',this.gu_id)
        }
      });
  }
  createLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  showPassword() {
    this.passwordShow = !this.passwordShow;
    if (this.passwordShow === true) {
      this.type = 'text';
    } else if (this.passwordShow === false) {
      this.type = 'password';
    }
  }

  login(){
    const loginParams: LoginParams = { ...this.loginForm.value };
     this.auth.login(loginParams).subscribe((response) => {
      const userId = response['data'].userProfile.guid;
      localStorage.setItem('user_id',response['data'].userProfile.guid)
      localStorage.setItem('twilio_token',response['data'].token.twilio)
      this.messagingService.requestPermission(userId)
      this.messagingService.passPushToken(); 
      this.twilloService.ngOnInit();
    
      if(this.gu_id === null){
        this.router.navigate(["/"]);
      } else {
        this.router.navigate(["/"]);
            // localStorage.setItem('navigate_to_competetion', null)
            // this.service.httpGet('/v1/competition/' + this.gu_id ).subscribe((response) => {
            //   if(response.data.isPlayer === 0){
            //     this.router.navigateByUrl('/competition/details/' + this.gu_id)
            //   } else {
            //     this.router.navigateByUrl('/competition/betting/' + this.gu_id)
            //   }
            // });
      }

    });
  }
  googleAuthentication(){
    this.auth.loginWithGoogle();
  }
  facebookAuthentication(){
    this.auth.loginWithFacebook();
  }

}
