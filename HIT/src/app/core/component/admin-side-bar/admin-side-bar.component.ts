import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.scss'],
})
export class AdminSideBarComponent implements OnInit {
  adminType;
  constructor(
    private router:Router,
    public auth:AuthService, 
  ) { }

  ngOnInit(): void {
    this.adminType = localStorage.Admtype
  }

  logout() {
    this.auth.doLogoutAdmin();
   }
}

