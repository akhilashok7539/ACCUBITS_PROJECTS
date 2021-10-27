import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private headerDetail = new  BehaviorSubject(null);
  headername = this.headerDetail.asObservable();
  cateLogueHistory:any = [];
  sendHeaderDetail(data){
    this.headerDetail.next(data);
  }
  storedataService(s){
    this.cateLogueHistory = s;
  }
  
}
