import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteService } from 'src/app/_services/institute.service';
import { ToasterService } from 'src/app/_services/toaster.service';

@Component({
  selector: 'app-view-questions-apptitude',
  templateUrl: './view-questions-apptitude.page.html',
  styleUrls: ['./view-questions-apptitude.page.scss'],
})
export class ViewQuestionsApptitudePage implements OnInit {
  quesitions: any = [];
  questionId;
  questionsList: any = [];
  correctanswser;
  option1;
  option2;
  option3;
  option4;
  questionName;
  constructor(private instituteservice: InstituteService, private router: Router, private toaster: ToasterService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.quesitions = JSON.parse(sessionStorage.getItem("view-apptitude-questions"));
    this.questionId = this.quesitions['id'];
    this.getQuestionsById();
  }
  getQuestionsById() {
    this.instituteservice.getallQuestions(this.questionId).subscribe(
      data => {
        this.questionsList = data['data']
      },
      error => {

      }
    )
  }
  submit() {
    console.log(this.correctanswser);
    if (this.correctanswser == undefined) {
      this.toaster.optionCheck()
    } else {
      let req = {
        "correctOption": this.correctanswser,
        "option1": this.option1,
        "option2": this.option2,
        "option3": this.option3,
        "option4": this.option4,
        "question": this.questionName

      }
       this.instituteservice.addquestions(this.questionId,req).subscribe(
      data =>{
        this.getQuestionsById();
        this.correctanswser="";
        this.option1="";
        this.option2="";
        this.option3="";
        this.option4="";
        this.questionName="";
      },
      error =>{

      }
    )
    }


   
  }
}
