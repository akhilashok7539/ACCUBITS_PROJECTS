import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-identity-verfication',
  templateUrl: './identity-verfication.component.html',
  styleUrls: ['./identity-verfication.component.scss']
})
export class IdentityVerficationComponent implements OnInit {
  fixed=false;
  isWeb=true;
  constructor(
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params.app==1){
       this.isWeb = false;
      }
    })
  }
}
