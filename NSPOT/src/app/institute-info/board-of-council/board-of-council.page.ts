import { Component, OnInit } from '@angular/core';
import { InstituteService } from 'src/app/_services/institute.service';

@Component({
  selector: 'app-board-of-council',
  templateUrl: './board-of-council.page.html',
  styleUrls: ['./board-of-council.page.scss'],
})
export class BoardOfCouncilPage implements OnInit {
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
    this.instituteservice.getallinstituteservicebordorcounicl(this.instituteId).subscribe(
      data =>{
        this.instituteDetails =data['data']
      
      },
      errror =>{

      }
    )
  }

}
