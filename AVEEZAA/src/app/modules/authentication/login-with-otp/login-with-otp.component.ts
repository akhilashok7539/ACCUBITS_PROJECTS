import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../core/services/api.service'

@Component({
  selector: 'app-login-with-otp',
  templateUrl: './login-with-otp.component.html',
  styleUrls: ['./login-with-otp.component.scss']
})
export class LoginWithOtpComponent implements OnInit {
  @Output() onBackFromOTP = new EventEmitter<any>();
  @Input() EmailGotFromForgetPassword;
  otpEnable: boolean = false;
  otp: number = 0;


  constructor(
    private service:ApiService,
    private router:Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  onBack(){
    this.onBackFromOTP.emit(this.EmailGotFromForgetPassword);
  }

  onEnter(){
    if(this.otpEnable){
      this.verifyOtp()
    }
  }

  onOtpChange(e) {
    
    this.otp = parseInt(e);
    if (this.otp.toString().length === 4) {
      this.otpEnable = true;
      return;
    }
    else {
      this.otpEnable = false;
      return;
    }
  }
  verifyOtp() {
       const otpParams = {
        email: this.EmailGotFromForgetPassword.email,
        otp: this.otp,
      };
      this.service.httpPost(`/user/login/verify`, otpParams).subscribe((response) => {
        localStorage.setItem('user_id','1')
        this.router.navigateByUrl('/')
      });
  }
  resendOTP(){
    this.service.httpPost(`/user/login/otp`, this.EmailGotFromForgetPassword).subscribe((response) => {
      if(response.message === "Email has been sent successfully"){
        this.toastr.success(response.message);
      } else {
        this.toastr.error('Please check Email');
      }    });
  }
 
  onOTPSubmit(){

  }
}
