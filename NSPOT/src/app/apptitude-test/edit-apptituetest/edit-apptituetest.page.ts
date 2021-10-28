import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteService } from 'src/app/_services/institute.service';

@Component({
  selector: 'app-edit-apptituetest',
  templateUrl: './edit-apptituetest.page.html',
  styleUrls: ['./edit-apptituetest.page.scss'],
})
export class EditApptituetestPage implements OnInit {
  testName;
  duration;
  apptitutetest;
  instituteLoginDetails:any = [];
  instituteId:any=[];
  constructor(private apiservice:InstituteService,private router:Router) { }

  ngOnInit() {
    this.apptitutetest = JSON.parse(sessionStorage.getItem("appitutetest"));
    this.testName = this.apptitutetest['title'];
    this.duration = this.apptitutetest['durationInMinuts']
 
  }
  submit(){
    let req ={
      "id":this.apptitutetest['id'],
      "title":this.testName,
      "durationInMinuts": this.duration,
    }
    this.apiservice.update(req).subscribe(
      data =>{
        this.router.navigate(['/apptitude-test'])
      },
      error =>{

      }
    )

  }
}
