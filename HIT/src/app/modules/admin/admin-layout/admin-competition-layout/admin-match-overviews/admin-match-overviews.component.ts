import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../../../core/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-match-overviews',
  templateUrl: './admin-match-overviews.component.html',
  styleUrls: ['./admin-match-overviews.component.scss']
})
export class AdminMatchOverviewsComponent implements OnInit {
  @Input() competition_detail;
  @Input() competition_days;
  constructor(
    public route: ActivatedRoute,
    private service: ApiService,
    private _location: Location,
  ) {}

  ngOnInit(): void {
  }

  onClick() {
    this._location.back();
}
}

