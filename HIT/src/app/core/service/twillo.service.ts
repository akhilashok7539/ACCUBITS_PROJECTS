import { Injectable } from '@angular/core';

import { AfterViewChecked,OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import { fromEvent, Subscription } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Channel } from 'twilio-chat/lib/channel';
import { debounceTime } from 'rxjs/operators';
import { ChatService } from './chat.service';
import { CommonService } from './common.service';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class TwilloService implements OnInit ,OnDestroy , AfterViewChecked {
  box = false;
  frnds = false;
  icon = true;
  frnd_name;
  frnd_image;
  today_date = new Date();
  subscribeProfile : Subscription;
  MessageData : Subscription;
  FriendMessageData : Subscription;
  allFriendsData = [];
  userProfile;
  public isGettingChannels: boolean = false;
  public channels: any[] = [];
  isAlive = true;
  // @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  public channelObj: any;
  public chatMessage: string;
  private conSub: any;
  private disconSub: any;
  Online = false;
  public currentUsername: string ;
  public loggedUserName: string ;
  public isConnected: boolean = false;
  public isConnecting: boolean = false;
  loggedIdentity: string;
  loggedStatus;
  loading = false;
  constructor(
    private chatService: ChatService,
    private service:ApiService,
    private commonService: CommonService,
    private dataService: DataServiceService,
  ) {
    this.subscribeProfile = this.dataService.currentUser.subscribe(async data => {
      if(data !== null){
        this.userProfile = data;
        await this.getAllFriends();

      }
    });

   }
  ngOnInit(): void {
    this.getTwillioToken();
    this. getConnection();
  }
  ngAfterViewChecked() {        
} 
getChannels() {
  this.isGettingChannels = true;
  this.chatService.getSubscribedChannels().then((channels: any) => {
    this.channelObj = channels;
    this.channels = this.channelObj.items;
    // this.getunread()
    this.isGettingChannels = false;
  });
}
current_user;
getunread() {
  this.channels.forEach(el => {
    el.getMembers().then(members => {
      members.forEach(member => {
          member.getUser().then(async user => {
                // this.current_user = user.state.identity;
                // this.currentChannel = el;
                // await this.getChannelMessages();

          }).catch(error => {
              console.error(error);
          });
      });                    
  })
  });
}
getChannelMessages() {
  let data;
  data = this.currentChannel;
 this.currentChannel.getMessages().then(async messages => {
   if (messages.items.length > 10) {
     // let's say UI displayed first 5 messages out of many
     // and client wants to mark those as read ones
     var someMessageIndex = messages.items[4].index;
   await data.updateLastConsumedMessageIndex(someMessageIndex)
       .then(messages1 => {
         this.unread_msg = messages1
         this.unreadmessagecount = this.read_msg - this.unread_msg;
         this.allFriendsData.forEach(els => {
            if(els.friendInfo.username === this.current_user){
              els.unreadmsg = this.unreadmessagecount;
            }
         });
     });
 }
 });
 this.getunReadmessageCount();
} 
unreadmessagecount :any;
read_msg:any;
unread_msg :any;
async getunReadmessageCount(){
  const data = this.currentChannel;
await this.currentChannel.getUnconsumedMessagesCount().then(messages => {
  this.read_msg = messages;
});
}
getAllFriends() {
  this.service.httpGet('/v1/feed/friend/all?userId=' + this.userProfile.guid + '&size=100').subscribe((response) => {
    this.allFriendsData = response.data.rows;
    this.loading = false;
  });
}
  getConnection(){
    this.conSub = this.chatService.chatConnectedEmitter.subscribe((resulrt) => {
      this.isConnected = true;
      this.isConnecting = false;
      this.getChannels();
      this.chatService.chatClient.on('connectionStateChanged', () => {
        this.loggedStatus = (this.chatService.chatClient.connectionState === 'connected') ? true : false;
      });
      this.chatService.chatClient.on('channelAdded', () => {
        this.getChannels();
      });
      this.chatService.chatClient.on('channelRemoved', () => {
        this.getChannels();
      });
    },
    (error) => { 
      console.log(error)
    })

    this.disconSub = this.chatService.chatDisconnectedEmitter.subscribe(() => {
      this.isConnecting = false;
      this.isConnected = false;
    });
  }


  chatLoader: boolean = false;
  public messages: Message[] = [];
  public membersTyping: any = [];
  public currentChannel: Channel;
  public activeMembers;
  public isactiveChannel: boolean = false;
  currentChannelName;
  public typeObservable: any;
  @ViewChild('chatElement') chatElement: any;
  @ViewChild('chatDisplay') chatDisplay: any;
  
 
  getMemberList() {
    this.currentChannel.getMembers().then(members => this.activeMembers = members);
  }
 
  /* Get Twillio token */
  getTwillioToken() {
    this.chatService.connect(localStorage.getItem('twilio_token'));
  }

  ngOnDestroy() {;
    this.conSub.unsubscribe();
    this.disconSub.unsubscribe();
    this.subscribeProfile.unsubscribe();
  }
}

