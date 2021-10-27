import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, IonSlides, ModalController } from '@ionic/angular';
import { ApplycoursePage } from '../applycourse/applycourse.page';
import { FiltermodelPage } from '../filtermodel/filtermodel.page';
import { SuccessmodelPage } from '../successmodel/successmodel.page';

@Component({
  selector: 'app-detailedview',
  templateUrl: './detailedview.page.html',
  styleUrls: ['./detailedview.page.scss'],
})
export class DetailedviewPage implements OnInit {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;
  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 1.8,
    // autoplay: true
  };
  dissmissedStatus =false;
  constructor(public ModalController: ModalController ) {
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 995,
          course: "CSE",
          duration:"2 year"
        },
        {
          id: 925,
          course: "BTECH",
          duration:"4 year"
        },
        {
          id: 940,
          course: "MTECH",
          duration:"2 year"
        },
        {
          id: 943,
          course: "MBA",
          duration:"2 year"
        },

      ]
    };
   }

  ngOnInit() {
  }
  clicktoapply(){
    this.presentActionSheet();
  }
  async presentActionSheet() {
    // const actionSheet = await this.actionSheetController.create({
    //   header: 'Confirm the application Details',
    //   cssClass: 'my-custom-class',
      
    //   ]
    // });
    // await actionSheet.present();
    const mod = await this.ModalController.create({
      component: ApplycoursePage,
      cssClass: 'small-modal',
      backdropDismiss: true
  });
  await mod.present()
  const { data } = await mod.onWillDismiss();
  console.log(data);
  this.dissmissedStatus = data.dismissed;
  if(this.dissmissedStatus == true)
  {
    this.courseApplicedSuccess();
  }
  }
  async courseApplicedSuccess(){
    const mod = await this.ModalController.create({
      component: SuccessmodelPage,
      cssClass: 'success-modal',
      backdropDismiss: true
    });
  await mod.present()
  }
}
// buttons: [{
//   text: 'Delete',
//   role: 'destructive',
//   icon: 'trash',
//   handler: () => {
//     console.log('Delete clicked');
//   }
// }, {
//   text: 'Share',
//   icon: 'share',
//   handler: () => {
//     console.log('Share clicked');
//   }
// }, {
//   text: 'Play (open modal)',
//   icon: 'caret-forward-circle',
//   handler: () => {
//     console.log('Play clicked');
//   }
// }, {
//   text: 'Favorite',
//   icon: 'heart',
//   handler: () => {
//     console.log('Favorite clicked');
//   }
// }, {
//   text: 'Cancel',
//   icon: 'close',
//   role: 'cancel',
//   handler: () => {
//     console.log('Cancel clicked');
//   }
// }]