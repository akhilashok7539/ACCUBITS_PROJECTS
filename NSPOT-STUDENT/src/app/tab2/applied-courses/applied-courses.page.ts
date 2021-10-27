import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentsectionDetailedPage } from '../paymentsection-detailed/paymentsection-detailed.page';

@Component({
  selector: 'app-applied-courses',
  templateUrl: './applied-courses.page.html',
  styleUrls: ['./applied-courses.page.scss'],
})
export class AppliedCoursesPage implements OnInit {

  constructor(private modelcontroler:ModalController) { }

  ngOnInit() {
  }
  payfees(){
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modelcontroler.create({
      component: PaymentsectionDetailedPage,
      cssClass: 'payment-modal',
    });
   await modal.present();
  
  }
}
