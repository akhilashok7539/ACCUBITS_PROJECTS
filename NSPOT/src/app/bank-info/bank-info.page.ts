import { Component, OnInit } from '@angular/core';
import { InstituteService } from '../_services/institute.service';

@Component({
  selector: 'app-bank-info',
  templateUrl: './bank-info.page.html',
  styleUrls: ['./bank-info.page.scss'],
})
export class BankInfoPage implements OnInit {
  instituteLoginDetails:any = [];
  bankAcoountList:any = [];
  instituteId;
  constructor(private instituteservice:InstituteService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
    this.instituteId = this.instituteLoginDetails['userProfile'].userRole;
    
    this.getbankaccountDetails();
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
}
