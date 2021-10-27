import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute  } from '@angular/router';
import { LoginParams, LoginResponse} from '../../../core/interfaces/login.interface';
import { AuthService } from '../../../core/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  type = 'password';
  passwordShow = false;
  imageeye = '/assets/images/visibility.svg';
  constructor(private fb: FormBuilder, private toastr: ToastrService, public router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    sessionStorage.clear();
    localStorage.clear();
    this.createLoginForm();
  }
  createLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }
  login(){
    const loginParams: LoginParams = { ...this.loginForm.value };
    this.auth.adminLogin(loginParams).subscribe((response) => {
      const data = response['data'];
      localStorage.setItem('Admtype',data.userProfile.type)
      if(data.userProfile.isPermanentPassword){
        this.router.navigate(["/admin/layout/"]);
      }else{
        this.router.navigate(["admin/create-new-password"]);
      }
      
    });
  }
  showPassword()
  {
    this.passwordShow = !this.passwordShow;
    if (this.passwordShow === true) {
      this.type = 'text';
      this.imageeye = '/assets/images/eye_open_green.svg';

    } else if (this.passwordShow === false) {
      this.type = 'password';
      this.imageeye = '/assets/images/visibility.svg';
    }
  }
}
