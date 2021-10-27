import { Component, OnInit } from '@angular/core';
import { ELocalNotificationTriggerUnit, ILocalNotificationActionType, LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';

declare let cordova: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notificationresposne;
  snoozebuttonclickstatus = false;
  constructor(private localnotification: LocalNotifications, private toastController: ToastController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.notificationresposne = JSON.parse(sessionStorage.getItem("notficationdata"));
    console.log(this.notificationresposne);
    
    this.snoozebuttonclickstatus =this.notificationresposne.actions[0].snoozeButtonclick;
    console.log(this.snoozebuttonclickstatus);
    this.localnotification.getAllScheduled()
      .catch(e => {
        console.log(e);

      })
    this.localnotification.getAllScheduled()
      .then(e => {
        console.log(e);

      })
    this.localnotification.getAll().then(e => {
      console.log(e);
    })

  }
  // snooze() {
  // console.log("clicked");


  // let myToast = this.toastController.create({
  //   message: 'Snoozed Event',
  //   cssClass: "toast-scheme ",
  //   duration: 2000
  // }).then((toastData) => {
  //   console.log(toastData);
  //   toastData.present();
  // });


  // this.localnotification.schedule({
  //   title: 'Design team meeting',
  //   //trigger: { in: 1, unit: 'hour' } // fire in one hour
  //   trigger: { in: 5, unit: ELocalNotificationTriggerUnit.MINUTE } //fire in 5 mins
  //   /*trigger: {
  //        every: {
  //            hour: 15, //3pm
  //            minute: 25, //3:25pm
  //        }
  //    }*/

  // });
  // }


  snooze() {
    let today = Date.now();
    let myToast = this.toastController.create({
      message: 'Snoozed Event',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
    this.localnotification.schedule({
      id:10,
      title: 'Snoozed event',
      text: 'Big Conference Room',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfXKe6Yfjr6rCtR6cMPJB8CqMAYWECDtDqH- ',
      attachments: ['http://placekitten.com/g/300/200'],
      data: { mydata: 'My hidden message this is' },
      foreground: true,
      actions: [
        { id: 'SNOOZE', title: 'SNOOZE', identifier: 'SNOOZE',snoozeButtonclick:'false'  }
      // firstAt: new Date(today),
        ],
      trigger: {at:new Date(today), in: 1, unit: ELocalNotificationTriggerUnit.MINUTE,count:5},
    
    })

  }


  snoozeevent()
  {
    // cordova.plugins.notification.local.on('SNOOZE', function (notification, eopts) {
    //   if (notification.actions[0].identifier === 'SNOOZE') {
    //     console.log("yes");
        
    //   }
    // });
    this.localnotification.on("SNOOZE").subscribe(
      data =>{
        console.log(data);
        
      }
    )
  }
  multitpletimes()
  {
    let localtime = new Date();
    for(let i=0;i<=3;i++)
    {
      
      var newId = this.notificationresposne.id + i;
      console.log("notfication id",newId);
      var nextime = moment(localtime).add(5, 'minutes').toDate();
      console.log("time for "+i+"index",nextime);
      localtime = nextime;
      this.localnotification.schedule({
        id: newId,
        title: this.notificationresposne.title,
        text: this.notificationresposne.text,
        foreground : true,
        trigger:{ at: nextime},
        priority: 2,
              actions: [
                { id: 'SNOOZE', title: 'SNOOZE', identifier: 'SNOOZE',snoozeButtonclick:true  }
                ],
        badge : 1
      })
      // console.log("REQUEST NOTIFICATIOSN",{
      //   id: newId,
      //   title: this.notificationresposne.title,
      //   text: this.notificationresposne.text,
      //   foreground : true,
      //   trigger:{ at: nextime},
      //   priority: 2,
      //   badge : 1
      // });
      
    }
    
  }
}
