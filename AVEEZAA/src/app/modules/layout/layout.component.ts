import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  side_nav_status = true;
  constructor() { }

  ngOnInit(): void {
  }
  menuChange() {
    this.side_nav_status = !this.side_nav_status;
  }
}
