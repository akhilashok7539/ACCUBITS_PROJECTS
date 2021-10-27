import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-terms-of-use-pop',
  templateUrl: './terms-of-use-pop.component.html',
  styleUrls: ['./terms-of-use-pop.component.scss']
})
export class TermsOfUsePopComponent implements OnInit {
  @Output() closeTermsPopup = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  closePop(){
    this.closeTermsPopup.emit();
  }
}
