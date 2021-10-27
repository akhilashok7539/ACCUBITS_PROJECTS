import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competition-players-pop',
  templateUrl: './competition-players-pop.component.html',
  styleUrls: ['./competition-players-pop.component.scss']
})
export class CompetitionPlayersPopComponent implements OnInit {
  @Input() userData;
  @Output() onClosePop = new EventEmitter();
  envurl = '';
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.envurl = environment.api_url;
  }
  closeUsers(){
    this.onClosePop.emit();
  }
  onViewProfile(data) {    
    this.router.navigateByUrl('/feed/profile?user=' + data.user.guid)
  }

}
