import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { ApiService } from '../../../../core/service/api.service';
import { environment } from '../../../../../environments/environment';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-competition-landing-history',
  templateUrl: './competition-landing-history.component.html',
  styleUrls: ['./competition-landing-history.component.scss']
})
export class CompetitionLandingHistoryComponent implements OnInit {
  competitionHistory = [];
  p = 1;
  total = 0;
  limit = 10;
  type_value = null;
  type ='All';
  envurl = '';
  typeDrop = false;
  liveFilter = false;
  selectedUsers
  showUser = false;
  constructor(private service: ApiService,public dataService:DataServiceService,public router: Router) { }
  

  ngOnInit(): void {
    this.getCompetitionHistory();
    this.envurl = environment.api_url;
  }
  gettypevalue()
  {
    if(localStorage.getItem('lang') === 'en')
    {
      return this.type = 'All';
    }
    if(localStorage.getItem('lang') === 'por')
    {
      return this.type = 'Todas ';
    }
  }
  viewGame(item){
    localStorage.setItem('go_to_tab','true')
    // this.dataService.toShareCompetition(item.guid,6)
    this.router.navigate(["competition/details/"+ item.guid]);
    localStorage.setItem('competition_view_active_index' , '1');
  }
  paginateList(e) {
    this.p = e;
    this.getCompetitionHistory();
  }
  getMyCompetitionFilter(type){
    this.p=1;
    this.getCompetitionHistory(type)
  }

  getCompetitionHistory(type?,str?){
    if(type !== null && type !== undefined){
      this.type_value = type;
    }
    if(type === 1) {
      this.type = 'One time';
    } else if( type === 2) {
      this.type = 'Championship';
    } else if( type === 0) {
      this.type = 'All'
      this.type_value = null;
    }
    this.typeDrop = false;
    let paramsData = {
      pageLimit: this.limit,
      pageNo: this.p
    };
    let urlParams = new URLSearchParams();
    for (let key of Object.keys(paramsData)) {
      urlParams.set(key, paramsData[key])
    }
    var url = '';
    if(this.type_value){
      url=`/v1/competition/history?${urlParams.toString()}`+`&competitionType=`+this.type_value;
    }else{
      url = `/v1/competition/history?${urlParams.toString()}`;
    }
    this.service.httpGet(url).subscribe((response) => {
      const dataFromApi = response.data.rows;
      this.total = response.data.totalCount;
      dataFromApi.map((x) => {
        if (x.name) {
          x.head = x.name.split("@");
        }
        this.competitionHistory = dataFromApi;
      });
    });
  }
  closeTypeDropdown(event): void {
    if (event) {
      if (this.typeDrop) {
        this.typeDrop = false;
      }
    }
  }
  onSelecttype(){
    window.scrollTo({
      top: 230,
      behavior: 'smooth'
    });
    this.liveFilter = false
    if(this.typeDrop === false){
      this.typeDrop = true;
    }else {
      this.typeDrop = false;
    }
  }
  onExistingplayerNAvigate(item){
    localStorage.setItem('go_to_tab','true')
    // this.dataService.toShareCompetition(item.guid,6)
    this.router.navigateByUrl('/competition/betting/' +item.guid) 
    localStorage.setItem('competition_bet_active_index','1')
  }
  showPlayers(item){
    this.selectedUsers = item.competitionPlayers;
    this.showUser = true;
  }
  closePop(){
    this.showUser = false;
  }
}
