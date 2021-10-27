import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cancel-popup',
  templateUrl: './cancel-popup.component.html',
  styleUrls: ['./cancel-popup.component.scss']
})
export class CancelPopupComponent implements OnInit {

  @Input() popupData;
  @Output() selectedAction = new EventEmitter<any>();
  processId;
  constructor() { }

  ngOnInit(): void {
    this.processId = this.popupData.id;
  }

  popupAction(e){
    this.selectedAction.emit(e);
  }

}
