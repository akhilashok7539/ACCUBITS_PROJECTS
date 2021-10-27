import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core/services';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Output("hamburger") hamburger: EventEmitter<any> = new EventEmitter();
  screenHeight;
  screenWidth;
  constructor(
    private router:Router,
    private auth:AuthenticationService,
  ) {}

  ngOnInit(): void {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if(this.screenWidth < 500){
      this.screenHeight = window.innerHeight + 'px';
    } 
  }
  logOut() {
    this.auth.doLogoutUser(); 
  }
  onHamburgerClick() {
    this.hamburger.next();
  }
}
