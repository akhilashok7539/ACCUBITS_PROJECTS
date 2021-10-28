import { Injectable } from '@angular/core';

import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  token:any;
  details:any=[];
  constructor()
   { 
    this.details = JSON.parse(localStorage.getItem('userLogin'));
 
   if(this.details==null)
   {
    this.token = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha2hpbGFzaG9rQHBydmFrLmluIiwiZXhwIjoxNTgwNDU3Mjg0LCJpYXQiOjE1ODA0NTQ1ODR9.U-Og3vRa12LGn37-XieCXsSOG0SFF089kvh_sQrqEAM`;
     
   }
   else{
    console.log(this.details['token']);
    this.token = this.details['token'];
   }
    
   }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Token Interceptor');
    if(this.details==null)
    {
     this.token = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha2hpbGFzaG9rQHBydmFrLmluIiwiZXhwIjoxNTgwNDU3Mjg0LCJpYXQiOjE1ODA0NTQ1ODR9.U-Og3vRa12LGn37-XieCXsSOG0SFF089kvh_sQrqEAM`;
      
    }
    else{
     console.log(this.details['token']);
     this.token = this.details['token'];
    }
    
    console.log(this.token);
    req = req.clone({
      setHeaders: {
        Authorization:`Bearer ${this.token}`,
      },
     
    });
    console.log(req);
    return next.handle(req);
  }

}