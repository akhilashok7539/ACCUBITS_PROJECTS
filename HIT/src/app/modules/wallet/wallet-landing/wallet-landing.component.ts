import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import { ApiService } from '../../../core/service/api.service';
import { CommonService } from '../../../core/service/common.service';
declare let fbq: Function;
declare global {
  interface Window { dataLayer: any; }
}
@Component({ 
  selector: 'app-wallet-landing',
  templateUrl: './wallet-landing.component.html',
  styleUrls: ['./wallet-landing.component.scss']
})
export class WalletLandingComponent implements OnInit {
  subscribeProfile: Subscription;
  filterFromDate = '';
  filterToDate = '';
  filter = null;
  filterTransaction = '';
  filterTransactionType = '';
  walletBalance = '0';
  transactionArray = [];
  checkPopClosed = false;
  p = 1;
  total = 0;
  limit = 10;
  responsedata = [];
  currentYear = moment().year();
  minDate = moment([this.currentYear - 1, 5, 10]);
  dumArrCoin = ['6', '10', '15', '25', '50'];
  filterArray = [];
  showPayment = false;
  todayDate: Date = new Date();
  showRedeem = false;
  conversionRate;
  addKyc = false;
  showFilter = false;
  showFilterType = false;
  addmoneypopup = false;
  userProfile;
  price = '0';
  timezone = this.toIsoString(); 
  currencyDetails;
  viewNotice = false;
  paymentTypeList: any = [];
  constructor(private service: ApiService,
    public commonService: CommonService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (Object.keys(params).length != 0) {
        this.getStatus(params.id);
      }
    });
    this.getTransaction();
    this.getUserProfile();
  }
  toIsoString() {
    let date = new Date().getTimezoneOffset();
   var tzo = -date,
       dif = tzo >= 0 ? '+' : '-',
       pad = function(num) {
           var norm = Math.floor(Math.abs(num));
           return (norm < 10 ? '0' : '') + norm;
       };
 
   return dif + pad(tzo / 60) +
       ':' + pad(tzo % 60);
 }
  ngAfterViewInit(): void {
    this.subscribeProfile = this.dataService.currentUser.subscribe(data => {
      this.userProfile = data;
      this.walletBalance = data?.walletBalance;
    })
  }
  ngOnDestroy() {
    this.subscribeProfile.unsubscribe();
  }
  getStatus(id) {
    this.service.httpGet('/v1/wallet/transaction?transactionId=' + id).subscribe((response) => {
    });
  }
  getUserProfile()
  {
    this.service.httpGet('/v1/user/profile').subscribe((response) => {
      console.log(response);
      const obj1 = response.data.config.payment.purpose;
      this.conversionRate = response.data.conversionRate;
      this.filterArray = Object.keys(obj1).map(key => ({ type: key, value: obj1[key] }));
    });
  }
  getTransaction() {
    let apiParams = {
      pageLimit: this.limit,
      pageNo: this.p,
      fromDate: this.filterFromDate ? moment(this.filterFromDate).format('YYYY-MM-DD') : '',
      toDate: this.filterToDate ? moment(this.filterToDate).format('YYYY-MM-DD') : '',
      transactionType: this.filterTransaction,
      timezone:this.timezone
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.transactionArray = [];
    this.service.httpGet('/v1/wallet/transactions?' + params).subscribe((response) => {
      this.total = response.data.totalCount;
      this.walletBalance = response.data.walletBalance;
      this.currencyDetails = response.data;
      this.transactionArray = response.data.rows;
      const obj = response.data.config.purpose;
      const payment = response.data.config.paymentMethod;
      // this.filterArray = Object.keys(obj).map(key => ({ type: key, value: obj[key] }));
      this.paymentTypeList = Object.keys(payment).map(key => ({ id: key, value: payment[key] }));
      console.log(this.paymentTypeList);

    });
  }
  loadMoreData() {
    this.limit = this.limit + 10;
    this.getTransaction();
  }
  getpaymentById(id) {
    // console.log(id);

    return (
      this.paymentTypeList.find((el) =>
        el.id.toString() === (id || "").toString()) ||
      {
        name: "",


      }
    );

  }
  addAmount(i) {
    console.log(i);
    let amountSelected = i;
    if (i < 2) {
      this.toastr.error("Add a value greater than 2")
      return
    }
    if (i <= 2000) {
      // this.addKyc = false;
      console.log("amount less than equal to 500");
      const data = {
        amount: i
      }
      this.service.httpPost('/v1/wallet/add/money', data).subscribe((response) => {

        // fbq('trackCustom', 'DepositInitiated', { currency: "USD", value: amountSelected });
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'deposit_initiated',
          'amount': amountSelected
        });
        window.location.href = response.data.redirectUrl;
      });
    }
    else {
      console.log("amount greater than equal to 500");
      this.addKyc = true;
      return
    }
    // if (this.userProfile.kycStatus != 1 && i >= 100) {
    //   this.addKyc = true;
    //   return
    // }
    // const data = {
    //   amount: i
    // }
    // this.service.httpPost('/v1/wallet/add/money', data).subscribe((response) => {
    //   window.location.href = response.data.redirectUrl;
    // });
    // this.showPayment = true;
  }
  // cancelPayment(e){
  //   if(e==1){
  //     this.showPayment = false;
  //   }else{
  //     window.location.reload();
  //   }
  // }
  setPrice(e) {
    this.price = String(e);
  }
  onclose() {
    this.showRedeem = false;
  }
  oncloseNotice() {
    this.viewNotice = false;
    // this.showRedeem = true;
    if (this.userProfile.kycStatus == 1) {
      this.showRedeem = true;
    } else {
      this.addKyc = true;
    }
  }
  redeemMoney() {
    // if (this.userProfile.kycStatus == 1) {
    //   this.showRedeem = true;
    // } else {
    //   this.addKyc = true;
    // }
    // this.addKyc = true;
    this.viewNotice = true;
  }
  redeemPopAction(e) {
    if (e == 1) {
      this.addKyc = false;
    } else {
      this.updateKyc()
    }
  }
  updateKyc() {
    this.service.httpGet('/v1/wallet/kyc').subscribe((response) => {
      window.location.href = response.data.url;
      this.addKyc = false;
    });
  }

  fromDateChanged(e) {
    this.filterFromDate = moment(e.value).format('YYYY-MM-DD');
  }
  toDateChanged(e) {
    this.filterToDate = moment(e.value).format('YYYY-MM-DD');
  }
  selectTypeFilter(i) {
    this.filterTransaction = i.value;
    this.filterTransactionType = i.type;
    this.showTypeList();  
  }
  createFilter() {
    if (this.filterFromDate !== '' || this.filterToDate !== '' || this.filterTransactionType !== '') {
      this.filter = 1
    } else {
      this.filter = null
    }
    this.getTransaction();
    this.showFilter = false;
  }
  cancelFilter() {
    this.filter = null
    if (this.filterFromDate == '' && this.filterToDate == '' && this.filterTransactionType == '') {
      this.showFilter = false;
    } else {
      this.filterFromDate = '';
      this.filterToDate = '';
      this.filterTransactionType = '';
      this.getTransaction();
      this.showFilter = false;
    }
  }
  showTypeList() {
    this.showFilterType = !this.showFilterType;
  }
  closeTypeDropdown(event): void {
    console.log(event)
    // if (event) {
    //   if (this.showFilter) {
    //     if (this.checkPopClosed === false) {
    //       this.checkPopClosed = true
    //     } else {
    //       this.showFilter = false;
    //       this.checkPopClosed = false;
    //     }
    //   }
    // }
  }
  closeDropdown(event): void {
    console.log(event)
    if (event) {
      if (this.showFilterType) {
        this.showFilterType = false;
      }
    }
  }
  addAmounts(i,type)
  {
    console.log(i);
    let amountSelected = i;
    if (i < (type=='dynamic' ? 5 *  this.conversionRate: 2)) {
      this.toastr.error("Add a value greater than " + (type=='dynamic' ? Math.ceil(5 * this.conversionRate): 2));
      return
    }
    if (i <= 2000) {
      // this.addKyc = false;
      console.log("amount less than equal to 500");
      const data = {
        amount: i
      }
      this.service.httpPost('/v1/wallet/add/money/initial', data).subscribe((response) => {
        this.addmoneypopup = true;
        response.data['type']=type;
        this.responsedata = response.data;
        sessionStorage.setItem("paymentresponse",JSON.stringify(this.responsedata))
      
        
        // fbq('trackCustom', 'DepositInitiated', { currency: "USD", value: amountSelected });
        // window.dataLayer = window.dataLayer || [];
        // window.dataLayer.push({
        //   'event': 'deposit_initiated',
        //   'amount': amountSelected
        // });
        // window.location.href = response.data.redirectUrl;
      });
    }
    else {
      console.log("amount greater than equal to 500");
      this.addmoneypopup = false;
      return
    }
  }
  oncloseNoticepop() {
    this.addmoneypopup = false;
  }
}
