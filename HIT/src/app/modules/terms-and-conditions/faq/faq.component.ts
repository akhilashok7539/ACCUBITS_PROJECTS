import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/service/api.service';
import { CommonService } from 'src/app/core/service/common.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  contactUsForm: FormGroup;
  fixed=false;
  isWeb=true;
  constructor(
    public route: ActivatedRoute, private toastr:ToastrService,
    private service: ApiService,private fb: FormBuilder,
    private commonService: CommonService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params.app==1){
       this.isWeb = false;
      }
    })
    this.createForm();
  }

  createForm(): void {
    this.contactUsForm = this.fb.group({
      message: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(7)]],
    });
  }
  onScroll(event) {
    const mainDiv = document.getElementById('section');  
    if(mainDiv.scrollTop>10){
      this.fixed=true;
    }else{
      this.fixed=false;
    }
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
}
