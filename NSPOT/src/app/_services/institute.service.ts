import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {
  private httpOptions: any;
  public accessToken: string;
  public userLogedIn;

  SERVER_URL = environment.apiUrl;
  apiurl;
  constructor(private http: HttpClient) {
    this.setHttpOptions();
    this.apiurl = "https://nspot-server.herokuapp.com/api/";
  }

  /**
   * sets the http header
   * Authorization header setup in the case of loged in user
   * @param : nil
   * @returns : void
   */
  setHttpOptions(): void {
    this.userLogedIn = JSON.parse(localStorage.getItem('userLogin'));
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (this.userLogedIn != null) {
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.userLogedIn.token
      });
    }

    this.httpOptions = { headers };
  }

  public doGetRequest(url: any) {
    return this.http.get<any>(this.apiurl + url, this.httpOptions).pipe(
      map((response) => {
        return response;
      }),
    );
  }
  public doPostRequest(url: any, data: any) {
    return this.http.post<any>(this.apiurl + url, data, this.httpOptions).pipe(
      map((response) => {
        return response;
      }),
    );
  }
  login(req) {
    return this.http.post(this.apiurl + 'user/login', req);
  }
  getallmaincategory() {
    return this.http.get('https://nspot-server.herokuapp.com/api/course-categories/');
  }
  getmaincategorybyid1(id) {
    return this.http.get(this.apiurl + 'course-categories/subcategory/' + id);
  }
  getmaincategorybyid2(id) {
    return this.http.get(this.apiurl + 'course-categories/subcategory2/' + id);

  }
  getmaincategorybyid3(id) {
    return this.http.get(this.apiurl + 'course-categories/subcategory3/' + id);
  }
  getmaincategorybyid4(id) {
    return this.http.get(this.apiurl + 'course-categories/subcategory4/' + id);
  }
  getmaincategorybyid5(id) {
    return this.http.get(this.apiurl + 'course-categories/subcategory5/' + id);
  }
  getallacademiclevel() {
    return this.http.get(this.apiurl + 'institute-types');

  }
  getcoursetype() {
    return this.http.get(this.apiurl + 'course-types/');
  }
  getuniversitytypes() {
    return this.http.get(this.apiurl + 'university-types/');

  }
  getcourseStream() {
    return this.http.get(this.apiurl + 'course-stream/');

  }
  substreamcoursespecialization(id) {
    return this.http.get(this.apiurl + 'course-stream/specialization/' + id);

  }
  accademicLevelCoursechange(id) {
    return this.http.get(this.apiurl + 'academic-level/courses/' + id)
  }
  getalltestlist(id) {
    return this.http.get(this.apiurl + 'institute/aptitude-tests/' + id);
  }
  addtestname(req, id) {

    return this.http.post(this.apiurl + 'institute/aptitude-tests/create/' + id, req);
  }
  getallQuestions(id) {
    return this.http.get(this.apiurl + 'institute/aptitude-tests/' + id + '/questions');

  }
  addquestions(id, req) {
    return this.http.post(this.apiurl + 'institute/aptitude-tests/' + id + '/create', req);
  }
  addacourse(id, req) {
    return this.http.post(this.apiurl + 'institute/course/create/' + id, req)
  }
  getpaymetTenture() {
    return this.http.get(this.apiurl + 'payment-tenures/');
  }
  getbankDetailByInstId(id) {
    return this.http.get(this.apiurl + 'institute/bank-details/' + id);

  }
  calculatenspotFee(amount) {
    // amout is schoolarshipamount
    return this.http.get(this.apiurl + 'institute/course/calculate-nspot-fees/' + amount);

  }
  addfeesStructuretoinstitute(req, institueId) {
    // request body

    // amount: 899
    // bankAccountId: "1"
    // hasScolarship: true
    // instituteCourseId: 1
    // otherFee: 1000
    // paymentTenureId: "2"
    // title: "fe"
    // validUpto: "2021-05-14"
    return this.http.post(this.apiurl + 'institute/course/fees/create/' + institueId, req)
  }
  addinstituteeligibility(req, id) {
    // instituteCourseId will pass
    // eligibiliyInString: "adfasdasdsadsadasdasdsadasdasdsa"
    // instituteCourseId: 1
    return this.http.post(this.apiurl + 'institute/course/update/' + id, req)
  }

  updateJobOpportunity(req, id) {
    // instituteCourseId will pass
    // accept: true
    // hasPlacementAssistant: true
    // instituteCourseId: 1
    // jobAreas: "sofewr"
    // jobPositions: "ebufuber"
    // recruiters: "indo"
    // salaryRange: "12312312321"
    return this.http.post(this.apiurl + 'institute/course/update/' + id, req)
  }
  getallinstutecourses(id) {
    return this.http.get(this.apiurl+'institute/courses/'+id);
  }
  addAddmissionOfficer(req)
  {
    return this.http.post(this.apiurl+'admission-officer/create/',req);
  }
  getalladdmissionOfficer(id){
    return this.http.get(this.apiurl+'admission-officer/getByInstitute/'+id);
  }
  updateacourse(id,req){
    return this.http.post(this.apiurl + 'institute/course/update/' + id, req)

  }
  update(req)
  {
    return this.http.post(this.apiurl+'institute/aptitude-tests/update',req);
  }
  addbankkinfo(id,req){
    return this.http.post(this.apiurl+'institute/bank-details/create/'+id,req)
  }
  getallinstituteservice(id){
    return this.http.get(this.apiurl+'institute/'+id)
  }
  getallinstituteservicebordorcounicl(id)
  {
    return this.http.get(this.apiurl+'institute/board-of-council/'+id)

  }
  getallinstutegalley(id)
  {
    return this.http.get(this.apiurl+'institute/gallery/'+id)
  }
  addgalleryiomage(formdata,id){
    return this.http.post(this.apiurl+'institute/gallery/create/'+id,formdata);
  }
  addpersonindonewfilds(req){
    return this.http.post(this.apiurl+'applicationForm/additionalFields/create/',req);
  }
}
