import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../core/service/api.service';
import { CommonService } from '../../../core/service/common.service';

@Component({
  selector: 'app-redeem-popup',
  templateUrl: './redeem-popup.component.html',
  styleUrls: ['./redeem-popup.component.scss']
})
export class RedeemPopupComponent implements OnInit {
  @Output() close_redeem = new EventEmitter<boolean>();
  redeemForm:FormGroup;
  dynamicFormArray:any;
  showBanks=false;
  filterText='';
  bankName = '';
  listedBanks=[];
  constructor(private service: ApiService,
    private fb:FormBuilder,
    private toastr:ToastrService,
    public commonService: CommonService) { }

  ngOnInit(): void {
    this.getConfig();
    this.redeemForm = this.fb.group({

    })
  }
  getConfig(){
    this.service.httpGet('/v1/wallet/redeem/fields').subscribe((response) => {  
      this.listedBanks = response.data.bankList;   
      let mapped = Object.keys(response.data.redeemFields).map(key => ({type: key, value: response.data.redeemFields[key]}));
      const formGenerated = [];
      mapped.map(item=>{
          if(item.value.required){
            formGenerated.push(item) 
          }
          if(item.value?.in?.length>0){
            item['isSelect']=true;
            item['hidePop']=true;
          }
      })  
      this.dynamicFormArray = formGenerated;
      this.createFormControl();
    });
  }
  checkValidation(event,item){
    const formValue = {...this.redeemForm.value};
    if(item.type=="documentId"){
      if(formValue.documentType==""){
        this.toastr.error("Select Document Type");
        event.preventDefault()
      }
    }
  }
  createFormControl(){
    this.dynamicFormArray.forEach(element => {
      if(element.value.required === true){
        this.redeemForm.addControl(element.type,new FormControl('',Validators.required));
      } else{
        this.redeemForm.addControl(element.type,new FormControl(''));
      }
    });
  }
  submitRedeem(){
    const data = {...this.redeemForm.value};
    this.service.httpPost('/v1/wallet/redeem/request',data).subscribe((response) => { 
      this.toastr.success(response.message);
      this.close_redeem.emit();
    });
  }
  leagueDropdown() {
    this.showBanks = !this.showBanks;
  }
  showOption(i,item,value){
    const type=item.type
    if(value){
      this.redeemForm.value[type]=value;
      if(item.isSelect===true && item.value.config){
        item['selectedValue']=item.value.config[value]
      }
    } 
    this.dynamicFormArray[i].hidePop = !this.dynamicFormArray[i].hidePop;
  }
  closeDropdown(e,i){
    this.dynamicFormArray[i].hidePop = true;
  }

  selectBank(i,item,value){
    const type=item.type
    if(type){
      this.redeemForm.value[type]=value.bankCode.toString();
    }
    this.bankName = value.name;
    this.showBanks = false;
    this.filterText = '';
  }
  closeLeagueDropdown(event): void {
    if (event) {
      if (this.showBanks) {
        this.showBanks = false;
        this.filterText = '';
      }
    }
  }
  
  closeRedeem() {
    this.close_redeem.emit();
  }

}
