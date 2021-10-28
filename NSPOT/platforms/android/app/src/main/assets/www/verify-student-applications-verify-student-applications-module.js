(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-student-applications-verify-student-applications-module"],{

/***/ "3nCV":
/*!*******************************************************************************************!*\
  !*** ./src/app/verify-student-applications/verify-student-applications-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: VerifyStudentApplicationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyStudentApplicationsPageRoutingModule", function() { return VerifyStudentApplicationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _verify_student_applications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verify-student-applications.page */ "67Xj");




const routes = [
    {
        path: '',
        component: _verify_student_applications_page__WEBPACK_IMPORTED_MODULE_3__["VerifyStudentApplicationsPage"]
    }
];
let VerifyStudentApplicationsPageRoutingModule = class VerifyStudentApplicationsPageRoutingModule {
};
VerifyStudentApplicationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerifyStudentApplicationsPageRoutingModule);



/***/ }),

/***/ "67Xj":
/*!*********************************************************************************!*\
  !*** ./src/app/verify-student-applications/verify-student-applications.page.ts ***!
  \*********************************************************************************/
/*! exports provided: VerifyStudentApplicationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyStudentApplicationsPage", function() { return VerifyStudentApplicationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verify_student_applications_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verify-student-applications.page.html */ "J8le");
/* harmony import */ var _verify_student_applications_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify-student-applications.page.scss */ "Si/V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let VerifyStudentApplicationsPage = class VerifyStudentApplicationsPage {
    constructor() {
        this.applicationtype = 'PreApplications';
    }
    ngOnInit() {
    }
    segmentChanged(event) {
        console.log(event);
    }
};
VerifyStudentApplicationsPage.ctorParameters = () => [];
VerifyStudentApplicationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify-student-applications',
        template: _raw_loader_verify_student_applications_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verify_student_applications_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerifyStudentApplicationsPage);



/***/ }),

/***/ "J8le":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify-student-applications/verify-student-applications.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <button routerLink=\"/navigaiondrawer\">s</button> -->\r\n            <!-- <IonMenuButton> </IonMenuButton> -->\r\n            <!-- <ion-menu-button auto-hide=\"false\"></ion-menu-button> -->\r\n\r\n            <!-- <ion-icon name=\"arrow-back-sharp\"></ion-icon> -->\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>NSPOT</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row style=\"    color: #0000007d;\r\n  background: #f4f4f4;\r\n  \">\r\n        <ion-col size=\"12\">\r\n            <h4 style=\"text-align: center;\r\n          color: #00000096;\r\n          font-family: 'Poppins';\r\n          font-weight: bold;\">Verify Student Applications</h4>\r\n\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-item>\r\n                <ion-label>Choose Course</ion-label>\r\n                <ion-select placeholder=\"Select One\">\r\n                    <ion-select-option value=\"f\">c1</ion-select-option>\r\n                    <ion-select-option value=\"m\">c2</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n    <ion-segment [(ngModel)]=\"applicationtype\" (ionChange)=\"segmentChanged($event)\">\r\n        <ion-segment-button value=\"PreApplications\">\r\n            <ion-label>Pre Applications</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"Paymentawaiting\">\r\n            <ion-label>Payment awaiting Applications</ion-label>\r\n        </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <ion-row *ngIf=\"applicationtype == 'PreApplications'\">\r\n        <ion-col>\r\n            <ion-card>\r\n                <p style=\"text-align: left;\">NAME OF APPLICANT</p>\r\n                <p style=\"text-align: left;\">DATE OF REPORTING</p>\r\n                <p style=\"text-align: left;\">DATE OF APTITUDE TEST</p>\r\n                <p style=\"text-align: left;\">DATE OF ONLINE INTERVIEW</p>\r\n                <p style=\"text-align: left;\">ADMISSION APPROVAL</p>\r\n                <button class=\"viewmore\">View More</button>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"applicationtype == 'Paymentawaiting'\">\r\n        <ion-col>\r\n            <ion-card>\r\n                <p style=\"text-align: left;\">NAME OF APPLICANT</p>\r\n                <p style=\"text-align: left;\">DATE OF REPORTING</p>\r\n                <p style=\"text-align: left;\">DETAILS</p>\r\n                <p style=\"text-align: left;\">REMARKS</p>\r\n                <p style=\"text-align: left;\">ADMISSION APPROVAL</p>\r\n                <button class=\"viewmore\">View More</button>\r\n\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>");

