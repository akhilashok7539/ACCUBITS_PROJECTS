import { Component, OnInit, AfterViewInit, ViewChild,ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/service/auth.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  emailForm: FormGroup;
  @ViewChildren('input') vc;
  
   ngAfterViewInit() {            
        this.vc.first.nativeElement.focus();
    }



  constructor(private fb: FormBuilder, private auth: AuthService, private toastr: ToastrService, public router: Router) { }

  ngOnInit(): void {
    this.createEmailForm();
  }

  createEmailForm(): void {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  submitEmail(){ 
    const emailParams = { ...this.emailForm.value};
    this.auth.forgotPassword(emailParams).subscribe(response => {
      this.toastr.success(response['message']);
      sessionStorage.setItem('registrationMail', emailParams.email);
      sessionStorage.setItem('otpReference', JSON.stringify(response['data']));
      this.router.navigate(['/user/verify-email/' + 'update']);
    }, err => { 
      this.toastr.error(err.error.message);
    })
  }

}
