import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suspicious-management',
  templateUrl: './suspicious-management.component.html',
  styleUrls: ['./suspicious-management.component.scss']
})
export class SuspiciousManagementComponent implements OnInit {
  transactionsList=['Transactions','Users','Competitions'];
  selectedTransaction='Transactions'

  constructor() { }

  ngOnInit(): void {
  }

  selectType(i){
    this.selectedTransaction = i;
  }

}
