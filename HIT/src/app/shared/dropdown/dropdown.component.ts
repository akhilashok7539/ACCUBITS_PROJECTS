import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() dropdownData;
  @Output() selectedId = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  passIdToParent(i){
    this.selectedId.emit({ data: i });
  }

}
