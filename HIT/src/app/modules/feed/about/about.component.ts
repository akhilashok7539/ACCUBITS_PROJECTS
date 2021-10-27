import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../../../shared/service/data-service.service';
import { Subscription } from 'rxjs';
import { CommonService } from '../../../core/service/common.service';
import { ApiService } from '../../../core/service/api.service';
import * as googleLibphonenumber from "google-libphonenumber";
import currency from '../../../../assets/json/currencies.json';
import countryList from 'country-telephone-data';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  subscribeProfile : Subscription;
  userDetailsForm: FormGroup;
  userFullNameForm: FormGroup;
  language;
  selectedLanguage:any="";
  userProfile;
  editProfile = false;
  showNameField = false;
  currencyList = currency;
  countryCode;
  country = "";
  phoneNumber ='';
  fullName ='';
  hasFullName=false;
  editLang = false;
  langList:any = [
    {
      "id":"1",
      "name":"English"
    },
    {
      "id":"2",
      "name":"Português"
    },
    {
      "id":"3",
      "name":"Spanish"
    }
  ]
  constructor(private fb: FormBuilder,
    private dataService: DataServiceService,
    public commonService: CommonService,
    private service:ApiService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.subscribeProfile = this.dataService.currentUser.subscribe(data => {
      if(data){
        this.userProfile = data;
        this.getCountry();
        if(this.userProfile.fullName){
          this.hasFullName = true;
        }
      }
    });
    this.createForm();
    this.getProfile();
  }
  ngOnDestroy(){
    this.subscribeProfile.unsubscribe();
  }
  getCountry(){
    this.phoneNumber = this.userProfile?.mobileNumber;
    this.countryCode = this.userProfile?.countryCode.replace('+', '');
    const code = this.countryCode;
    const found = countryList.allCountries.find((item) => item.dialCode === code);
    this.country = found.iso2;
  }
  createForm(): void {
    this.userDetailsForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.minLength(7)]],
    });
    this.userFullNameForm = this.fb.group({
      fullName: ['', [Validators.required]],
    })
  }
  updateName(): void {
    const userDetailsVal = {
      fullName: this.userFullNameForm.value.fullName,
    };
    this.commonService._updateFullName(userDetailsVal).subscribe((response) => {
      this.toastr.success(response.message);
      this.getProfile();
      this.showNameField = false;
    });
  }

  getNumber(e) {
    this.countryCode = e.dialCode;
    this.country = e.iso2;
  }
  showEdit(){
    this.phoneNumber = this.userProfile?.mobileNumber;
    this.editProfile = !this.editProfile;
  }
  showEditName(){
    this.fullName = this.userProfile.fullName;
    this.hasFullName = false;
    this.showNameField = true;
  }
  submitDetails(): void {
    const userDetailsVal = {
      mobileNumber: this.userDetailsForm.value.mobileNumber.replace(/ /g,''),
      countryCode: '+' + this.countryCode
    };
    const phoneUtil = googleLibphonenumber.PhoneNumberUtil.getInstance();
    const phoneNumber = phoneUtil.isValidNumberForRegion(phoneUtil.parse(userDetailsVal.mobileNumber, this.country), this.country);
    if(!phoneNumber){
      this.toastr.error("Invalid Mobile Number");
      return;
    }
    this.service.httpPut(`/v1/user/about`,userDetailsVal).subscribe((response) => {
      this.toastr.success(response.message);
      this.getProfile();
      this.showEdit();
    });
  }
  getProfile(){
    this.commonService._getProfile().subscribe((response) => {
      this.dataService.profile(response.data);
      console.log("respone data in about",response.data);
      this.language = response.data.language;
      if(this.language === 1)
      {
        localStorage.setItem("lang", 'en');
      }
      if(this.language === 2)
      {
        localStorage.setItem("lang", 'por');
      }
      if(this.language === 3)
      {
        localStorage.setItem("lang", 'es');
      }

    });
  }
  addRealName(){
    this.showNameField = !this.showNameField;
    console.log(this.showNameField);
    

  }
  cancelRealName(){
    if(this.userProfile.fullName){
      this.showNameField = !this.showNameField;
      this.hasFullName = !this.hasFullName;
    }else{
      this.showNameField = !this.showNameField;
    }
  }
  addInsta(){
    this.service.httpGet(`/v1/user/instagram`).subscribe((response) => {
      window.open(response.data.url, "_blank");
    });
  }
  removeInstagram(){
    this.service.httpPost(`/v1/user/instagram/remove`,null).subscribe((response) => {
      this.getProfile();
      this.toastr.success(response.message);
    });
  }
  showEditLang()
  {
    this.editLang = !this.editLang;
  }
  showEditLangcancel()
  {
    this.editLang = !this.editLang;

  }
  submitDetailsform()
  {
    let req ={
      "language":this.selectedLanguage
    }
    this.service.httpPut(`/v1/user/about`,req).subscribe((response)=>{
      this.toastr.success(response.message);
      this.editLang = false;
      this.getProfile();
      this.dataService.SendHeaderlanguageUpdatedAbout(true);
    
    })
  }
  getlang()
  {
    return localStorage.getItem('lang')
  }
}
