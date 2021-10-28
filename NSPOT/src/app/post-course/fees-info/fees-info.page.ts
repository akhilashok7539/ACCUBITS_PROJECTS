import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postacourse } from 'src/app/_models/postaCourse';
import { InstituteService } from 'src/app/_services/institute.service';
import { LoaderService } from 'src/app/_services/loader.service';
import { ToasterService } from 'src/app/_services/toaster.service';

@Component({
  selector: 'app-fees-info',
  templateUrl: './fees-info.page.html',
  styleUrls: ['./fees-info.page.scss'],
})
export class FeesInfoPage implements OnInit {
  feePayments: any = [];
  postaCource = new Postacourse();
  serviceCharge = "0.0";
  bankCharge = "0.0";
  taxCharge = "0.0";
  bankAcoountList: any = [];
  instituteLoginDetails: any = [];
  instituteId;
  totalfee: any;
  instutecoursedetails:any=[];
  institutecocourseId;
  constructor(private instituteservice: InstituteService, private router: Router, private loader: LoaderService, 
    private toaster: ToasterService) { }


  ngOnInit() {

  }
  ionViewWillEnter() {
    this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
    this.instituteId = this.instituteLoginDetails['userProfile'].userRole;
    this.instutecoursedetails = JSON.parse(sessionStorage.getItem("post-course"));
    this.institutecocourseId = this.instutecoursedetails['data'].id;
    this.feepaymetTeture();
    this.getbankaccountDetails();
  }
  feepaymetTeture() {
    this.instituteservice.getpaymetTenture().subscribe(
      data => {
        this.feePayments = data['data'];
      },
      error => {

      }
    )
  }
  getbankaccountDetails() {
    this.instituteservice.getbankDetailByInstId(this.instituteId).subscribe(
      data => {
        this.bankAcoountList = data['data']
      },
      error => {

      }
    )
  }
  CalculateFee(fee) {
    console.log(fee);
    this.instituteservice.calculatenspotFee(fee).subscribe(
      data => {
        this.serviceCharge = data['data'].nspotFee;
        this.bankCharge = data['data'].bankCharge;
        this.taxCharge = data['data'].nspotTax;
        this.totalfee = this.serviceCharge + this.bankCharge + this.taxCharge;

      },
      error => {

      }
    )

  }
  submit() {
    this.loader.present();
    let req = {
      amount: this.postaCource.ScholarshipAmount,
      bankAccountId:this.postaCource.bankAcoount,
      hasScolarship: true,
      instituteCourseId:this.institutecocourseId,
      otherFee: this.postaCource.courseFee,
      paymentTenureId: this.postaCource.feepaymenttenure,
      title:this.postaCource.Scholarship,
      validUpto:this.postaCource.ValidUpto,
    }
    console.log(req);
    this.instituteservice.addfeesStructuretoinstitute(req,this.instituteId).subscribe(
      data =>{
        this.loader.dismiss();
        this.toaster.feeInfoAdded();
        this.router.navigateByUrl('/post-course/eligibility-required')
      },
      error =>{
        this.loader.dismiss();
        this.toaster.errorfeeInfoAdded();

      }
    )
  }
}
