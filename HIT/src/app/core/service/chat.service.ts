import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as Twilio from 'twilio-chat';
import Client from "twilio-chat";
import {Channel} from "twilio-chat/lib/channel";
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly baseUrl;
  public chatClient: Client;
  public currentChannel: Channel;
  public chatConnectedEmitter: EventEmitter<any> = new EventEmitter<any>()
  public chatDisconnectedEmitter: EventEmitter<any> = new EventEmitter<any>()
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private httpClient: HttpClient,
  ) { this.baseUrl = environment.api_url; } 

  /* Twillio Connection */
  connect(token) {
    Twilio.Client.create(token).then( (client: Client) => {
      this.chatClient = client;
      this.chatConnectedEmitter.emit(true); 
    }).catch( (err: any) => {
      this.authService.refreshToken().subscribe((token: any) => {
          localStorage.setItem('twilio_token',token.data.token.twilioToken);
          this.connect(token.data.token.twilioToken);
        });
      this.chatDisconnectedEmitter.emit(true);
      if( err.message.indexOf('token is expired') ) {
        // localStorage.removeItem('twilio_token');
      }
    });
  }

  /* Twillio Connection Push Notification */
 connectPushNotification(token) {
    return this.chatClient.setPushRegistrationId('fcm',token);
  }

  /* Twillio Create Channel */
  _createChannel(createData: Object) {
    return this.chatClient.createChannel(createData); 
  }

  getSubscribedChannels() {
    return this.chatClient.getSubscribedChannels();
  }
  
  /* Public Channels */
  getPublicChannels() {
    return this.chatClient.getPublicChannelDescriptors();
  }

  /* Get Channels */
  getChannel(sid): Promise<Channel> {
    return this.chatClient.getChannelBySid(sid);
  }

  inviteUserToChannel(data) {
    return this.httpClient.post(`${this.baseUrl}chat/send-invite`, data)
  }




}
 