import { Component, OnInit } from '@angular/core';
import { InstituteService } from '../_services/institute.service';

@Component({
  selector: 'app-institute-info',
  templateUrl: './institute-info.page.html',
  styleUrls: ['./institute-info.page.scss'],
})
export class InstituteInfoPage implements OnInit {
  instituteLoginDetails: any=[];
  instituteId: any;
  instituteDetails:any=[];
InstituteType:any=[];
LicenceIssueAuthority:any=[];
  constructor(private instituteservice:InstituteService) { }

  ngOnInit() {
    this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
    this.instituteId = this.instituteLoginDetails['userProfile'].userRole;
    this.getallinstituteservice();
  }
  getallinstituteservice(){
    this.instituteservice.getallinstituteservice(this.instituteId).subscribe(
      data =>{
        this.instituteDetails =data['data']
        this.InstituteType =this.instituteDetails['InstituteType']
        this.LicenceIssueAuthority =this.instituteDetails['LicenceIssueAuthority']
      },
      errror =>{

      }
    )
  }
}
