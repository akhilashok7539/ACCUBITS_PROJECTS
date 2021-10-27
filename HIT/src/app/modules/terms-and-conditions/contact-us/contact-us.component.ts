import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../core/service/api.service';
import { CommonService } from '../../../core/service/common.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  fixed=false;
  constructor(private fb: FormBuilder,
    private toastr:ToastrService,
    private service: ApiService,
    private commonService: CommonService,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    this.createForm();
  }
  onScroll(event) {
    const mainDiv = document.getElementById('section');  
    if(mainDiv.scrollTop>10){
      this.fixed=true;
    }else{
      this.fixed=false;
    }
  }
  createForm(): void {
    this.contactUsForm = this.fb.group({
      message: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(7)]],
    });
    this.getUserProfile();

  }
  submitDetails(){
    const hubspotKey = this.cookieService.get('hubspotutk');
    const userDetailsObject = {
      ...this.contactUsForm.value,
      hubspotUserToken: hubspotKey
    };
    this.service.httpPost('/v1/user/contactUs',userDetailsObject).subscribe((response) => {
      this.toastr.success(response.message);
      this.contactUsForm.reset()
    });
    
  }

  getUserProfile()
  {
    this.service.httpGet('/v1/user/profile').subscribe(
      data =>{
        console.log(data);
        this.contactUsForm.controls['name'].setValue(data['data'].firstName)
        this.contactUsForm.controls['email'].setValue(data['data'].email)
        this.contactUsForm.controls['phone'].setValue(data['data'].mobileNumber)

        
      },
      error =>{

      }
    )
  }
}
