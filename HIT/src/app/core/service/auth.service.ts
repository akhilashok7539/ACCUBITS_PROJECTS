import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { BehaviorSubject, Observable, of, timer } from "rxjs";
import { environment } from "../../../environments/environment";
import { map, switchMap, tap, shareReplay, catchError } from "rxjs/operators";
import { PersistanceService } from "../interceptor/persistance.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ApiService } from "./api.service";



@Injectable({
  providedIn: "root",
})
export class AuthService {
  readonly baseUrl;
  private readonly JWT_TOKEN = "JWT_TOKEN";
  private readonly REFRESH_TOKEN = "REFRESH_TOKEN";
  private loggedUser: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStore: PersistanceService,
    private toastr: ToastrService,
    private service: ApiService
  ) {
    this.baseUrl = environment.api_url;
  }

  login(data): Observable<boolean> {
    return this.httpClient.post<any>(`${this.baseUrl}/v1/auth/login`, data).pipe(
      tap((tokens) => this.doLoginUser(data.username, tokens.data.token)),
      map((res) => {
        return res;
      }),
      catchError((error) => {
        return of(false);
      })
    );
  }

  adminLogin(data): Observable<boolean> {
    return this.httpClient.post<any>(`${this.baseUrl}/v1/auth/admin/login`, data).pipe(
      tap((tokens) => this.doLoginAdmin(data.username, tokens.data.token)),
      map((res) => {
        return res;
      }),
      catchError((error) => {
        this.toastr.error(error.error.message);
        return of(false);
      })
    );
  }

  logout() {
    this.loggedUser = null;
    this.doLogoutUser();
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.httpClient
      .post<any>(`${this.baseUrl}/v1/auth/token/refresh`, {
        refreshToken: this.getRefreshToken(),
      })
      .pipe(
        tap((tokens) => {
          this.storeTokens(tokens.data.token);
        }),
        catchError((error) => {
         // if(error.message === "Invalid Token!"){
          this.router.navigate(['/user'])  

          // }
          // this.doLogoutUser();
          return of(false);
        })
      );
  }

  getJwtToken() {
    return this.localStore.get(this.JWT_TOKEN);
  }

  private doLoginUser(username?: string, tokens?) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }
  private doLoginAdmin(username?: string, tokens?) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }
  public doLogoutUser() {
    console.log('logput came')
    let apiParams = {
      refreshToken: this.getRefreshToken()
    };
    if(apiParams.refreshToken === null)
    {
      this.router.navigate(["/user"]);
      this.removeTokens();
    }
    else
    {
      this.service.httpPost(`/v1/auth/logout`, apiParams).subscribe((response) => {
        this.loggedUser = null;
        this.router.navigate(["/user"]);
      });
    }
   
  }
  public doLogoutAdmin() {
    this.loggedUser = null;
    this.removeTokens();
    this.router.navigate(["/admin"]);
  }
  public redirectTosignIn(){
    this.removeTokens();
    this.router.navigate(["/user"]);
  }
  private getRefreshToken() {
    return this.localStore.get(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    this.localStore.set(this.JWT_TOKEN, jwt);
  }

  public storeTokens(tokens) {
    this.localStore.set(this.JWT_TOKEN, tokens.access);
    this.localStore.set(this.REFRESH_TOKEN, tokens.refresh);
  }

   removeTokens() {
    this.localStore.remove(this.JWT_TOKEN);
    this.localStore.remove(this.REFRESH_TOKEN);
    localStorage.setItem("lang","por")
  }



  loginWithGoogle(){
    window.location.href = environment.api_url + '/v1/auth/google';
  }
  loginWithFacebook(){
    window.location.href = environment.api_url + '/v1/auth/facebook';
  }

  sendRegistrationOtp(registerParams) {
    return this.httpClient.post(`${environment.api_url}/v1/user/otp/send`, registerParams);
  }
  verifyRegistrationEmail(otpParams) {
    return this.httpClient.post(`${environment.api_url}/v1/user/otp/verify`, otpParams);
  }
  verifyChangePasswordEmail(otpParams) {
    return this.httpClient.post(`${environment.api_url}/v1/user/forgot/otp/verify`, otpParams);
  }
  AdminverifyRegistrationEmail(otpParams) {
    return this.httpClient.post(`${environment.api_url}/v1/admin/otp/verify`, otpParams);
  }
  AdminverifyChangePasswordEmail(otpParams) {
    return this.httpClient.post(`${environment.api_url}/v1/admin/forgot/otp/verify`, otpParams);
  }
  createPassword(passwordParams) {
    return this.httpClient.post(`${environment.api_url}/v1/user/register`, passwordParams);
  }
  resetPassword(passwordParams) {
    return this.httpClient.post(`${environment.api_url}/v1/user/resetPassword`, passwordParams);
  }
  adminresetPassword(passwordParams) {
    return this.httpClient.post(`${environment.api_url}/v1/admin/resetPassword`, passwordParams);
  }
  adminsetNewPassword(passwordParams) {
    return this.httpClient.post(`${environment.api_url}/v1/admin/subadmin/setPassword`, passwordParams);
  }

  resendOtp(resendOtpParams) {
    return this.httpClient.post(`${environment.api_url}/v1/user/otp/resend`, resendOtpParams);
  }
  resendForgotPasswordOtp(resendOtpParams) {
    return this.httpClient.post(`${environment.api_url}/v1/user/forgot/otp/resend`, resendOtpParams);
  }
  adminresendForgotPasswordOtp(resendOtpParams) {
    return this.httpClient.post(`${environment.api_url}/v1/admin/forgot/otp/resend`, resendOtpParams);
  }
  forgotPassword(forgotPasswordParams) {
    return this.httpClient.post(`${environment.api_url}/v1/user/forgot/otp/send`, forgotPasswordParams);
  }
  adminForgotPassword(forgotPasswordParams) {
    return this.httpClient.post(`${environment.api_url}/v1/admin/forgot/otp/send`, forgotPasswordParams);
  }
  _userNameExists(name,id){
    return this.httpClient.get(`${environment.api_url}/v1/user/username/isExists/`+name+'?referenceId='+id);
  }
  _emailExists(mail){
    return this.httpClient.get(`${environment.api_url}/v1/user/email/isExists/`+mail);
  }
  _phoneExists(mail){
    return this.httpClient.get(`${environment.api_url}/v1/user/mobileNumber/isExists/`+mail);
  }

}