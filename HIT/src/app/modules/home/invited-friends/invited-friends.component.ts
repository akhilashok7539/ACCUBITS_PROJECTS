import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-invited-friends',
  templateUrl: './invited-friends.component.html',
  styleUrls: ['./invited-friends.component.scss']
})
export class InvitedFriendsComponent implements OnInit {
  selectedFriends = [];
  @Output() selectedId = new EventEmitter<any>();
  @Output() closePop = new EventEmitter<any>();
  @Input() listedFriendsData;
  constructor() { }

  ngOnInit(): void {
    this.selectedFriends = this.listedFriendsData;
  }
  removeFriend(i){
    this.selectedId.emit({ data: i });
    if(this.selectedFriends.length===0){
      this.closePop.emit();
    }
  }
  closePopup(){
    this.closePop.emit();
  }

}
