import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/service/api.service';
import { CommonService } from '../../service/common.service';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  getSearchResult = new Subject<string>();
  subscribeSearch: Subscription;
  searchValue = '';
  searchResults = [];
  searchLength=0;
  urlToNavigate;
  filterType = 1;
  filterArray = [
    {
      id: '1',
      name: 'Competition'
    },
    {
      id: '2',
      name: 'Players'
    }
  ]

  constructor(private service: ApiService,
    private commonService: CommonService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.subscribeSearch = this.getSearchResult.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.getSearchData(value);
      });
      if(localStorage.getItem("lang")=== 'en')
      {
        this.filterArray = [
          {
            id: '1',
            name: 'Competitions'
          },
          {
            id: '2',
            name: 'Players'
          }
        ]
      }
      if(localStorage.getItem("lang")=== 'por')
      {
        this.filterArray = [
          {
            id: '1',
            name: 'Ligas'
          },
          {
            id: '2',
            name: 'Usuários'
          }
        ]
      }
      
  }
  ngOnDestroy(): void {
    if(this.subscribeSearch){
      this.subscribeSearch.unsubscribe();
    }
  }
  onClose() {
    this.searchValue = '';
    this.close.emit();
  }
  getSearchData(text) {
    if (!text.replace(/\s/g, '').length) {
      this.searchResults = [];
      this.searchValue = '';
      this.searchLength = 0;
      return
    }
    this.searchValue = text;
      if (this.searchValue != '') {
        let apiParams = {
          term: this.searchValue,
          filterBy: this.filterType
        };
        const params = this.commonService.removeEmptyStringsData(apiParams);
        this.service.httpGet(`/v1/search/all?` + params).subscribe((response) => {
          this.searchResults = response.data.rows;
          this.searchLength = response.data.totalCount;
        });
      } else {
        this.searchResults = [];
        this.searchLength = 0;
      }
  }
  setCompetitionFilter(item) {
    this.filterType = item;
    this.searchResults = [];
    this.getSearchData(this.searchValue)
  }
  onSelect(item) {
    if (item.type === 1) {
      if (item.isPlayer === 0) {
        this.urlToNavigate = '/competition/details/' + item.guid;
      } else {
        this.urlToNavigate = '/competition/betting/' + item.guid;
      }
    }
    if (item.type === 2) {
      if (item.isRoundPlayer === 0 && item.isFullPlayer === 0) {
        this.urlToNavigate = '/competition/details/' + item.guid;
      } else {
        this.urlToNavigate = '/competition/betting/' + item.guid;
      }
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.urlToNavigate]);
    this.close.emit();
  }
  onSelectPlayer(item) {
    if(item.isloggedInUser==1){
      this.router.navigate(['/feed/profile']);
    }else{
      this.router.navigate(['/feed/profile'], { queryParams: { user: item.guid } });
    }
    this.close.emit();
  }
  checkTab(event) {
    if (event.target.value.length === 0 && event.which === 32) {
      event.preventDefault();
    }
  }
  sendRequest(data, e,ix) {
    var apiData = {
      userId: data.guid
    }
    this.service.httpPost(`/v1/feed/friend/request/send`, apiData).subscribe((response) => {
      this.toastr.success(response.message);
      this.searchResults[ix].isRequested=1;
    },
      (error) => {
        this.toastr.error(error.error.message);
      });
    e.stopPropagation();
  }
  alreadySent(e){
    this.toastr.success("Request already sent ");
    e.stopPropagation();
  }
}
