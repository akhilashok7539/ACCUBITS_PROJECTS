import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { ToastrService } from 'ngx-toastr';
declare let fbq:Function;
declare global {
  interface Window { dataLayer: any; }
}
@Component({
  selector: 'app-competition-betting-popup',
  templateUrl: './competition-betting-popup.component.html',
  styleUrls: ['./competition-betting-popup.component.scss']
})
export class CompetitionBettingPopupComponent implements OnInit {
  @Input() competition_detail;
  @Output() onClose = new EventEmitter;
  is_login = localStorage.getItem('userName');

  constructor(
    private router : Router, 
    private service:ApiService,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
    if(this.is_login === null){
      this.router.navigateByUrl('/user?guid='+ this.competition_detail.guid)
      localStorage.setItem('navigate_to_competetion',this.competition_detail.guid)
    }
  }

  closePopup(){
    this.onClose.emit();
  }
  onView(){
    this.onClose.emit();  
    localStorage.setItem('go_to_home','true')
    this.router.navigateByUrl('/competition/details/' + this.competition_detail.guid)
  }
  onNavigate(){
    this.onClose.emit();
    // this.router.navigateByUrl('/competition/betting/' + '29931613-a497-40e6-b76c-6c7e4c8b53fb')
    const datas = {
      'referenceId':this.competition_detail.guid,
    }
    this.service.httpPost(`/v1/competition/join`,datas).subscribe((response) => {

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event' : 'joined_competition',
        'competitionName': this.competition_detail.name,
	      'amount' : this.competition_detail.entryCostInUSD * this.competition_detail.conversionRate,
        'currency': this.competition_detail.conversionCurrency
      });
      if(localStorage.getItem('go_to_home_page')){
       this.router.navigateByUrl('/competition/betting/' + this.competition_detail.guid)
       localStorage.removeItem('go_to_home_page')
      } else {
        localStorage.setItem('navigate_to_competetion',this.competition_detail.guid)
        this.router.navigateByUrl('/')
      }
      
    },
    (error) => {
      this.toastr.error(error.error.message);
    });
  }
}
