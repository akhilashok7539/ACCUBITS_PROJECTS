import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
@HostListener('window:scroll', ['$event']) 
export class WalletComponent implements OnInit {
  fixed = false;

  constructor() { }

  ngOnInit(): void {
  }
  onScroll(event) {
    const mainDiv = document.getElementById('section');  
    if(mainDiv.scrollTop>10){
      this.fixed=true;
    }else{
      this.fixed=false;
    }
  }

}
