import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  _getProfile(): Observable<any> {
    return this.http.get(`${environment.api_url}/v1/user/profile`, {});
  }
  _getTrendingCompetions(): Observable<any> {
    return this.http.get(`${environment.api_url}/v1/competition/trending/list?pageLimit=12&pageNo=1`, {});
  }
  _getGuId(): Observable<any> {
    return this.http.get(`${environment.api_url}/v1/competition/invite/code`, {});
  }
  _getGames(params?: any): Observable<any> {
    let urlParams = new URLSearchParams();
    for (let key of Object.keys(params)) {
      urlParams.set(key, params[key])
    }
    return this.http.get(`${environment.api_url}/v1/league/games?${urlParams.toString()}`);
  }
  _getLeague(params?: any): Observable<any> {
    let urlParams = new URLSearchParams();
    for (let key of Object.keys(params)) {
      urlParams.set(key, params[key])
    }
    return this.http.get(`${environment.api_url}/v1/league?${urlParams.toString()}`, {});
  }
  _getUsers(params): Observable<any> {
    const urlParams = new URLSearchParams();
    for (const key of Object.keys(params)) {
      urlParams.set(key, params[key]);
    }
    return this.http.get(`${environment.api_url}/v1/user/search/members?${urlParams.toString()}`);
  }

  _userExists(name): Observable<any> {
    return this.http.get(`${environment.api_url}/v1/competition/isExists/`+name);
  }

  _getLocationInfo(q?): Observable<any> {
    let url;
    if(q){
      url = `${environment.api_url}/v1/auth/location/info` + q
    } else {
      url = `${environment.api_url}/v1/auth/location/info`
    }
    return this.http.get(url);
  }

  _createCompetition(data): Observable<any> {
    return this.http.post(`${environment.api_url}/v1/competition/create`, data);
  }

  _getCompetitionPreview(data): Observable<any> {
    return this.http.post(`${environment.api_url}/v1/competition/preview`, data);
  }

  _updateProfile(data): Observable<any> {
    return this.http.put(`${environment.api_url}/v1/user/profile`, data);
  }

  _updateFullName(data): Observable<any> {
    return this.http.put(`${environment.api_url}/v1/user/about`, data);
  }
  _getallUsers(data): Observable<any> {
    return this.http.get(`${environment.api_url}/v1/admin/user/search?searchKey=`+data);
  }
  removeEmptyStrings(obj) {
    const dataObj = { ...obj };
    Object.entries(dataObj).forEach(([key, val]) => val === '' && delete dataObj[key]);
    return dataObj;
  }

  removeEmptyStringsData(obj) {
    const dataObj = { ...obj };
    Object.entries(dataObj).forEach(([key, val]) => val === '' && delete dataObj[key]);
    let urlParams = new URLSearchParams();
    for (let key of Object.keys(dataObj)) {
      urlParams.set(key, dataObj[key])
    }
    return urlParams;
  }



  removeCompetitionData(){
    localStorage.removeItem("competitionName");
    localStorage.removeItem("selectedGame");
    localStorage.removeItem("selectedGameObject");
    localStorage.removeItem("competitionId");
    localStorage.removeItem("inviteDetails");
    localStorage.removeItem("invite");
    localStorage.removeItem("cost");
    localStorage.removeItem("type");
    localStorage.removeItem("privacy");
    localStorage.removeItem('leagueId');
    localStorage.removeItem('noOfDays');
  }
}
