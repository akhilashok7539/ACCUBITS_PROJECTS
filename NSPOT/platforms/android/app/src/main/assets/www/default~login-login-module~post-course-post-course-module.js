(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~login-login-module~post-course-post-course-module"],{

/***/ "UIBc":
/*!**********************************************!*\
  !*** ./src/app/_services/toaster.service.ts ***!
  \**********************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




let ToasterService = class ToasterService {
    constructor(toastrcontroller, router) {
        this.toastrcontroller = toastrcontroller;
        this.router = router;
    }
    userLogin() {
        this.toastrcontroller.create({
            message: 'Institute Login success!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    erroruserLogin() {
        this.toastrcontroller.create({
            message: 'Institute Login Failed!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    newCourseAdded() {
        this.toastrcontroller.create({
            message: 'Course Added!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    errornewCourseAdded() {
        this.toastrcontroller.create({
            message: 'Unablet to add new Course!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    feeInfoAdded() {
        this.toastrcontroller.create({
            message: 'Fees Info Added!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    errorfeeInfoAdded() {
        this.toastrcontroller.create({
            message: 'Unablet to fees info!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    eligibilityadded() {
        this.toastrcontroller.create({
            message: 'Eligibility Added!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    erroreligibilityaddedd() {
        this.toastrcontroller.create({
            message: 'Unablet to add Eligibility !',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    joboppouttunityadded() {
        this.toastrcontroller.create({
            message: 'Job Oppourtunity Added!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    errorjoboppouttunityadded() {
        this.toastrcontroller.create({
            message: 'Unablet to add Job Oppourtunity !',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    optionCheck() {
        this.toastrcontroller.create({
            message: 'Please choose a option!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
};
ToasterService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ToasterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToasterService);



/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    apiUrl: 'http://35.239.209.28:3000/api/',
    baseApiUrl: 'http://localhost:3000/',
    adminPortalUrl: 'http://nspot.admin.surge.sh',
    institutePortalUrl: 'http://nspot.admin.surge.sh',
    studentPortalUrl: 'http://nspot.admin.surge.sh',
    RAZORPAY_KEY_ID: "rzp_test_tmR2af2TNK0qLo",
};


/***/ }),

/***/ "nFbz":
/*!*********************************************!*\
  !*** ./src/app/_services/loader.service.ts ***!
  \*********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let LoaderService = class LoaderService {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.isLoading = false;
    }
    present() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                message: "Please wait"
                // duration: 5000,
            }).then(a => {
                a.present().then(() => {
                    console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
    }
};
LoaderService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ "onIP":
/*!************************************************!*\
  !*** ./src/app/_services/institute.service.ts ***!
  \************************************************/
/*! exports provided: InstituteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituteService", function() { return InstituteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let InstituteService = class InstituteService {
    constructor(http) {
        this.http = http;
        this.SERVER_URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.setHttpOptions();
        this.apiurl = "https://nspot-server.herokuapp.com/api/";
    }
    /**
     * sets the http header
     * Authorization header setup in the case of loged in user
     * @param : nil
     * @returns : void
     */
    setHttpOptions() {
        this.userLogedIn = JSON.parse(localStorage.getItem('userLogin'));
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        if (this.userLogedIn != null) {
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.userLogedIn.token
            });
        }
        this.httpOptions = { headers };
    }
    doGetRequest(url) {
        return this.http.get(this.SERVER_URL + url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return response;
        }));
    }
    doPostRequest(url, data) {
        return this.http.post(this.SERVER_URL + url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return response;
        }));
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
        return this.http.get(this.apiurl + 'academic-level/courses/' + id);
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
        return this.http.post(this.apiurl + 'institute/course/create/' + id, req);
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
        return this.http.post(this.apiurl + 'institute/course/fees/create/' + institueId, req);
    }
    addinstituteeligibility(req, id) {
        // instituteCourseId will pass
        // eligibiliyInString: "adfasdasdsadsadasdasdsadasdasdsa"
        // instituteCourseId: 1
        return this.http.post(this.apiurl + 'institute/course/update/' + id, req);
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
        return this.http.post(this.apiurl + 'institute/course/update/' + id, req);
    }
    getallinstutecourses(id) {
        return this.http.get(this.apiurl + 'institute/courses/' + id);
    }
    addAddmissionOfficer(req) {
        return this.http.post(this.apiurl + 'admission-officer/create/', req);
    }
    getalladdmissionOfficer(id) {
        return this.http.get(this.apiurl + 'admission-officer/getByInstitute/' + id);
    }
};
InstituteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
InstituteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], InstituteService);



/***/ })

}]);
//# sourceMappingURL=default~login-login-module~post-course-post-course-module.js.map