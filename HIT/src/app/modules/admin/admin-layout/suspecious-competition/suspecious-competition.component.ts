import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { CommonService } from '../../../../core/service/common.service';

@Component({
  selector: 'app-suspecious-competition',
  templateUrl: './suspecious-competition.component.html',
  styleUrls: ['./suspecious-competition.component.scss']
})
export class SuspeciousCompetitionComponent implements OnInit {
  allCompetition=[];
  p = 1;
  total = 0;
  limit = 10;
  constructor(private service: ApiService,
    public commonService: CommonService) { }

  ngOnInit(): void {
    this.getCompetition();
  }
  getCompetition(){
    let apiParams = {
      pageLimit: this.limit,
      pageNo: this.p,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/admin/competitions/suspicious?' + params).subscribe((response) => {
      this.allCompetition = response.data.rows;
      this.total = response.data.totalCount;
    });
  }
  paginateGames(e) {
    this.p = e;
    this.getCompetition();
  }

}
