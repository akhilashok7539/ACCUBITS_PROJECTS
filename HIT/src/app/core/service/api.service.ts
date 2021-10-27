import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { forkJoin, throwError, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient,
    // private cookie: CookieService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  httpGet(url: string): Observable<any> {
    const Link = `${environment.api_url}${url}`;
    return this.http.get(Link);
  }
  httpPost(url: string, data: any): Observable<any> { 
    const Link = `${environment.api_url}${url}`;
    return this.http.post(Link, data);
  }
  httpPut(url: string, data: any): Observable<any> { 
    const Link = `${environment.api_url}${url}`;
    return this.http.put(Link,data);
  }
  httpDelete(url: string): Observable<any> { 
    const Link = `${environment.api_url}${url}`;
    return this.http.delete(Link);
  }
  httpGetWithParams(url: string,params?: any): Observable<any> {
    const Link = `${environment.api_url}${url}`;
    return this.http.get(Link,JSON.parse(params));
  }
  httpForkJoin(forkObj: { fork: any[], api?: string }): Observable<any> {
    const baseUrl = `${environment.api_url}`;
    const mergeAPI = (): any => {
      return forkObj.fork.map((x: any) => {
        if (x.type === 'POST') {
          return this.http.post(baseUrl + x.url, x.data)
        } else if (x.type === 'GET') {
          return this.http.get(baseUrl + x.url)
        } else {
          return null;
        }
      });
    };
    return forkJoin(mergeAPI()).pipe(map(Response => this.checkResponseFork(Response)));
  }
  checkResponseFork(response: any): any {
    const resultsList: any = [];
    response.map((results: any) => {
      if (results) {
        resultsList.push(results);
      } else {
        resultsList.push({ error: results.code });
      }
    });
    return resultsList;
  }
  checkResponse(response: any): any {
    const results = response;
    if (results) {
      return results;
    } else {
      return { error: results.code };
    }
  }

  getHttpHeader() {
    const token = localStorage.getItem('JWT_TOKEN');
    if (token) {
      return {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }),
      };
    }
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  downloadProductListCsv(params) { 
    const httpOptions: any = this.getHttpHeader;
    httpOptions.responseType = "blob";
    return this.http.get(`${environment.api_url}`+`/v1/admin/transactions/csv?`+params, httpOptions);
  }

  handleError(error: any): any {
    switch (error.status) {
      case 204:
        this.toastr.error(error['error']['data'], '');
        break;
      case 403:
        this.toastr.error(error['error']['data'], '');
        // this.cookie.deleteAll();
        this.router.navigate(['/user']);
        break;
      default:
        this.toastr.error(error['error']['data'], '');
        return error.error;
    }
  }
  httppostinitialAddAmont(url: string, data: any): Observable<any> { 
    const Link = `${environment.api_url}${url}`;
    return this.http.post(Link, data);
  }
}
