import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-filter-option',
  templateUrl: './table-filter-option.component.html',
  styleUrls: ['./table-filter-option.component.scss']
})
export class TableFilterOptionComponent implements OnInit {
  @Output() onCancel = new EventEmitter<any>();
  @Output() onSubmitFIlter = new EventEmitter<any>();
  @Input() filterArrayDetail;
  test_data = [1,1,1,1,1,1,1,1,1,1]
  constructor() { }

  ngOnInit(): void {
  }
  closeFIlterDropdown(event): void {
    if (event) {
     this.onCancel.emit()
    }
  }
  onSubmitFIlterClick(){
    this.onCancel.emit()
    this.onSubmitFIlter.emit(this.filterArrayDetail);
  }
}
