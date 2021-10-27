import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { CommonService } from '../../../../core/service/common.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-join-competition',
  templateUrl: './admin-join-competition.component.html',
  styleUrls: ['./admin-join-competition.component.scss']
})
export class AdminJoinCompetitionComponent implements OnInit {
  joinedCompetitionList = []; 
  userReferenceId=''
  p = 1;
  total = 0;
  limit = 10;

  constructor(private service: ApiService,
    public commonService: CommonService ,
    private router: Router,
    public route: ActivatedRoute,
    private toastr: ToastrService) { }

    ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params.user){
        this.userReferenceId = params.user
        this.getCompetition()
      }
    });
  }

  getCompetition(){
    let apiParams = {
      referenceId:this.userReferenceId,
      pageLimit: this.limit,
      pageNo: this.p,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/admin/user/joinedCompetitions?' + params).subscribe((response) => {
      this.joinedCompetitionList = response.data.rows;
      this.total = response.data.totalCount;
    });
  }
  paginateGames(e) {
    this.p = e;
    this.getCompetition();
  }
  viewGame(item){
    this.router.navigateByUrl('/admin/layout/competition-management/match/' + item.guid)
    localStorage.setItem('competition_view_active_index' , '1');
  }
}
