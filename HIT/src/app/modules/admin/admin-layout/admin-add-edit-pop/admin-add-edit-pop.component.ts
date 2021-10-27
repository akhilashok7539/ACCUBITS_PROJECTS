import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../../../core/service/api.service';
import { CommonService } from '../../../../core/service/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as googleLibphonenumber from "google-libphonenumber";
import { ToastrService } from 'ngx-toastr';
import countryList from 'country-telephone-data';

@Component({
  selector: 'app-admin-add-edit-pop',
  templateUrl: './admin-add-edit-pop.component.html',
  styleUrls: ['./admin-add-edit-pop.component.scss']
})
export class AdminAddEditPopComponent implements OnInit {
  userDetailsForm: FormGroup;
  countryCode = +55;
  country = "BR";
  addAdmin =true;
  editData;
  adminTypeList:any=[];
  item:any = [];
  adminType;
  adminTypeName;
  adminRoleDropdown = false;
  constructor(public dialogRef: MatDialogRef<AdminAddEditPopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private service: ApiService,
    public commonService: CommonService,
    private toastr: ToastrService) {
      
    this.adminTypeList = JSON.parse(sessionStorage.getItem("adminRoles"));
     }
 
  ngOnInit(): void {
    this.createForm();
    if(this.data){
      console.log(this.data);
      
      this.editData = this.data;
      this.getCountry();
      this.createEditForm(this.data);
      this.addAdmin = false;
    }
  //   this.adminTypeList =JSON.parse(sessionStorage.getItem("adminRoles"));
  //   console.log(this.adminTypeList);
  //   var jsonToBeUsed = [];
  //   for (let type in this.adminTypeList) {
    
  //     this.item = {};
  //     this.item.key = JSON[type];
  //     this.item.value = type;
  //     jsonToBeUsed.push(this.item);
  // }
  // console.log(jsonToBeUsed);
  }

  createForm(): void {
    this.userDetailsForm = this.fb.group({
      firstName:['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
      lastName:['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.minLength(7)]],
      adminType:['', Validators.required],
    });
  }

  getCountry(){
    this.countryCode = this.editData.countryCode.replace('+', '');
    const code = this.countryCode;
    const found = countryList.allCountries.find((item) => item.dialCode === code);
    this.country = found.iso2;
  }

  createEditForm(data){
    this.userDetailsForm.controls['firstName'].setValue(data.firstName);
    this.userDetailsForm.controls['lastName'].setValue(data.lastName);
    this.userDetailsForm.controls['email'].setValue(data.email);
    this.userDetailsForm.controls['mobileNumber'].setValue(data.mobileNumber);
    this.userDetailsForm.controls['adminType'].setValue(data.type);
    this.adminType =data.type
  }
  onNoClick(): void {
    this.dialogRef.close('close');
  }
  searchRpleDrop(){
    this.adminRoleDropdown = true;
  }
  selectrole(data){
    
      this.adminTypeName = data.key;
      this.adminType = data.value;
      this.adminRoleDropdown = false;
 
  }
  submitDetails(){
    const userDetailsVal = {
      ...this.userDetailsForm.value,
      mobileNumber: this.userDetailsForm.value.mobileNumber,
      countryCode: '+'+this.countryCode,
    };
    const phoneUtil = googleLibphonenumber.PhoneNumberUtil.getInstance();
    const phoneNumber = phoneUtil.isValidNumberForRegion(phoneUtil.parse(userDetailsVal.mobileNumber, this.country), this.country);
    if(!phoneNumber){
      this.toastr.error("Invalid Mobile Number");
      return;
    }
    let apiParams={      
      firstName: userDetailsVal.firstName,
      lastName: userDetailsVal.lastName,
      mobileNumber: userDetailsVal.mobileNumber,
      email: userDetailsVal.email,
      countryCode: '+'+this.countryCode,
      type:userDetailsVal.adminType
    }
    if(this.addAdmin){
      this.service.httpPost('/v1/admin/settings/subadmin',apiParams).subscribe((response) => {
        this.toastr.success("Successfully added Sub Admin");
        this.dialogRef.close('Added');
      });
    }else{
      this.service.httpPut('/v1/admin/settings/subadmin/'+this.editData.guid,apiParams).subscribe((response) => {
        this.toastr.success("Successfully added Sub Admin");
        this.dialogRef.close('Added');
      });
    }
    
  }
  getNumber(e) {
    this.countryCode = e.dialCode;
    this.country = e.iso2;
  }

}
