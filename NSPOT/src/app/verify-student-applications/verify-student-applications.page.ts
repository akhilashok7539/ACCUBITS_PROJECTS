import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-student-applications',
  templateUrl: './verify-student-applications.page.html',
  styleUrls: ['./verify-student-applications.page.scss'],
})
export class VerifyStudentApplicationsPage implements OnInit {
  applicationtype = 'PreApplications';
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event)
  {
    console.log(event);
    
  }
}
