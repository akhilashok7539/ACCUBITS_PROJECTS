import { Injectable } from '@angular/core';
import { LoginParams, RegisterParams } from '@core/interfaces';
import { HttpClient } from '@angular/common/http';
import { Config } from '@app/config/config';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable, of, timer } from "rxjs";
import { map, switchMap, tap, shareReplay, catchError } from "rxjs/operators";
import { PersistanceService } from "../interceptors/persistance.service";
import { Router } from '@angular/router';

/**
 * @description Authentication Service which handles the user session and authentication related API
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  readonly baseUrl;
  private readonly JWT_TOKEN = "JWT_TOKEN";
  private readonly REFRESH_TOKEN = "REFRESH_TOKEN";
  private loggedUser: string;

  /**
   * @description boolean to check logged in user in the app session level.
   */
  isLoggedIn: boolean;

  constructor(
    private localStore: PersistanceService,
    private router: Router,
    private http: HttpClient) {
      this.baseUrl = environment.api_url;
      
     }

  /**
   * @description To check whether the user is logged in or not.
   */
  isSessionActive() {
    return localStorage.getItem(Config.userToken);
  }

  /**
   * @description Set the logged in user token to localstorage
   */
  set token(token: string) {
    this.isLoggedIn = true;
    localStorage.setItem(Config.userToken, token);
  }

  /**
   * @description Get the logged in user token.
   */
  get token() {
    return localStorage.getItem(Config.userToken);
  }

  getJwtToken() {
    return this.localStore.get(this.JWT_TOKEN);
  }

  refreshToken() {
    // return this.httpClient
    //   .post<any>(`${this.baseUrl}/v1/auth/token/refresh`, {
    //     refreshToken: this.getRefreshToken(),
    //   })
    //   .pipe(
    //     tap((tokens) => {
    //       this.storeTokens(tokens.data.token);
    //     }),
    //     catchError((error) => {
    //       this.doLogoutUser();
    //       return of(false);
    //     })
    //   );
  }

  /**
   * @param loginParams The login request params for the login API.
   * @description Login to the application, triggers login API.
   */
   login(data): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/user/login`, data).pipe(
      map((res) => {
        const token = {
          'access':res.access_token,
          'refresh':res.refresh_token
        }
        this.doLoginUser(res.email, token)
        return res;
      }),
      catchError((error) => {
        return of(false);
      })
    );
  }

  private doLoginUser(username?: string, tokens?) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  public storeTokens(tokens) { 
    this.localStore.set(this.JWT_TOKEN, tokens.access);
    this.localStore.set(this.REFRESH_TOKEN, tokens.refresh);
  }
  /**
   * @param registerParams The register/signup api request params.
   * @description Register/Signup to the application, triggers register API.
   */
  register(registerParams: RegisterParams) {
    return this.http.post(`${environment.api_url}/register`, registerParams);
  }

  public doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
    this.router.navigate(["/login"]);
  }
  
  private removeTokens() {
    this.localStore.remove(this.JWT_TOKEN);
    this.localStore.remove(this.REFRESH_TOKEN);
    this.localStore.remove('user_id');
    this.localStore.remove('token');
  }
}

