import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-successmodel',
  templateUrl: './successmodel.page.html',
  styleUrls: ['./successmodel.page.scss'],
})
export class SuccessmodelPage implements OnInit {

  constructor(public modalController: ModalController ) {
  }

  ngOnInit() {
  }
  close(){
    this.modalController.dismiss()
  }
}
