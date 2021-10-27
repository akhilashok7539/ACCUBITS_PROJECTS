import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-paymentsection-detailed',
  templateUrl: './paymentsection-detailed.page.html',
  styleUrls: ['./paymentsection-detailed.page.scss'],
})
export class PaymentsectionDetailedPage implements OnInit {

  constructor(private model:ModalController) { }

  ngOnInit() {
  }
  close(){
    this.model.dismiss();
  }
}
