import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-redeem-confirm-popup',
  templateUrl: './redeem-confirm-popup.component.html',
  styleUrls: ['./redeem-confirm-popup.component.scss']
})
export class RedeemConfirmPopupComponent implements OnInit {
  @Output() selectedAction = new EventEmitter<any>();
  @Input() kycStatus;
  constructor() { }

  ngOnInit(): void {
  }
  popupAction(action){
    this.selectedAction.emit(action)
  }

}
