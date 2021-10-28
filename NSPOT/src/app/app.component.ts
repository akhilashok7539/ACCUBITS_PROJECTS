import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isloggedIn=false;
  constructor(private router:Router) {
      this.isloggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
      if(this.isloggedIn == true)
      {
        this.router.navigate(['/tabs/tab1'])
      }
  }


  
}
