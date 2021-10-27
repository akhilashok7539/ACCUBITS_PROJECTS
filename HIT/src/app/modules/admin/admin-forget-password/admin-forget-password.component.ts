import { Component, OnInit, AfterViewInit, ViewChild,ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/service/auth.service';
@Component({
  selector: 'app-admin-forget-password',
  templateUrl: './admin-forget-password.component.html',
  styleUrls: ['./admin-forget-password.component.scss']
})
export class AdminForgetPasswordComponent implements OnInit {
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
    this.auth.adminForgotPassword(emailParams).subscribe(response => {
      this.toastr.success(response['message']);
      sessionStorage.setItem('registrationMail', emailParams.email);
      sessionStorage.setItem('otpReference', JSON.stringify(response['data']));
      this.router.navigate(['/admin/verify-email/' + 'update']);
    }, err => { 
      this.toastr.error(err.error.message);
    })
  }

}
