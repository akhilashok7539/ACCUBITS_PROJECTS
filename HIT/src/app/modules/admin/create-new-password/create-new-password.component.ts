import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../../../shared/service/data-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
import { Password, PasswordResponse } from '../../../core/interfaces/password.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss']
})
export class CreateNewPasswordComponent implements OnInit {
  signupForm: FormGroup;
  passwordIsValid = false;
  verifyEmail: string = '';
  currentAction: string = '';
  referenceDetails;
  userDetails;

  constructor(private fb: FormBuilder, private dataServiceService: DataServiceService, public router: Router, private auth: AuthService, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      password: ['', Validators.required],
      reEnterPassword: ['', Validators.required],
    },
      { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls.password.value === frm.controls.reEnterPassword.value ? null : { mismatch: true };
  }
  passwordValid(event) {
    this.passwordIsValid = event;
  }

  updatePassword() {
    const password = { ...this.signupForm.value };
    const resetPasswordParams = {
      password: password.reEnterPassword
    };
    this.auth.adminsetNewPassword(resetPasswordParams).subscribe((response: PasswordResponse) => {
      this.toastr.success(response['message']);
      this.router.navigate(['/admin']);
      sessionStorage.clear();
      localStorage.clear();
    }, err => {
      this.toastr.error(err.error.errors[0].msg);
    });
  }

}
