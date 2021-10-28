import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteService } from '../_services/institute.service';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.page.html',
  styleUrls: ['./manage-course.page.scss'],
})
export class ManageCoursePage implements OnInit {
  instituteLoginDetails: any = [];
  instituteId;
  institutecourseList: any = [];
  constructor(private instituteService:InstituteService,private router:Router) { }

  ngOnInit() {
   
  }
  ionViewWillEnter() {
    this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
    this.instituteId = this.instituteLoginDetails['userProfile'].userRole;
    this.getallcourserbyInstitute();

  }
  getallcourserbyInstitute()
  {
    this.instituteService.getallinstutecourses(this.instituteId).subscribe(
      data =>{
        this.institutecourseList = data['data']
      },
      error =>{

      }
    )
  }
  edit(ins)
  {
    console.log(ins);
    
    sessionStorage.setItem("coursedetails",JSON.stringify(ins['InstituteCourses']))
    this.router.navigate(['/manage-course/edit-course']);
  }
  
}
