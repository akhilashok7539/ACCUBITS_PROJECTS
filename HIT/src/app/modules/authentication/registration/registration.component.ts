import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { DataServiceService } from '../../../shared/service/data-service.service';
import { AuthService } from '../../../core/service/auth.service';
import { RegisterResponse, RegisterParams } from 'src/app/core/interfaces/register.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  fbReference=null;
  userEmail='';
  constructor(private fb: FormBuilder, public router: Router, private dataServiceService: DataServiceService,
    private auth: AuthService,private route: ActivatedRoute, private toastr: ToastrService,) { }
  ngOnInit(): void {
    this.createForm();
    this.route.queryParams.subscribe(params => {
      if(Object.keys(params).length!=0){
        this.fbReference=params;
        params.email?this.userEmail = params.email:'';
      }
    });
    
  }

  createForm(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    });
  }

  register(): void {
    const apiData={
      ...this.registrationForm.value,
    }
    if(this.fbReference!=null){
      apiData['userRefId']=this.fbReference?.referenceId
    }
    // const regParams: RegisterParams = { ...this.registrationForm.value };
    this.auth.sendRegistrationOtp(apiData).subscribe((response: RegisterResponse) => {
      this.toastr.success(response['message']);
      this.router.navigate(['/user/verify-email/' + "create"]);
      sessionStorage.setItem('registrationMail', this.registrationForm.value.email);
      sessionStorage.setItem('otpReference', JSON.stringify(response['data']));
    })
  }
  googleAuthentication() {
    this.auth.loginWithGoogle();
  }
  facebookAuthentication() {
    this.auth.loginWithFacebook();
  }

}
