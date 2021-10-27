import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { CommonService } from '../../../core/service/common.service';

@Component({
  selector: 'app-choose-competition',
  templateUrl: './choose-competition.component.html',
  styleUrls: ['./choose-competition.component.scss']
})
export class ChooseCompetitionComponent implements OnInit {

  constructor(public router: Router,public commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.removeCompetitionData();
  }

  goToCreateCompetition(type){
    localStorage.setItem('type',type)
    this.router.navigate(['/create-competition']);
  }

}
