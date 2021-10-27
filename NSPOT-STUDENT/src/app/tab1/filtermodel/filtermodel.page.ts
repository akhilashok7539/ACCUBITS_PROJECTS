import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filtermodel',
  templateUrl: './filtermodel.page.html',
  styleUrls: ['./filtermodel.page.scss'],
})
export class FiltermodelPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  dismiss() {

    this.modalController.dismiss();
  }
}
