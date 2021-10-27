import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../shared/service/data-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Otp, OtpResponse } from '../../../core/interfaces/otp.interface';
import { AuthService } from '../../../core/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  otpEmail: string = '';
  currentAction: string = '';
  otp: number = 0;
  resendTime: number = 0;
  otpEnable: boolean = false;
  resendEnable: boolean = false;
  referenceDetails;
  constructor(private dataServiceService: DataServiceService, public router: Router, private auth: AuthService, private toastr: ToastrService, private route: ActivatedRoute,) { }
  ngOnInit(): void {
    this.checkIfData();
    this.resendTime = this.referenceDetails.otpExpirySeconds;
    this._getCurrentAction();
  }
  backTo(){
    if(this.currentAction==='create'){
      this.router.navigate(['/user/sign-up']);
    }else{
      this.router.navigate(['/user/forgot-password']);
    }
  }

  checkIfData() {
    if (sessionStorage.getItem("otpReference") !== null) {
      this.referenceDetails = JSON.parse(sessionStorage.otpReference);
    }
    if (sessionStorage.getItem("registrationMail") !== null) {
      this.otpEmail = sessionStorage.registrationMail;
    }
  }

  _getCurrentAction(): void {
    this.route.paramMap.subscribe(params => {
      this.currentAction = params['params'].id;
    });
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
    if (this.currentAction === 'create') {
      this.referenceDetails = JSON.parse(sessionStorage.otpReference);
      const otpParams: Otp = {
        referenceId: this.referenceDetails.referenceId,
        otp: this.otp,
      };
      this.auth.verifyRegistrationEmail(otpParams).subscribe((response: OtpResponse) => {
        this.toastr.success(response['message']);
        if(response['data'].url){
          window.location.href = response['data'].url;
        }else{
          this.router.navigate(['/user/user-details']);
          sessionStorage.setItem('otpReference', JSON.stringify(response['data']));
        }
      }, err => {
        this.toastr.error(err.error.message);
      });
    } else {
      const otpParams = {
        email: this.otpEmail,
        otp: this.otp,
      };
      this.auth.verifyChangePasswordEmail(otpParams).subscribe((response: OtpResponse) => {
        this.toastr.success(response['message']);
        sessionStorage.setItem('otpReference', JSON.stringify(response['data']));
        this.router.navigate(['/user/create-password/' + 'update']);
      }, err => {
        this.toastr.error(err.error.message);
      });
    }
  }

  handleEvent(event) {
    if (event.action === 'notify') {
      this.resendEnable = true
    }
  }
  resendOtp() {
    if (this.currentAction === 'create') {
      const resendOtpParams = {
        email: sessionStorage.registrationMail,
        referenceId: this.referenceDetails.referenceId,
      };
      this.auth.resendOtp(resendOtpParams).subscribe(response => {
        this.toastr.success(response['message']);
        sessionStorage.setItem('otpReference', JSON.stringify(response['data']));
        this.resendEnable = false;
        this.resendTime = this.referenceDetails.otpExpirySeconds;
      }, err => {
        this.toastr.error(err.error.errors[0].msg);
      })
    } else {
      const resendOtpParams = {
        email: sessionStorage.registrationMail,
      };
      this.auth.resendForgotPasswordOtp(resendOtpParams).subscribe(response => {
        this.toastr.success(response['message']);
        sessionStorage.setItem('otpReference', JSON.stringify(response['data']));
        this.resendEnable = false;
        this.resendTime = this.referenceDetails.otpExpirySeconds;
      }, err => {
        this.toastr.error(err.error.errors[0].msg);
      })
    }

  }

}
