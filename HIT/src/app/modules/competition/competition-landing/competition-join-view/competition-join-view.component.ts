import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import * as moment from 'moment';
import { CountdownComponent } from "ngx-countdown";
import { Router } from '@angular/router';

@Component({
  selector: 'app-competition-join-view',
  templateUrl: './competition-join-view.component.html',
  styleUrls: ['./competition-join-view.component.scss']
})
export class CompetitionJoinViewComponent implements OnInit {
  showTrending = true;
  myCompetition = [];
  joined = true;
  type = 'All';
  activeTabMain = 7;
  type_value = null;
  typeDrop = false;
  liveFilter = false;
  popularity = false;
  trending = false;
  trendingCompetition;
  p = 1;
  total = 0;
  limit = 10;
  dataLimitTrending = 10;
  dataCountTrending = 0;
  constructor(private service: ApiService,private router: Router) { }
  filter = 'Filter';
  ngOnInit(): void {
    this.getMyCompetition();
  }
  selectFilter(index) {
    if (index === 1) {
      this.filter = 'Popularity';
      this.popularity = true;
      this.trending = false;
    } else if (index === 2) {
      this.filter = 'Most Trending';
      this.popularity = false;
      this.trending = true;
    } else {
      this.filter = 'Filter';
      this.popularity = false;
      this.trending = false;
    }
    this.getMyCompetition();
  }
  getMyCompetitionFilter(type){
    this.p=1;
    this.getMyCompetition(type)
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


  getMyCompetition(type?, str?) {
    if (type !== null && type !== undefined) {
      this.type_value = type;
    }
    if (type === 1) {
      this.type = 'One time';
    } else if (type === 2) {
      this.type = 'Championship';
    } else if (type === 0) {
      this.type = 'All'
      this.type_value = null;
    }
    this.typeDrop = false;
    this.liveFilter = false
    let paramsData = {
      pageLimit: this.limit,
      pageNo: this.p
    };
    let urlParams = new URLSearchParams();
    for (let key of Object.keys(paramsData)) {
      urlParams.set(key, paramsData[key])
    }
    var url = '';
    url = `/v1/competition/ongoing/list?${urlParams.toString()}`;
    if (this.type_value !== null && this.type_value !== undefined) {
      url += `&competitionType=` + this.type_value;
    }
    if (this.trending) {
      url += `&trending=` + 'true';
    }
    if (this.popularity) {
      url += `&popularity=` + 'true';
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
  swapTrending() {
    this.showTrending = !this.showTrending;
  }
  paginateList(e) {
    this.p = e;
    this.getMyCompetition();
  }

  viewGame(item) {
    localStorage.setItem('go_to_tab', 'true')
    this.router.navigateByUrl('/competition/details/' + item.guid)
  }

  closeTypeDropdown(event): void {
    if (event) {
      if (this.typeDrop) {
        this.typeDrop = false;
      }
    }
  }
  closeFilterDropdown(event): void {
    if (event) {
      if (this.liveFilter) {
        this.liveFilter = false;
      }
    }
  }
  onSelecttype() {
    window.scrollTo({
      top: 230,
      behavior: 'smooth'
    });
    this.liveFilter = false
    if (this.typeDrop === false) {
      this.typeDrop = true;
    } else {
      this.typeDrop = false;
    }
  }
}

