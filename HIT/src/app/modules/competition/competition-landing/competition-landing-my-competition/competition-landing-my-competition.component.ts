import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/core/service/common.service';
import { ApiService } from '../../../../core/service/api.service';


@Component({
  selector: 'app-competition-landing-my-competition',
  templateUrl: './competition-landing-my-competition.component.html',
  styleUrls: ['./competition-landing-my-competition.component.scss']
})
export class CompetitionLandingMyCompetitionComponent implements OnInit {
  myCompetition = [];
  my;
  p = 1;
  total = 0;
  limit = 10;
  typeDrop = false;
  popularity = false;
  sort_entryfee = false;
  sort_prize = false;
  trending = false;
  liveFilter = false;
  activeTabMain=3;
  type = 'All';
  filter  = 'Filter';
  type_value = null;
  ownProfile=true;
  userId='';
  constructor(private service: ApiService,
    private commonService:CommonService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params.user){
        this.ownProfile = false;
        this.userId = params.user;
      }
    });
    this.getMyCompetition();
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
  getfilterValue()
  {
    if(localStorage.getItem('lang') === 'en')
    {
      return this.filter = 'Sort';
    }
    if(localStorage.getItem('lang') === 'por')
    {
      return this.filter = 'Ordenar ';
    }
  }
  selectFilter(index){
    if(index ===1) {
      this.filter = 'Popularity';
      this.popularity = true;
      this.trending = false;
      this.sort_prize = false;
      this.sort_entryfee = false;
    } else if(index ===2) {
      this.filter = 'Most Trending';
      this.popularity = false;
      this.trending = true;
      this.sort_prize = false;
      this.sort_entryfee = false;
    }  else if(index ===4) {
      this.filter = 'Sort By Prize';
      this.popularity = false;
      this.trending = false;
      this.sort_prize = true;
      this.sort_entryfee = false;
    } else if(index ===3) {
      this.filter = 'Sort By EntryFee';
      this.popularity = false;
      this.trending = false;
      this.sort_prize = false;
      this.sort_entryfee = true;
    }else {
      this.filter = 'Filter';
      this.popularity = false;
      this.trending = false;
      this.sort_prize = false;
      this.sort_entryfee = false;
    }
    this.p=1;
    this.getMyCompetition();
  }
  getMyCompetitionFilter(type){
    this.p=1;
    this.getMyCompetition(type)
  }
  getMyCompetition(type?,str?){
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
    this.typeDrop=false; 
    this.liveFilter=false

    let paramsData = {
      pageLimit: this.limit,
      page:this.p
    };
    let urlParams = new URLSearchParams();
    for (let key of Object.keys(paramsData)) {
      urlParams.set(key, paramsData[key])
    }
    var url = '';
    url=`/v1/competition/hosted/list?${urlParams.toString()}`;
    if(this.type_value !== null && this.type_value !== undefined){
    url += `&type=`+this.type_value;
    }
    if(this.trending){
      url += `&trending=`+'true';
    } 
    if(this.popularity){
      url += `&popularity=`+'true';
    }
    if(!this.ownProfile){
      url += `&userId=`+this.userId;
    }
    if(this.sort_entryfee){
      url += `&orderByEntryFee=`+'true';
    }
    if(this.sort_prize){
      url += `&orderByPrize=`+'true';
    }
    this.service.httpGet(url).subscribe((response) => {
      const dataFromApi = response.data.rows;
      this.total = response.data.totalCount;
      dataFromApi.map((x) => {
        if (x.name) {
          x.head = x.name.split("@");
        }
        this.myCompetition = dataFromApi;
      });
    });
  }
  paginateList(e) {
    this.p = e;
    this.getMyCompetition();
  }
  closeTypeDropdown(event): void {
    if (event) {
      if (this.typeDrop) {
        this.typeDrop = false;
      }
    }
  }
  closeFilterDropdown(event):void{
    if (event) {
      if (this.liveFilter) {
        this.liveFilter = false;
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
  filterDrop(){
    window.scrollTo({
      top: 230,
      behavior: 'smooth'
    });
    this.liveFilter=!this.liveFilter
  }
}
