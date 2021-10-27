import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-notice',
  templateUrl: './view-notice.component.html',
  styleUrls: ['./view-notice.component.scss']
})
export class ViewNoticeComponent implements OnInit {
  @Output() close_notice = new EventEmitter<boolean>();
  showRedeem = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  oncloseNotice() {
    this.close_notice.emit();
  }
  contactus()
  {
    this.close_notice.emit();
    this.router.navigate(['/rules/contact-us'])
  }
  continue()
  {
    this.close_notice.emit();
   
  }
  // onclose()
  // {
  //   this.showRedeem = false;
  // }
  
}
