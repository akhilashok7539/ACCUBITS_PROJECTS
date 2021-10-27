import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/service/api.service';
import { CommonService } from 'src/app/core/service/common.service';
 

@Component({
  selector: 'app-redeem-pop-up-confirmation',
  templateUrl: './redeem-pop-up-confirmation.component.html',
  styleUrls: ['./redeem-pop-up-confirmation.component.scss']
})
export class RedeemPopUpConfirmationComponent implements OnInit {
  @Output() close_notice = new EventEmitter<boolean>();
  @Input() data;
  @Input() conversionRate;
  responsearray:any = []; 
  initial_amount ;
  redeemForm:FormGroup;
  dynamicFormArray:any;
  showBanks=false;
  filterText='';
  bankName = '';
  listedBanks=[];
  userInfo:any;
  countryCode:any
  stateList:any;
  cityList:any;
  constructor(private service: ApiService,
    private fb:FormBuilder,
    private toastr:ToastrService,
    public commonService: CommonService) {
      this.responsearray = JSON.parse(sessionStorage.getItem("paymentresponse"))
      console.log(this.responsearray);
      
      this.redeemForm = this.fb.group({
        amount:['',[Validators.required]],
        documentId:['',[Validators.required]],
        documentType:['',[Validators.required]],
        paymentMethodCode:['',[Validators.required]],
        firstName:['',[Validators.required]],
        lastName:['',[Validators.required]],
        phone:['',[Validators.required]],
        address:['',[Validators.required]],
        state:['',[Validators.required]],
        city:['',[Validators.required]],
        zipCode:['',[Validators.required]],

      })
      // firstName:['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
      // lastName:['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
 
      // this.redeemForm.controls['documentType'].setValidators([Validators.minLength(this.responsearray['fields'].documentId.rules[0].minLength)])
      // this.redeemForm.controls['documentType'].setValidators([Validators.maxLength(this.responsearray['fields'].documentId.rules[0].maxLength)])

      // this.redeemForm.controls['documentId'].setValidators([Validators.minLength(this.responsearray['fields'].documentId.rules[1].minLength)])
      // this.redeemForm.controls['documentId'].setValidators([Validators.maxLength(this.responsearray['fields'].documentId.rules[1].maxLength)])

   }

  ngOnInit(): void {
    console.log('conversionRate',this.conversionRate)
    console.log('this.responsearray["amount"]',this.responsearray['amount'])
    console.log('this.conversionRate',this.conversionRate);
    this.initial_amount = (this.responsearray['type']=='static') ? Math.ceil(this.responsearray['amount'] * this.conversionRate):Number(this.responsearray['amount']);
    this.redeemForm.get('amount').setValue(this.initial_amount);
    var apiData = {
      amount: this.initial_amount
    }
     this.service.httppostinitialAddAmont('/v1/wallet/add/money/initial',apiData).subscribe(data=>{
       console.log(data)
       if(data.status){
         this.userInfo=data.data.fields;
         this.countryCode=data.data.countryCodeIso;
        this.getLocations();
       }
       if(this.userInfo){
        this.redeemForm.get('firstName').setValue(this.userInfo.firstName.value);
        this.redeemForm.get('lastName').setValue(this.userInfo.lastName.value);
        this.redeemForm.get('phone').setValue(this.userInfo.phone.value);
        this.redeemForm.get('address').setValue(this.userInfo.address.value);
        this.redeemForm.get('state').setValue(this.userInfo.state.value);
        this.getCityLocation();
        this.redeemForm.get('city').setValue(this.userInfo.city.value);
        this.redeemForm.get('zipCode').setValue(this.userInfo.zipCode.value);
       }
     })
  }
  oncloseNotice() {
    this.close_notice.emit();
  }
  submit(){
    console.log(this.redeemForm.value);
    this.service.httpPost('/v1/wallet/add/money',this.redeemForm.value).subscribe((response) => { 
      // this.toastr.success(response.message);
            window.location.href = response.data.redirectUrl;
      this.close_notice.emit();
    });
  }

  getLocations(){
    let q = '?countryCode=' + this.countryCode; 
    this.commonService._getLocationInfo(q).subscribe((response) => {
     this.stateList=( response.data.states)
      
    });
  } 
  getCityLocation() {   
    if(this.redeemForm.get('state').value === null){
      return false;
    }
    let q = '?stateCode=' + this.redeemForm.get('state').value + '&countryCode=' +this.countryCode; 
    this.commonService._getLocationInfo(q).subscribe((response) => {
      this.cityList = response.data.cities;
    });
  }
}
