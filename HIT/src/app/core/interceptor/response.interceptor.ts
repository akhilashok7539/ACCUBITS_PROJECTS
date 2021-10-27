import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private toast: ToastrService,private router:Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.lang){
      req = this.addLanguage(req, localStorage?.lang);
    }
    return next.handle(req).pipe(
        // retry(2),
        catchError((error: HttpErrorResponse) => {
            switch (error.status) {
                case 412:
                case 400:
                case 500:
                case 422:
                case 429:                  
                    if(error.error?.errors){
                      console.log(error.error.errors[0].msg);
                      
                      this.toast.error(error.error.errors[0].msg);
                    }else{
                      this.toast.error(error.error.message);
                      console.log(error.error.message);
                      if(error.error.message === 'Your session has ended')
                      {
                        this.router.navigate(['/user'])
                      }
                      if(error.error.message === 'Something went wrong, please try again')
                      {
                        this.router.navigate(['/user'])
                        sessionStorage.clear();
                        // localStorage.clear()
                      }
                    }
                    break;
                default:
                    break; 
            }
            return throwError(error);
        })
    );
  }
  private addLanguage(request: HttpRequest<any>, language) {
    return request.clone({
      setHeaders: {
        'Accept-Language':language
      },
    });
  }
}
