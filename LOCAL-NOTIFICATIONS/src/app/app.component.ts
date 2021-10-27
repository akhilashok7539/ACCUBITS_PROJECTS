import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private localNotifications: LocalNotifications,private router:Router,
    private platform:Platform) {
    
    this.platform.ready().then((readySource) =>{
      this.localNotifications.on('click').subscribe(
        notifications =>{
          console.log(notifications);
          sessionStorage.setItem("notficationdata",JSON.stringify(notifications))
          this.router.navigate(['/notifications'])
        }
      )
      this.localNotifications.on('SNOOZE').subscribe(
        notifications =>{
          console.log(notifications['actions']);
          // sessionStorage.setItem("notficationdata",JSON.stringify(notifications))
          // this.router.navigate(['/notifications'])
          if (notifications.actions[0].identifier === 'SNOOZE')
          {
            let localtime = new Date();
            var newId = notifications.id +1;
            var nextime = moment(localtime).add(1, 'minutes').toDate();
            console.log(nextime);
            
            this.localNotifications.schedule({
              id: newId,
              title: notifications.title,
              text: notifications.text,
              foreground : true,
              trigger:{ at: nextime},
              priority: 2,
              actions: [
                { id: 'SNOOZE', title: 'SNOOZE', identifier: 'SNOOZE',snoozeButtonclick:false  }
                ],
                badge : 1
            })
          }


        }
      )
    })
  }
}
