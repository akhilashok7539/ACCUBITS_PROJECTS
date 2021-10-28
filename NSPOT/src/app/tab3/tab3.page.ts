import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { endPoints } from '../_config/endpoints';
import { InstituteService } from '../_services/institute.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  instituteInfo:any = [];
  instituteId;
  institutedetails:any = [];
    constructor(private router:Router,private menu:MenuController,private apiservice:InstituteService) 
    {
    
    }
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate([''])
  }
  ionViewWillEnter() {
    this.institutedetails = JSON.parse(localStorage.getItem('userLogin'));
    console.log(this.institutedetails['userProfile'].userType_modelId);
    this.instituteId = this.institutedetails['userProfile'].userType_modelId;
    this.loadInstituteInfo();
  }
  ngOnInit() {
    this.menu.enable(true);
    this.menu.swipeGesture(true);

  }
  ngAfterContentInit()  {
    this.menu.enable(true);
    this.menu.swipeGesture(true);
  }
  ngAfterViewInit() {
    this.menu.enable(true);
    this.menu.swipeGesture(true);

  }
  ngOnDestroy() {
    this.menu.enable(true);
    this.menu.swipeGesture(true);

  }

  loadInstituteInfo() {
    // fetching institute details
    this.apiservice.doGetRequest(endPoints.GetInstituteInfo + this.instituteId).subscribe((returnData: any) => {
      console.log(returnData)
      this.instituteInfo = returnData.data;
    }, error => {
      console.error(error);
      // this.toastr.error('Failed to fetch institute details')
    });
  }

}
