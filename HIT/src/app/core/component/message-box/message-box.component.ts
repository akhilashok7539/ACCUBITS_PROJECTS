import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { ChatService } from '../../service/chat.service';
import { ApiService } from '../../service/api.service';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import { fromEvent, Subscription } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Channel } from 'twilio-chat/lib/channel';
import { debounceTime } from 'rxjs/operators';
import { CommonService } from '../../service/common.service';
import { AuthService } from '../../service/auth.service';
import * as moment from 'moment';
@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity:1,transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity:0,transform: 'translateY(100%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ opacity:0,transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class MessageBoxComponent implements OnInit ,OnDestroy , AfterViewChecked {
  box = false;
  frnds = false;
  icon = true;
  frnd_name;
  searchValue;
  frnd_image;
  today_date = new Date();
  subscribeProfile : Subscription;
  MessageData : Subscription;
  FriendMessageData : Subscription;
  allFriendsData = [];
  userProfile;
  emoji = false;
  public isGettingChannels: boolean = false;
  public channels: any[] = [];
  isAlive = true;
  // @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  public channelObj: any;
  public chatMessage: string;
  private conSub: any;
  private disconSub: any;
  Online = false;
  search = false;
  public currentUsername: string ;
  public loggedUserName: string ;
  public isConnected: boolean = false;
  public isConnecting: boolean = false;
  loggedIdentity: string;
  loggedStatus;
  loading = false;
  constructor(
    private service: ApiService,
    private chatService: ChatService,
    private authService:AuthService,
    private commonService: CommonService,
    private dataService: DataServiceService,
    private renderer: Renderer2
  ) {
     this.getAllFriends();
    if (localStorage.getItem("JWT_TOKEN") !== null) {
      this.commonService._getProfile().subscribe((response) => {
        this.loggedUserName = response.data.username;
        this.currentUsername = response.data.username;
      });
    }
    this.MessageData = this.dataService.Messages.subscribe(data => { 
      if(data !== null){
        this.loading = true;
        this.getAllFriends();
        this.dataService.sendMessage(null);
      }
    });
    this.MessageData = this.dataService.Allfriendmessages.subscribe(data => { 
      if(data !== null){
        this.loading = true;
        this.ngOnInit();
        this.onselect();
        this.dataService.allfriendMessage(null);
      }
    });
   }
  ngOnInit(): void {
    // this.getTwillioToken();
    this. getConnection();
    // this.getChannels();
    this.subscribeProfile = this.dataService.currentUser.subscribe(data => {
      if(data !== null){
        this.userProfile = data;
      }
    });
    this.FriendMessageData =this.dataService.friendMessages.subscribe(data=>{
      if(data !== null){
        this.Message(data);
        this.dataService.sendFriendMessage(null);
      } 
    })
  }
  
  ngAfterViewChecked() {        
    // this.scrollToBottom();        
} 
// scrollToBottom(): void {
//   try {
//       this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
//   } catch(err) { }                 
// }
  sendMessage() {
    this.emoji = false;
    if (this.chatMessage)
      this.currentChannel.sendMessage(this.chatMessage);
      this.chatMessage = null;
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
        // this.getChannels();
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
  getChannels() { 
    this.isGettingChannels = true;
    this.chatService.getSubscribedChannels().then((channels: any) => {
      this.channelObj = channels;
      this.channels = this.channelObj.items;
      this.isGettingChannels = false;
    }).catch(error => {
      this.authService.refreshToken().subscribe((token: any) => {
        localStorage.setItem('twilio_token',token.data.token.twilioToken);
        this.chatService.connect(token.data.token.twilioToken);
      });
  });
  }
  addEmoji(event){
      const { chatMessage } = this;
      let text ;
      if(chatMessage !== undefined && chatMessage !== null) {
         text = `${chatMessage}${event.emoji.native}`;
      } else {
        text = `${event.emoji.native}`;
      }

      this.chatMessage = text;
      this.chatElement.nativeElement.focus();
    }
  getAllFriends() {
    if(localStorage.getItem('userName_id') !== null ) {
    this.service.httpGet('/v1/feed/friend/all?userId=' + localStorage.getItem('userName_id') + '&size=100').subscribe((response) => {
      this.allFriendsData = response.data.rows;
      if(this.channels.length > 0) {
        this.getChannels();
      }
      this.channels.forEach((els)=>{
        var str = els.channelState.uniqueName;
        var res = str.replace(localStorage.getItem('userName'),'').replace('-','').replace('and','');
        var res1 = res.split(" ").join("")
        this.allFriendsData.find(el => {
          let data : Channel;
          data = els;
          if( el.friendInfo.username === res1 && el.unread_count !== null ) {
            els.getMembers().then(members => {
              members.forEach(member => {
                  member.getUser().then(user => {
                      if (res1.toString() == user['state'].identity.toString()) {
                          if (user['state'].online === true) {
                            el.online_status = true;
                          } else {
                            el.online_status = false;
                          }
                      }
                  }).catch(error => {
                      console.error(error);
                      this.authService.refreshToken().subscribe((token: any) => {
                        localStorage.setItem('twilio_token',token.data.token.twilioToken);
                        this.chatService.connect(token.data.token.twilioToken);
                      });
                  });
              });                    
          });

            let read_count :any;
            data.getMessagesCount().then(messages => {
              read_count = messages;
             const unreadCount = els.channelState.lastConsumedMessageIndex === null ? read_count : read_count - els.channelState.lastConsumedMessageIndex - 1;
             el.unread_count = unreadCount;
            });
          }
      });        
      })
      this.loading = false;
    });
  }
  }
  async Message(data){
    this.searchValue='';
    this.box = true;
    this.frnds = false;
    this.icon = false;
    // this.enterChannel("CH7c2926884c154510b1229f3ba56a1982")

    this.frnd_name = data.friendInfo.username;
    this.frnd_image = data.friendInfo.image;
    const response = await this.service
      .httpGet('/v1/chat/channel?userId=' + data.friendInfo.guid)
      .toPromise();
      this.enterChannel(response.data.channelId,data.friendInfo.username)

      // const found = this.channels.find(el=> el.sid === response.data.channelId)
      // this.enterChannel(found['sid'],data.friendInfo.username)
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
        });
    }
    await this.currentChannel.setAllMessagesConsumed().then( messages => {
      
    });
      messages.items.map((msg: any) => {
        this.messages.push(msg);
        let found ;
        this.messages.forEach((el)=> {
          const date = moment(el['state']['dateUpdated']).format('YYYY-MM-DD');
          const current_date = moment().format('YYYY-MM-DD');
            if(date !== found ) {
              found = date;
              el['check'] = 1;
              if(date === current_date) {
                el['current_date'] = true;
              } else {
                el['current_date'] = false;
              }
            }
        })
      });
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
  getMemberList() {
    this.currentChannel.getMembers().then(members => this.activeMembers = members);
  }
  enterChannel(sid,name): void {
    this.chatLoader = true;
    this.messages = [];
    this.membersTyping = [];
    this.chatService.getChannel(sid).then(channel => {
      this.currentChannel = channel;
      this.getChannelMessages();
      this.getMemberList();
      this.getOnlinestatus(name);
      this.isactiveChannel = true;
      this.chatLoader = false;
      this.currentChannelName = channel['channelState'].friendlyName 
      this.currentChannel.join()
        .then(r => {
          this.initChannel();
        })
        .catch(e => {
          if (e.message.indexOf('already exists') > 0) {
            this.initChannel();
          }
        });
    })
  }
  typing() {
    this.currentChannel.typing();
  }
  getOnlinestatus(id){
          // check for reachability change
          setInterval(() => {
            this.currentChannel.getMembers().then(members => {
                members.forEach(member => {
                    member.getUser().then(user => {
                        if (id.toString() == user['state'].identity.toString()) {
                            if (user['state'].online === true) {
                              this.Online = true;
                            } else {
                              this.Online = false;
                            }
                        }
                    }).catch(error => {
                        console.error(error);
                    });
                });                    
            }).catch(error => {
                console.error(error);
                this.authService.refreshToken().subscribe((token: any) => {
                  localStorage.setItem('twilio_token',token.data.token.twilioToken);
                  this.chatService.connect(token.data.token.twilioToken);
                });
            });
          }, 500);
  }
  closeNotification(event): void {
    if (event) {
      if (this.emoji === true) {
        this.emoji = false
      }
    }
  }
  whosTyping() {
    return this.membersTyping.map(m => {
      if (m.identity !== this.currentUsername) {
        return m.identity;
      }
    }).join(', ');
  }
  initChannel() {
    this.typeObservable = fromEvent(this.chatElement.nativeElement, 'keyup')
      .pipe(
        debounceTime(100))
      .subscribe(() => {
        this.typing();
      });

    this.currentChannel.on('messageAdded', (m) => {
      this.messages.push(m);
      const el = this.chatDisplay.nativeElement;
      setTimeout(() => {
        el.scrollTop = el.scrollHeight;
      });
    });
    this.currentChannel.on('typingStarted', (m) => {
      this.membersTyping.push(m);
    });
    this.currentChannel.on('typingEnded', (m) => {
      const mIdx = this.membersTyping.findIndex(mem => mem.identity === m.identity);
      this.membersTyping = this.membersTyping.splice(mIdx, 0);
    });
  }


  onClose(){
    this.messages = [];
    this.box = false;
    this.frnds = false;
    this.search = false;
    this.icon = true;
  }
  onselect(){
    this.box = false;
    this.frnds = true;
    this.search = false;
    this.icon = false;
    this.dataService.sendMessage('trur');
  }
 
  /* Get Twillio token */
  getTwillioToken() {
    this.chatService.connect(localStorage.getItem('twilio_token'));
  }
  ngOnDestroy() {
    this.subscribeProfile.unsubscribe();
    this.FriendMessageData.unsubscribe();
    this.MessageData.unsubscribe();
  }
  checkTab(event) {
    if (event.target.value.length === 0 && event.which === 32) {
      event.preventDefault();
    }
  }
  getSearchResult(text) {
    this.allFriendsData = [];
    if (!text.replace(/\s/g, '').length) {
        this.service.httpGet('/v1/feed/friend/all?userId=' + localStorage.getItem('userName_id') + '&size=100&').subscribe((response) => {
          this.allFriendsData = response.data.rows;
      this.searchValue = '';
    });
    }
    this.searchValue = text;
      if (this.searchValue != '') {
        let apiParams = {
          searchTerm: this.searchValue,
        };
        const params = this.commonService.removeEmptyStringsData(apiParams);
        this.service.httpGet('/v1/feed/friend/all?userId=' + localStorage.getItem('userName_id') + '&size=100&' + params).subscribe((response) => {
          this.allFriendsData = response.data.rows;
        });
      } else {
        this.allFriendsData = [];
      }
  }
}
