import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddmissionOfficer } from '../_models/adminsionOffice';
import { InstituteService } from '../_services/institute.service';
@Component({
  selector: 'app-add-addmission-officerlist',
  templateUrl: './add-addmission-officerlist.page.html',
  styleUrls: ['./add-addmission-officerlist.page.scss'],
})
export class AddAddmissionOfficerlistPage implements OnInit {
  instituteLoginDetails:any=[];
  instituteId;
  addmisionOfficer = new AddmissionOfficer;
  constructor(private instituteservice: InstituteService,private router:Router) { }

  ngOnInit() {
  
  }
  ionViewWillEnter() {
    this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
    this.instituteId = this.instituteLoginDetails['userProfile'].userRole;

  }
  submit() {
    let req = {
      admissionDepartment: this.addmisionOfficer.admissionDepartment,
      designation: this.addmisionOfficer.designation,
      email: this.addmisionOfficer.email,
      instituteId: this.instituteId,
      name: this.addmisionOfficer.name,
      phone1: this.addmisionOfficer.phone1,
      phone2: this.addmisionOfficer.phone2,
    }
    this.instituteservice.addAddmissionOfficer(req).subscribe(
      data =>{
        this.router.navigateByUrl('/addmission-officerlist');
      },
      error =>{

      }
    )
  }
}
