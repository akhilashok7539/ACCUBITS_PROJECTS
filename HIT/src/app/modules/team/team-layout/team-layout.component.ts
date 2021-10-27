import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-layout',
  templateUrl: './team-layout.component.html',
  styleUrls: ['./team-layout.component.scss']
})
export class TeamLayoutComponent implements OnInit {
  isactive = 'Squad';
  team_id;
  constructor(
    private route:ActivatedRoute
  ) {
    this.team_id =this.route.snapshot.paramMap.get("id");
    localStorage.setItem('navigate_to_competetion', null)
   }

  ngOnInit(): void {
  }
  onClick(data) {
    this.isactive  = data;
  }
}
