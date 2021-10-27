import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../../../shared/service/data-service.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
import { Password, PasswordResponse } from '../../../core/interfaces/password.interface';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
declare let fbq:Function;
declare global {
  interface Window { dataLayer: any; }
}
@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {
  signupForm: FormGroup;
  passwordIsValid = false;
  verifyEmail: string = '';
  currentAction:string='';
  referenceDetails;
  userDetails;
  constructor(private fb: FormBuilder,private dataServiceService: DataServiceService, public router: Router, private auth: AuthService, private toastr: ToastrService, private route: ActivatedRoute,) { }
  ngOnInit(): void {
    this._getCurrentAction();
    this.checkIfData();
    this.signupForm = this.fb.group({
      password: ['', Validators.required],
      reEnterPassword: ['', Validators.required],
    },
    {validator: this.passwordMatchValidator});
  }
  checkIfData(){ 
    if (sessionStorage.getItem("otpReference") !== null) {
      this.referenceDetails = JSON.parse(sessionStorage.otpReference);
    }
    if (sessionStorage.getItem("userDetails") !== null) {
      this.userDetails = JSON.parse(sessionStorage.userDetails);
    }
    if (sessionStorage.getItem("verifyEmail") !== null) {
      this.verifyEmail = sessionStorage.registrationMail;
    }
  }
  _getCurrentAction(): void {
    this.route.paramMap.subscribe(params => {
      this.currentAction = params['params'].id;
    });
  }
  passwordMatchValidator(frm: FormGroup) {
    return frm.controls.password.value === frm.controls.reEnterPassword.value ? null : {mismatch: true};
  }
  passwordValid(event) {
    this.passwordIsValid = event;
  }
  updatePassword(){
    const password = { ...this.signupForm.value};
    if(this.currentAction==='create'){
      const passwordParams = {
        referenceId : this.referenceDetails.referenceId,
        password : password.reEnterPassword,
        username : this.userDetails.username,
        mobileNumber : this.userDetails.mobileNumber,
        countryCode : this.userDetails.countryCode,
        firstName: this.userDetails.firstName,
        lastName: this.userDetails.lastName,
        addressLine1: this.userDetails.addressLine1,
        addressLine2: this.userDetails.addressLine2,
        country: this.userDetails.country,
        state: this.userDetails.state,
        city: this.userDetails.city,
        zipCode: this.userDetails.zipCode,
        dob: moment(this.userDetails.dob).format('YYYY-MM-DD'),
        settings:this.userDetails.settings,
        // disabled for soft launch**********
        currency: this.userDetails.currency,
        countryCodeIso:this.userDetails.countryCodeIso,
        optInEmail:this.userDetails.optInEmail,
        // currency: 'USD',
        // countryCodeIso:'US',
        language:this.userDetails.language
      };
      console.log(passwordParams);
      
      this.auth.createPassword(passwordParams).subscribe((response: PasswordResponse) => {
        // fbq('trackCustom', 'SignUp', { username:  this.userDetails.userName });
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
       'event' : 'sign_up',
       'username' : this.userDetails.userName 
        });
        this.toastr.success(response['message']);
        this.router.navigate(['/user']);
        sessionStorage.clear();
        // this.dataServiceService.sendRegistrationEmail(this.verifyEmail);


      }, err => { 
        this.toastr.error(err.error.errors[0].msg);
      });
    }else{
      const resetPasswordParams = {
        email : sessionStorage.registrationMail,
        password : password.reEnterPassword
      };
      console.log(resetPasswordParams);

      this.auth.resetPassword(resetPasswordParams).subscribe((response: PasswordResponse) => {
        this.toastr.success(response['message']);
        this.router.navigate(['/user']);
        sessionStorage.clear();
      }, err => { 
        this.toastr.error(err.error.errors[0].msg);
      });
    }
  }
}
