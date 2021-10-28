import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteService } from '../_services/institute.service';

@Component({
  selector: 'app-addmission-officerlist',
  templateUrl: './addmission-officerlist.page.html',
  styleUrls: ['./addmission-officerlist.page.scss'],
})
export class AddmissionOfficerlistPage implements OnInit {
  instituteLoginDetails:any=[];
  instituteId;
  addmisiionOfficerList:any=[];
  constructor(private instituteservice: InstituteService,private router:Router) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
    this.instituteId = this.instituteLoginDetails['userProfile'].userRole;
    this.getalloffiers();
  }
  getalloffiers(){
    this.instituteservice.getalladdmissionOfficer(this.instituteId).subscribe(
      data =>{
        this.addmisiionOfficerList =data['data'];
      },
      error =>{

      }
    )
  }
}
