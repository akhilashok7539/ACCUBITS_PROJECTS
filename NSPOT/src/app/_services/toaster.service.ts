import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {


  constructor(private toastrcontroller:ToastController,private router:Router) { }
  userLogin()
  {
    this.toastrcontroller.create({
      message: 'Institute Login success!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  erroruserLogin(){
    this.toastrcontroller.create({
      message: 'Institute Login Failed!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  newCourseAdded() {
    this.toastrcontroller.create({
      message: 'Course Added!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  errornewCourseAdded() {
    this.toastrcontroller.create({
      message: 'Unablet to add new Course!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  feeInfoAdded() {
    this.toastrcontroller.create({
      message: 'Fees Info Added!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  errorfeeInfoAdded() {
    this.toastrcontroller.create({
      message: 'Unablet to fees info!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  eligibilityadded() {
    this.toastrcontroller.create({
      message: 'Eligibility Added!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  erroreligibilityaddedd() {
    this.toastrcontroller.create({
      message: 'Unablet to add Eligibility !',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
 joboppouttunityadded() {
    this.toastrcontroller.create({
      message: 'Job Oppourtunity Added!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  errorjoboppouttunityadded() {
    this.toastrcontroller.create({
      message: 'Unablet to add Job Oppourtunity !',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  optionCheck() {
    this.toastrcontroller.create({
      message: 'Please choose a option!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
}
