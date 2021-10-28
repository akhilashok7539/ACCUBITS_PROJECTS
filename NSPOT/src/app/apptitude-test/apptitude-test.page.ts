import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteService } from '../_services/institute.service';

@Component({
  selector: 'app-apptitude-test',
  templateUrl: './apptitude-test.page.html',
  styleUrls: ['./apptitude-test.page.scss'],
})
export class ApptitudeTestPage implements OnInit {
  instituteLoginDetails:any=[];
  instituteId;
  apptutestestlist:any=[];
testName;
duration;
  constructor(private instituteservice:InstituteService,private router:Router) { }

  ngOnInit() {
    this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
    this.instituteId = this.instituteLoginDetails['userProfile'].userRole;
    console.log(this.instituteId);

  }
  ionViewWillEnter (){
    this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
    this.instituteId = this.instituteLoginDetails['userProfile'].userRole;
    console.log(this.instituteId);
    this.getallapptitutetest();
    
  }
  getallapptitutetest()
  {
    this.instituteservice.getalltestlist(this.instituteId).subscribe(
      data =>{
        this.apptutestestlist =data['data']
      },
      error =>{

      }
    )
  }
  submit(){
      let req ={
        "durationInMinuts": this.duration,
        "title": this.testName

      }
      this.instituteservice.addtestname(req,this.instituteId).subscribe(
        data =>{
          this.duration = "";
          this.testName = "";
          this.getallapptitutetest();
        },
        error=>{

        }
      )
  }
  view(s){
    sessionStorage.setItem("view-apptitude-questions",JSON.stringify(s));
    this.router.navigateByUrl("/apptitude-test/view-questions-apptitude");
  }
  edit(s){
    sessionStorage.setItem("appitutetest",JSON.stringify(s))
    this.router.navigate(['/apptitude-test/edit-apptituetest']);
  }
}
