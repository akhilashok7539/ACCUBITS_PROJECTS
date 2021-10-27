import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/core/services';
import { LoginParams, LoginResponse } from '@app/core/interfaces';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

/**
 * @description Login Form Component
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginDetails;
  headingForEmailPage;
  EmailGotFromForgetPassword;
  otpClick = false;
  forgetPassword = false;
  passwordShow = false;
  type = 'password';
  constructor(
      private fb: FormBuilder, 
      private auth: AuthenticationService,
      private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  /**
   * To create login form modal.
   */
  createLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  /**
   * Trigger login method of authentication service with params from the form.
   */
  login() {
    const loginParams: LoginParams = {...this.loginForm.value};
    this.auth.login(loginParams).subscribe((response: LoginResponse) => {
      this.auth.token = response.access_token;
      localStorage.setItem('user_id',response.user_id)
      this.router.navigateByUrl('')
    });
  }
  onNext(event){
    this.otpClick=! this.otpClick;
    this.forgetPassword=!this.forgetPassword
    this.EmailGotFromForgetPassword = event;
  }
  loginWithOtp(){
    this.headingForEmailPage = 'Login With OTP'
    this.forgetPassword=!this.forgetPassword
    this.loginDetails = {...this.loginForm.value};
  }
  forgetPasswordClick(){
    this.headingForEmailPage = 'Forget Password';
    this.forgetPassword=!this.forgetPassword;
  }

  

  /**
   * Trigger to login page
   */
  onBack(){
    this.otpClick = false;
    this.forgetPassword = false;
  }

  onBackFromOTP(event){
    this.otpClick = false;
    this.forgetPassword = true;
  }
  showPassword() {
    this.passwordShow = !this.passwordShow;
    if (this.passwordShow === true) {
      this.type = 'text';
    } else if (this.passwordShow === false) {
      this.type = 'password';
    }
  }

}
