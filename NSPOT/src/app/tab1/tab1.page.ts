import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private menuCtrl:MenuController) {}
  ngOnInit() {
    this.menuCtrl.enable(true);
    this.menuCtrl.swipeGesture(true);

  }
  ngAfterContentInit()  {
    this.menuCtrl.enable(true);
    this.menuCtrl.swipeGesture(true);
  }
  ngAfterViewInit() {
    this.menuCtrl.enable(true);
    this.menuCtrl.swipeGesture(true);

  }
  ngOnDestroy() {
    this.menuCtrl.enable(true);
    this.menuCtrl.swipeGesture(true);

  }
}
