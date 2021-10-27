import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from "@angular/fire/messaging";
import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject, from } from 'rxjs';
import { ApiService } from '../../core/service/api.service';
import { AuthService } from '../../core/service/auth.service'
import { ChatService } from 'src/app/core/service/chat.service';

@Injectable()
export class MessagingService {
  generatedToken;
  currentMessage = new BehaviorSubject(null);

  constructor(
    private service: ApiService,
    private auth: AuthService,
    private angularFireDB: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private chatService: ChatService,
    private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messages.subscribe(
      (_messaging: AngularFireMessaging) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onBackgroundMessage  = _messaging.onBackgroundMessage .bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      })
  }

  /**
   * update token in firebase database
   * 
   * @param userId userId as a key 
   * @param token token as a value
   */
  updateToken(userId, token) {
    // we can change this function to request our backend service
    this.angularFireAuth.authState.pipe(take(1)).subscribe(
      () => {
        const data = {};
        data[userId] = token
        this.angularFireDB.object('fcmTokens/').update(data)
      })
  }

  /**
   * request permission for notification from firebase cloud messaging
   * 
   * @param userId userId
   */
  requestPermission(userId) {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        this.generatedToken = token;
        this.getTwillioToken(token);
        this.updateToken(userId, token);
        this.passPushToken(); 
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  /**
   * hook method when new notification received in foreground
   */
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        this.currentMessage.next(payload); 
      })
  } 
  getTwillioToken(token) {
    this.chatService.connectPushNotification(token);
  }
  passPushToken() {
    if (this.auth.isLoggedIn()&&this.generatedToken) {
      var data = {
        "token": this.generatedToken
      }
      this.service.httpPost(`/v1/notification/fcm/token`, data).subscribe((response) => {
      });      
    }

  }
}