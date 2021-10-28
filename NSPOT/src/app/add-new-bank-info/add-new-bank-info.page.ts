import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteService } from '../_services/institute.service';

@Component({
  selector: 'app-add-new-bank-info',
  templateUrl: './add-new-bank-info.page.html',
  styleUrls: ['./add-new-bank-info.page.scss'],
})
export class AddNewBankInfoPage implements OnInit {
  accountNumber;
  accountholdername;
  ifsccode;
  nickname;
  aadharnumber;
  pannumber;
  passbookfile;
  aadharfilename;
  panfilename;
  formdata = new FormData();
  instituteId: any;
  instituteLoginDetails: any=[];

  constructor(private router:Router,private institutesertvice:InstituteService) { }
 
  ngOnInit() {
  }
  passbook(event){
    let file = event.target.files[0];
    console.log(file);
    this.passbookfile = file; 
  
  }
  aadharfile(event)
  {
    let file = event.target.files[0];
    console.log(file);
    this.aadharfilename = file;
  }
  panfile(event)
  {
    let file = event.target.files[0];
    console.log(file);
    this.panfilename = file;

  }
  add()
  {
    this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
    this.instituteId = this.instituteLoginDetails['userProfile'].userRole;
    this.formdata.append("accountNumber",this.accountNumber)
    this.formdata.append("name",this.accountholdername)
    this.formdata.append("ifsc",this.ifsccode)
    this.formdata.append("nickname",this.nickname)
    this.formdata.append("passbookFile",this.passbookfile)
    this.formdata.append("aadharFile",this.aadharfilename)
    this.formdata.append("panFile",this.panfilename)
    this.formdata.append("aadharNumber",this.aadharnumber)
    this.formdata.append("panNumber",this.pannumber)

    this.institutesertvice.addbankkinfo(this.instituteId,this.formdata).subscribe(
      data =>{
        this.formdata = new FormData();
      },
      error =>{
        this.formdata = new FormData();

      }
    )
  }
}
