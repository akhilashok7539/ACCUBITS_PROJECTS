import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../../../shared/service/data-service.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
import { Password, PasswordResponse } from '../../../core/interfaces/password.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.scss']
})
export class AdminChangePasswordComponent implements OnInit {
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
      const resetPasswordParams = {
        referenceId : this.referenceDetails.referenceId,
        password : password.reEnterPassword
      };
      this.auth.adminresetPassword(resetPasswordParams).subscribe((response: PasswordResponse) => {
        this.toastr.success(response['message']);
        this.router.navigate(['/admin']);
        sessionStorage.clear();
      }, err => { 
        this.toastr.error(err.error.errors[0].msg);
      });
    }
}

