import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FiltermodelPage } from '../filtermodel/filtermodel.page';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.page.html',
  styleUrls: ['./searchlist.page.scss'],
})
export class SearchlistPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  model(){
    this.presentModal();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: FiltermodelPage,
      
    });
   await modal.present();
  
  }
}
