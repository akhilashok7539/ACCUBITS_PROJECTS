import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginParams, LoginResponse } from '@app/core/interfaces';
import { AuthenticationService } from '@app/core/services';
import { ApiService } from '@app/core/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-forget-password',
  templateUrl: './login-forget-password.component.html',
  styleUrls: ['./login-forget-password.component.scss']
})
export class LoginForgetPasswordComponent implements OnInit {
  @Output() onBackClick = new EventEmitter<any>();
  @Output() onNextClick = new EventEmitter<any>();
  @Input() loginDetails;
  @Input() headingForEmailPage;

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private service:ApiService,
    private toastr:ToastrService,
    private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

 /**
   * To create login form modal.
   */
  createLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  
  SubmitMail(){
      this.service.httpPost(`/user/login/otp`, this.loginForm.value).subscribe((response) => {
        if(response.message === "Email has been sent successfully"){
          this.toastr.success(response.message);
          this.onNextClick.emit(this.loginForm.value);
        } else {
          this.toastr.error('Please check Email');
        }
      });
  }

  onBack(){
    this.onBackClick.emit();
  }

}
