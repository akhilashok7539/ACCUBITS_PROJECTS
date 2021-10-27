import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';
import { Platform } from '@ionic/angular';
import * as moment from 'moment/moment';
declare var cordova: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  clickSub: any;
  tim2;
  date;
  year;
  month;
  day;
  olderDatetime;
  datenew;
  notify = false;
  constructor(private localNotifications: LocalNotifications,private router:Router,private openNativeSettings: OpenNativeSettings,
    private platform:Platform) {

    this.platform.ready().then((readySource) =>{
      this.localNotifications.on('click').subscribe(
        notifications =>{
          console.log(notifications);
          sessionStorage.setItem("notficationdata",JSON.stringify(notifications))
          this.router.navigate(['/notifications'])
        }
      )
    })
    
  }
  ionViewWillEnter()
  {
    if(sessionStorage.getItem("mutenotification"))
    {
      this.notify = JSON.parse(sessionStorage.getItem("mutenotification"))
    }
    if(this.notify === true)
    {
      this.localNotifications.cancelAll();
    }
  
  }
  simpleNotif() {
    this.localNotifications.schedule({
      id: 1,
      text: 'Single Local Notification',
      icon: 'http://example.com/icon.png',
      trigger: { at: new Date(new Date(this.tim2) )},
      data: { secret: 'secret' }
    });
  }


  getdate(date)
  {
    console.log(date.target.value);
    this.tim2 =date.target.value;
    console.log(this.tim2);
    var now = new Date();
    // Sun Jan 22 2017 17:12:18 GMT+0200 ...
    var olderDate = moment(this.tim2).subtract(15, 'minutes').toDate();
    console.log(olderDate);
    this.olderDatetime=olderDate;
    
    
  }
  getdatetime(date)
  {
    console.log(date.target.value);
    this.datenew=date.target.value;
    let value = date.target.value.split('T')[0];
    let splitdate = value.split('-');
    console.log(splitdate);
    this.year = splitdate[0];
    this.month = splitdate[1];
    this.day = splitdate[2];
  }
  scheduleNotification() {
    console.log("toggle status",this.notify);
    
    if( this.notify === true)
    {
      this.localNotifications.cancelAll();
    }
    else{
      this.localNotifications.schedule({
        id:10,
        title: 'Attention',
        text: '4:15 - 5:15 PM\nBig Conference Room',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfXKe6Yfjr6rCtR6cMPJB8CqMAYWECDtDqH- ',
        attachments: ['http://placekitten.com/g/300/200'],
        data: { mydata: 'My hidden message this is' },
        actions: [ { id: 'SNOOZE', title: 'SNOOZE', identifier: 'SNOOZE',snoozeButtonclick:'false' }  ],
        trigger: { at: new Date(new Date(this.olderDatetime) )},
      });
      this.localNotifications.schedule({
        id: 2,
        title: 'Attention',
        text: '4:15 - 5:15 PM\nBig Conference Room',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfXKe6Yfjr6rCtR6cMPJB8CqMAYWECDtDqH- ',
        attachments: ['http://placekitten.com/g/300/200'],
        data: { mydata: 'My hidden message this is' },
      
        actions: [ { id: 'SNOOZE', title: 'SNOOZE', identifier: 'SNOOZE',snoozeButtonclick:'false'  }  ],
        trigger: { at: new Date(new Date(this.datenew) )},
      });
    }
    // this.localNotifications.schedule({
    //   id: this.tim2,
    //   title: 'Attention',
    //   text: '4:15 - 5:15 PM\nBig Conference Room',
    //   icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfXKe6Yfjr6rCtR6cMPJB8CqMAYWECDtDqH- ',
    //   attachments: ['http://placekitten.com/g/300/200'],
    //   data: { mydata: 'My hidden message this is' },
    //   trigger: { at: new Date(new Date(this.olderDatetime) )},
    // });
    // this.localNotifications.schedule({
    //   id: 2,
    //   title: 'Attention',
    //   text: '4:15 - 5:15 PM\nBig Conference Room',
    //   icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfXKe6Yfjr6rCtR6cMPJB8CqMAYWECDtDqH- ',
    //   attachments: ['http://placekitten.com/g/300/200'],
    //   data: { mydata: 'My hidden message this is' },
    //   trigger: { at: new Date(new Date(this.datenew) )},
    // });
  }
  update()
  {
    if(this.notify === false)
    {
      this.notify = true;
      sessionStorage.setItem("mutenotification",JSON.stringify(this.notify))
      this.localNotifications.cancelAll();
    }
    else
    {
      this.notify = false;
      sessionStorage.setItem("mutenotification",JSON.stringify(this.notify))

    }
    // this.notify = 
  }
  turnoffnotifications()
  {
    // this.platform.ready().then(() => {
    //   cordova.plugins.notification.local.on('stop', (res) => {
    //     console.log(res);
        
    //     cordova.plugins.notification.local.cancel(1, () => {}, {});
    //   });
    // });
    // this.localNotifications.requestPermission().then(
    //   (res)=>{
    //     console.log(res);
        
    //   },
    
    // ).catch(
    //   (err) =>{
    //     console.log(err);
    //   }
    // )
    // this.localNotifications.hasPermission().then(
    //   (res)=>{
    //     console.log(res);
        
    //   },
    
    // ).catch(
    //   (err) =>{
    //     console.log(err);
    //   }
    // )
    this.openNativeSettings.open("application_details").then(
      res =>{
        console.log("appsetting");
        
      }
    )

  }
  turnONnotifications()
  {
    this.platform.ready().then(() => {
      cordova.plugins.notification.local.on('start', () => {
       
      });
    });
  }
}

// trigger every day at same time
// trigger: { every: 'day', hour: 10, minute: 30 }

// trigger: { every: { month: 10, day: 27, hour: 9, minute: 0 } }
// let year = new Date().getFullYear();
// let month = new Date().getMonth();
// let day = new Date().getDate();

//  this.tim2 = new Date(year, month, day, 1, 32, 0, 0);
//     console.log(this.tim2);
//     this.localNotifications.schedule({
//       id: 1,
//       foreground: true,
//       text: 'Single Local Notification',
//       icon: 'http://example.com/icon.png',
//       trigger: { at: new Date(new Date(this.tim2) )},
//       data: { secret: 'secret' }
//     });


// this.fcm.onNotification().subscribe(data => {
//   if(data.wasTapped){
//     console.log("Received in background");
//   } else {
//     console.log("Received in foreground");
//   };
// });