import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public importEmail: string ='';
  public showFriend: number = 1;
  public bettab: number = 1;
  public subject = new Subject<any>();
  private header = new  BehaviorSubject(null);
  private profileData = new  BehaviorSubject(null);
  private friendMessage = new  BehaviorSubject(null);
  private Message = new  BehaviorSubject(null);
  private Allfriendmessage = new  BehaviorSubject(null);
  private bettingData = new  BehaviorSubject(null);
  private feedScrollPosition = new  BehaviorSubject(null);
  private feedScrollEvent = new  BehaviorSubject(null);
  private shareCompetition = new BehaviorSubject(null);
  private redirectFromFeed = new BehaviorSubject(null);
  private registrationEmail = new BehaviorSubject(this.importEmail);
  private languageUpdated = new BehaviorSubject(null);
  trendingcompetionapicalls = new BehaviorSubject(null);
  friendsTab = new BehaviorSubject(this.showFriend);
  BettingTab = new BehaviorSubject(this.bettab);
  trendingcompetionapicallFucntion =  this.trendingcompetionapicalls.asObservable();
  currentRegistrationEmail = this.registrationEmail.asObservable();
  friendMessages = this.friendMessage.asObservable();
  Messages = this.Message.asObservable();
  Allfriendmessages = this.Allfriendmessage.asObservable();
  currentUser = this.profileData.asObservable();
  headername = this.header.asObservable();
  currentFeedScrollPosition = this.feedScrollPosition.asObservable();
  currentFeedScrollEvent = this.feedScrollEvent.asObservable();
  selectedCompetitionToShare = this.shareCompetition.asObservable();
  currentbettingData = this.bettingData.asObservable();
  toViewProfile = this.redirectFromFeed.asObservable();
  language = this.languageUpdated.asObservable();
  sendRegistrationEmail(data){
    this.registrationEmail.next(data);
  }
  sendHeadername(data){
    this.header.next(data);
  }
  SendHeaderlanguageUpdatedAbout(data)
  {
    this.languageUpdated.next(data);
  }
  sendFriendMessage(data){
    this.friendMessage.next(data);
  }
  sendMessage(data){
    this.Message.next(data);
  }
  allfriendMessage(data){
    this.Allfriendmessage.next(data);
  }
  profile(data) {
    this.profileData.next(data)
  }
  feedScroll(data){
    this.feedScrollPosition.next(data)
  }
  feedScrollEv(data,data1,data2){
    const obj={
      offHeight:data,
      scrollTop:data1,
      scrollHeight:data2
    }
    this.feedScrollEvent.next(obj);
  }
  toShareCompetition(id,tab){
    const obj={
      compId:id,
      compTab:tab
    }
    this.shareCompetition.next(obj)
  }
  toProfilePage(id,tab){
    const obj={
      userId:id,
      fromPage:tab
    }
    this.redirectFromFeed.next(obj)
  }
  bettingDatas(){
    this.bettingData.next(true)
  }
  showFriends(data){
    this.friendsTab.next(data)
  }
  showBettingTab(data){
    this.BettingTab.next(data)
  }
  trendingCompetionApicalls(data)
  {
    this.trendingcompetionapicalls.next(data)
  }
}