/***/ }),

/***/ "Si/V":
/*!***********************************************************************************!*\
  !*** ./src/app/verify-student-applications/verify-student-applications.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #028490 !important;\n  margin-bottom: -8px;\n}\n\np {\n  padding: 11px;\n}\n\n.btn-primary {\n  margin: 0 auto;\n  display: block;\n  background: #028490;\n  color: white;\n  border: none;\n  border-radius: 9px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-right: 12px;\n  padding-left: 11px;\n}\n\nion-toggle {\n  margin: 0 auto;\n  display: block;\n}\n\nion-label {\n  font-size: 9px;\n}\n\nion-card {\n  padding: 15px !important;\n  background: #F8F8F8;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-button {\n  margin-left: 20px;\n  margin-right: 20px;\n  --background: #028490;\n  margin-top: 20px;\n}\n\n.toolbar-background {\n  --border-width: 0px !important;\n  border: 0 !important;\n}\n\n.viewmore {\n  margin: 0 auto;\n  display: block;\n  background: #f8f8f8;\n  border: 2px solid #028490;\n  padding: 6px;\n  border-radius: 6px;\n}\n\n.toolbar-container {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.ToolbarVerde {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\nimg {\n  margin: 0 auto;\n  margin-top: 10px;\n  display: block;\n}\n\nh5 {\n  text-align: center;\n  font-family: \"Poppins\";\n  font-weight: 300;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.instiutenamerow {\n  color: white;\n  padding: 10px;\n}\n\np {\n  text-align: center;\n  margin-bottom: 13px;\n}\n\nsvg {\n  margin: 0 auto;\n  display: block;\n}\n\n.addnew {\n  float: right;\n  background: white;\n  color: #028490;\n  border: 1px solid #028490;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 23px;\n  padding-right: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZlcmlmeS1zdHVkZW50LWFwcGxpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQ0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdBO0VBR0ksd0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7QUFGSjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSw4QkFBQTtFQUNBLG9CQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLQTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUdJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpKOztBQU9BO0VBRUksWUFBQTtFQUVBLGFBQUE7QUFOSjs7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBTko7O0FBU0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQU5KIiwiZmlsZSI6InZlcmlmeS1zdHVkZW50LWFwcGxpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICMwYzJmNmMgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogIzAyODQ5MCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICMwMjg0OTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDExcHg7XHJcbn1cclxuXHJcbmlvbi10b2dnbGUge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICAvLyB3aWR0aDogMTQzcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDE0M3B4O1xyXG4gICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDI4NDkwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZpZXdtb3JlIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAyODQ5MDtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLnRvb2xiYXItY29udGFpbmVyIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uVG9vbGJhclZlcmRlIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIC8vIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbiAgICAvLyBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbnN0aXV0ZW5hbWVyb3cge1xyXG4gICAgLy8gcGFkZGluZzogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICMwYzJmNmM7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYWRkbmV3IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMwMjg0OTA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDI4NDkwO1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIzcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "oZMW":
/*!***********************************************************************************!*\
  !*** ./src/app/verify-student-applications/verify-student-applications.module.ts ***!
  \***********************************************************************************/
/*! exports provided: VerifyStudentApplicationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyStudentApplicationsPageModule", function() { return VerifyStudentApplicationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _verify_student_applications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify-student-applications-routing.module */ "3nCV");
/* harmony import */ var _verify_student_applications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify-student-applications.page */ "67Xj");







let VerifyStudentApplicationsPageModule = class VerifyStudentApplicationsPageModule {
};
VerifyStudentApplicationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verify_student_applications_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyStudentApplicationsPageRoutingModule"]
        ],
        declarations: [_verify_student_applications_page__WEBPACK_IMPORTED_MODULE_6__["VerifyStudentApplicationsPage"]]
    })
], VerifyStudentApplicationsPageModule);



/***/ })

}]);
//# sourceMappingURL=verify-student-applications-verify-student-applications-module.js.map