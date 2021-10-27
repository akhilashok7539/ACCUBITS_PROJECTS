import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-privacy-pop',
  templateUrl: './privacy-pop.component.html',
  styleUrls: ['./privacy-pop.component.scss']
})
export class PrivacyPopComponent implements OnInit {
  @Output() closePrivacyPopup = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  closePop(){
    this.closePrivacyPopup.emit();
  }

}
