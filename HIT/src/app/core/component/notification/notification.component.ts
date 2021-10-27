import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/service/api.service';
import { DataServiceService } from '../../../shared/service/data-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() notification;
  @Output() close_notfct = new EventEmitter<boolean>();
  @Output() addMore = new EventEmitter<any>();
  @Output() filterItem = new EventEmitter<any>();
  oncheck = false;
  notifType = 'unread';
  urlToNavigate;
  constructor(private router: Router, private service: ApiService, private dataService: DataServiceService) { }

  ngOnInit(): void {

  }

  closeNotification(event): void {
    if (event) {
      if (this.oncheck === true) {
        this.close_notfct.emit();
      }
    }
  }
  unSelect() {
    this.close_notfct.emit();
  }
  onScroll(event) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight - 20) {
      this.addMore.emit();
    }
  }
  onSelectCompetition(data) {
    if (data.type == 7 || data.type == 1) {
      this.urlToNavigate = '/competition/details/' + data.competition.guid;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([this.urlToNavigate]);
    }
    if (data.type == 8 || data.type == 10 || data.type == 11 || data.type == 12 || data.type == 13) {
      this.urlToNavigate = '/wallet'
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([this.urlToNavigate]);
    }
    if (data.type == 3) {
      this.urlToNavigate = '/competition/betting/' + data.competition.guid;
      this.dataService.showBettingTab(2);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([this.urlToNavigate]);
    }
    if (data.type == 2) {
      this.urlToNavigate = '/competition/betting/' + data.competition.guid;
      this.dataService.showBettingTab(2);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([this.urlToNavigate]);
    }
    if (data.type == 5) {
      //winer
      this.dataService.showBettingTab(3);
      this.urlToNavigate = '/competition/betting/' + data.competition.guid;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([this.urlToNavigate]);
    }
    if (data.type == 4) {
      //point
      this.dataService.showBettingTab(4);
      if (data.competition.type === 2) {
        this.router.navigate(['/competition/betting/' + data.competition.guid, { round: data.match.round }]);
      } else {
        this.router.navigate(['/competition/betting/' + data.competition.guid]);
      }
    }

    this.readNotification(data.id);
    this.close_notfct.emit();
  }
  viewProfile(item) {
    if (item.type == 6) {
      this.dataService.showFriends(4);
    } else {
      this.dataService.showFriends(2);
    }
    let currentUrl = '/feed/profile';
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    this.readNotification(item.id);
    this.close_notfct.emit();
  }
  readNotification(id) {
    this.service.httpPost(`/v1/notification/read?id=` + id, null).subscribe((response) => {
    });
  }
  filterNotification(data) {
    this.notifType = data;
    if (data == 'unread') {
      this.filterItem.emit(2);
    } else {
      this.filterItem.emit(1)
    }
  }
  getUnreadColot(status)
  {
    if(status === false)
    {
      return '#3eb983';
    }

    
  }
}
