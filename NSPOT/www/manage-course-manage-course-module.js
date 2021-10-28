(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-course-manage-course-module"],{

/***/ "BhMe":
/*!*******************************************************!*\
  !*** ./src/app/manage-course/manage-course.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #028490 !important;\n  margin-bottom: -8px;\n}\n\np {\n  padding: 11px;\n}\n\n.btn-primary {\n  margin: 0 auto;\n  display: block;\n  background: #028490;\n  color: white;\n  border: none;\n  border-radius: 9px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-right: 12px;\n  padding-left: 11px;\n}\n\nion-toggle {\n  margin: 0 auto;\n  display: block;\n}\n\nion-label {\n  font-family: \"Poppins\" !important;\n}\n\nion-card {\n  padding: 15px !important;\n  background: #F8F8F8;\n  font-family: \"Poppins\";\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-button {\n  margin-left: 20px;\n  margin-right: 20px;\n  --background: #028490;\n  margin-top: 20px;\n}\n\n.toolbar-background {\n  --border-width: 0px !important;\n  border: 0 !important;\n}\n\n.toolbar-container {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.ToolbarVerde {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\nimg {\n  margin: 0 auto;\n  margin-top: 10px;\n  display: block;\n}\n\nh5 {\n  text-align: center;\n  font-family: \"Poppins\";\n  font-weight: 300;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.instiutenamerow {\n  color: white;\n  padding: 10px;\n}\n\np {\n  text-align: center;\n}\n\nsvg {\n  margin: 0 auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1hbmFnZS1jb3Vyc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGlDQUFBO0FBQUo7O0FBR0E7RUFHSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksOEJBQUE7RUFDQSxvQkFBQTtBQUZKOztBQUtBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUZKOztBQUtBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBR0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSko7O0FBT0E7RUFFSSxZQUFBO0VBRUEsYUFBQTtBQU5KOztBQVNBO0VBQ0ksa0JBQUE7QUFOSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBTkoiLCJmaWxlIjoibWFuYWdlLWNvdXJzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICMwYzJmNmMgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogIzAyODQ5MCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICMwMjg0OTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDExcHg7XHJcbn1cclxuXHJcbmlvbi10b2dnbGUge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgLy8gd2lkdGg6IDE0M3B4O1xyXG4gICAgLy8gaGVpZ2h0OiAxNDNweDtcclxuICAgIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjg0OTA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9vbGJhci1jb250YWluZXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5Ub29sYmFyVmVyZGUge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDUge1xyXG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmluc3RpdXRlbmFtZXJvdyB7XHJcbiAgICAvLyBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzBjMmY2YztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */");

/***/ }),

/***/ "GQyR":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-course/manage-course.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <button routerLink=\"/navigaiondrawer\">s</button> -->\r\n            <!-- <IonMenuButton> </IonMenuButton> -->\r\n            <!-- <ion-menu-button auto-hide=\"false\"></ion-menu-button> -->\r\n\r\n            <!-- <ion-icon name=\"arrow-back-sharp\"></ion-icon> -->\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>NSPOT</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-item>\r\n                <ion-label>Academic Levels</ion-label>\r\n                <ion-select placeholder=\"Select One\">\r\n                    <ion-select-option value=\"f\">primary</ion-select-option>\r\n                    <ion-select-option value=\"m\">seconday</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n        <ion-col size=\"12\" *ngFor=\"let ins of institutecourseList\">\r\n            <ion-card>\r\n                <p>Course Name</p>\r\n                <p>View Applications</p>\r\n                <!-- <ion-toggle color=\"primary\"></ion-toggle>\r\n                <ion-toggle ion-toggle-text=\"online;offline\" ng-model=\"customText\" toggle-class=\"toggle-my-theme\">\r\n                    Custom text: <b>{{ customText || false }}</b>\r\n                </ion-toggle> -->\r\n                <ion-toggle color=\"primary\"></ion-toggle>\r\n                <button class=\"btn btn-primary\">\r\n                  <ion-icon name=\"create-outline\"></ion-icon>\r\n                  Edit\r\n                </button>\r\n            </ion-card>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"12\">\r\n            <ion-card>\r\n                <p>Course Name</p>\r\n            </ion-card>\r\n        </ion-col> -->\r\n    </ion-row>\r\n\r\n</ion-content>");

/***/ }),

/***/ "WjGH":
/*!*******************************************************!*\
  !*** ./src/app/manage-course/manage-course.module.ts ***!
  \*******************************************************/
/*! exports provided: ManageCoursePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCoursePageModule", function() { return ManageCoursePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _manage_course_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-course-routing.module */ "jfQ6");
/* harmony import */ var _manage_course_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-course.page */ "eqls");







let ManageCoursePageModule = class ManageCoursePageModule {
};
ManageCoursePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _manage_course_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageCoursePageRoutingModule"]
        ],
        declarations: [_manage_course_page__WEBPACK_IMPORTED_MODULE_6__["ManageCoursePage"]]
    })
], ManageCoursePageModule);



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

/***/ "eqls":
/*!*****************************************************!*\
  !*** ./src/app/manage-course/manage-course.page.ts ***!
  \*****************************************************/
/*! exports provided: ManageCoursePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCoursePage", function() { return ManageCoursePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manage_course_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manage-course.page.html */ "GQyR");
/* harmony import */ var _manage_course_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-course.page.scss */ "BhMe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_institute_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/institute.service */ "onIP");





let ManageCoursePage = class ManageCoursePage {
    constructor(instituteService) {
        this.instituteService = instituteService;
        this.instituteLoginDetails = [];
        this.institutecourseList = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
        this.instituteId = this.instituteLoginDetails['userProfile'].userRole;
        this.getallcourserbyInstitute();
    }
    getallcourserbyInstitute() {
        this.instituteService.getallinstutecourses(this.instituteId).subscribe(data => {
            this.institutecourseList = data['data'];
        }, error => {
        });
    }
};
ManageCoursePage.ctorParameters = () => [
    { type: _services_institute_service__WEBPACK_IMPORTED_MODULE_4__["InstituteService"] }
];
ManageCoursePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-manage-course',
        template: _raw_loader_manage_course_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_manage_course_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ManageCoursePage);



/***/ }),

/***/ "jfQ6":
/*!***************************************************************!*\
  !*** ./src/app/manage-course/manage-course-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ManageCoursePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCoursePageRoutingModule", function() { return ManageCoursePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _manage_course_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-course.page */ "eqls");




const routes = [
    {
        path: '',
        component: _manage_course_page__WEBPACK_IMPORTED_MODULE_3__["ManageCoursePage"]
    }
];
let ManageCoursePageRoutingModule = class ManageCoursePageRoutingModule {
};
ManageCoursePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManageCoursePageRoutingModule);



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
//# sourceMappingURL=manage-course-manage-course-module.js.map