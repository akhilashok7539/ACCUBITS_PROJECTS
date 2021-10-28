import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postacourse } from 'src/app/_models/postaCourse';
import { InstituteService } from 'src/app/_services/institute.service';
import { LoaderService } from 'src/app/_services/loader.service';
import { ToasterService } from 'src/app/_services/toaster.service';

@Component({
  selector: 'app-eligibility-required',
  templateUrl: './eligibility-required.page.html',
  styleUrls: ['./eligibility-required.page.scss'],
})
export class EligibilityRequiredPage implements OnInit {
  postaCource = new Postacourse();
  feePayments: any = [];
 
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
    
  }
  submit(){
    this.loader.present();
    let req = {
      "eligibiliyInString":this.postaCource.eligibiliyInString,
      "instituteCourseId":this.institutecocourseId
    }
    this.instituteservice.addinstituteeligibility(req,this.instituteId).subscribe(
      data =>{
        this.loader.dismiss();
        this.toaster.eligibilityadded();
        this.router.navigateByUrl('/post-course/job-areas')
      },
      error =>{
        this.loader.dismiss();
        this.toaster.erroreligibilityaddedd();

      }
    )
  }
}
