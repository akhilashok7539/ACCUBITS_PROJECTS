import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-applycourse',
  templateUrl: './applycourse.page.html',
  styleUrls: ['./applycourse.page.scss'],
})
export class ApplycoursePage implements OnInit {

  constructor(private modelcontrolder:ModalController) { }

  ngOnInit() {
  }
  apply()
  {
    this.modelcontrolder.dismiss({
      'dismissed': true
    });
  }
}
