import { Component, OnInit} from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { Router, ActivatedRoute  } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-competition-landing-all-competition',
  templateUrl: './competition-landing-all-competition.component.html',
  styleUrls: ['./competition-landing-all-competition.component.scss']
})
export class CompetitionLandingAllCompetitionComponent implements OnInit {
  showTrending = true;
  myCompetition = [];
  type = 'All';
  activeTabMain=1;
  type_value = null;
  typeDrop = false;
  liveFilter = false;
  popularity = false;
  sort_entryfee = false;
  sort_prize = false;
  trending = false;
  trendingCompetition;
  p = 1;
  total = 0;
  limit = 10;
  dataLimitTrending = 10;
  dataCountTrending = 0;
  constructor(private service: ApiService,
    public route: ActivatedRoute,
    private router: Router) { }
  filter  = 'Filter';
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params.list){
        this.filter = 'Most Trending';
        this.popularity = false;
        this.trending = true;
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
      pageNo:this.p
    };
    let urlParams = new URLSearchParams();
    for (let key of Object.keys(paramsData)) {
      urlParams.set(key, paramsData[key])
    }
    var url = '';
    url=`/v1/competition/live/list?${urlParams.toString()}`;
    if(this.type_value !== null && this.type_value !== undefined){
    url += `&competitionType=`+this.type_value;
    }
    if(this.trending){
      url += `&trending=`+'true';
    } 
    if(this.popularity){
      url += `&popularity=`+'true';
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
  swapTrending(){
    this.showTrending = !this.showTrending;
  }
  // loadMoreData() {
  //   this.dataLimit = this.dataLimit + 10;
  //   this.getMyCompetition();
  // }
  paginateList(e) {
    this.p = e;
    this.getMyCompetition();
  }

  viewGame(item){
    localStorage.setItem('go_to_tab','true')
    this.router.navigateByUrl('/competition/details/' + item.guid)
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
    this.liveFilter = !this.liveFilter
  }
}
