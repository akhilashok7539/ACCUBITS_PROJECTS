import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { DataServiceService } from 'src/app/shared/service/data-service.service';


@Component({
  selector: 'app-competition-details-row',
  templateUrl: './competition-details-row.component.html',
  styleUrls: ['./competition-details-row.component.scss']
})
export class CompetitionDetailsRowComponent implements OnInit {
  @Input() joined;
  @Input() item;
  @Input() activeTab;
  selectedUsers;
  is_login = localStorage.getItem('userName');
  showUser = false;
  constructor(public router: Router,public dataService:DataServiceService) { }

  ngOnInit(): void {

  }

  viewGame(item){
    localStorage.setItem('go_to_tab','true')
    this.router.navigate(["competition/details/"+ item.guid]);
    localStorage.setItem('competition_view_active_index' , '1');
  }
  showPlayers(item){
    this.selectedUsers = item.competitionPlayers;
    this.showUser = true;
  }
  closePop(){
    this.showUser = false;
  }
  onExistingplayerNAvigate(item){
    localStorage.setItem('go_to_tab','true');
    this.router.navigateByUrl('/competition/betting/' +item.guid);
    localStorage.setItem('competition_bet_active_index','1')
  }
  shareToFeed(item){
    this.dataService.toShareCompetition(item.guid,this.activeTab);
    this.router.navigateByUrl('/feed');
  }
  getcompetionId(id)
{
  if(id === '926736617' || id === '736186492')
  {
    return true;
  }
  else
  {
    return false;
  }
}
getcheckvaluelessthan(value)
{
  if(value<19)
  {
    return true;
  }
  else
  {
    return false;
  }
}
}
