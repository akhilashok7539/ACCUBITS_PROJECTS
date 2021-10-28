import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  applicationtype = 'PreApplications';



  constructor(private menu: MenuController) { }
  segmentChanged(event)
  {
    console.log(event);
    
  }
  openEnd() {
    this.menu.open();
  }
  ngOnInit() {
    this.menu.enable(true);
    this.menu.swipeGesture(true);

  }
  ngAfterContentInit()  {
    this.menu.enable(true);
    this.menu.swipeGesture(true);
  }
  ngAfterViewInit() {
    this.menu.enable(true);
    this.menu.swipeGesture(true);

  }
  ngOnDestroy() {
    this.menu.enable(true);
    this.menu.swipeGesture(true);

  }
}
