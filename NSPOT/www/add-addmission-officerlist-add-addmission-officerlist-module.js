(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-addmission-officerlist-add-addmission-officerlist-module"],{

/***/ "+xEt":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-addmission-officerlist/add-addmission-officerlist.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <button routerLink=\"/navigaiondrawer\">s</button> -->\r\n            <!-- <IonMenuButton> </IonMenuButton> -->\r\n            <!-- <ion-menu-button auto-hide=\"false\"></ion-menu-button> -->\r\n\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>NSPOT</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row style=\"    color: #0000007d;\r\n  background: #f4f4f4;\r\n  \">\r\n        <ion-col size=\"12\">\r\n            <h4 style=\"text-align: center;\">Add Admission Officers</h4>\r\n        </ion-col>\r\n    </ion-row>\r\n    <div class=\"container\">\r\n\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Name</ion-label>\r\n            <ion-input [(ngModel)]=\"addmisionOfficer.name\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Designation</ion-label>\r\n            <ion-input [(ngModel)]=\"addmisionOfficer.designation\"></ion-input>\r\n\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Email Id</ion-label>\r\n            <ion-input [(ngModel)]=\"addmisionOfficer.email\"></ion-input>\r\n\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Phone Number 1</ion-label>\r\n            <ion-input [(ngModel)]=\"addmisionOfficer.phone1\"></ion-input>\r\n\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Phone Number 2</ion-label>\r\n\r\n            <ion-input [(ngModel)]=\"addmisionOfficer.phone2\"></ion-input>\r\n\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Admission Department</ion-label>\r\n            <ion-input [(ngModel)]=\"addmisionOfficer.admissionDepartment\"></ion-input>\r\n\r\n        </ion-item>\r\n\r\n\r\n\r\n\r\n        <ion-button expand=\"block\" (click)=\"submit()\">SUBMIT</ion-button>\r\n    </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "0XNn":
/*!********************************************!*\
  !*** ./src/app/_models/adminsionOffice.ts ***!
  \********************************************/
/*! exports provided: AddmissionOfficer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmissionOfficer", function() { return AddmissionOfficer; });
class AddmissionOfficer {
}


/***/ }),

/***/ "FgM3":
/*!*****************************************************************************************!*\
  !*** ./src/app/add-addmission-officerlist/add-addmission-officerlist-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddAddmissionOfficerlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddmissionOfficerlistPageRoutingModule", function() { return AddAddmissionOfficerlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_addmission_officerlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-addmission-officerlist.page */ "nbST");




const routes = [
    {
        path: '',
        component: _add_addmission_officerlist_page__WEBPACK_IMPORTED_MODULE_3__["AddAddmissionOfficerlistPage"]
    }
];
let AddAddmissionOfficerlistPageRoutingModule = class AddAddmissionOfficerlistPageRoutingModule {
};
AddAddmissionOfficerlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddAddmissionOfficerlistPageRoutingModule);



/***/ }),

/***/ "KBeX":
/*!*********************************************************************************!*\
  !*** ./src/app/add-addmission-officerlist/add-addmission-officerlist.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #028490 !important;\n  margin-bottom: -8px;\n}\n\np {\n  padding: 11px;\n}\n\n.btn-primary {\n  margin: 0 auto;\n  display: block;\n  background: #028490;\n  color: white;\n  border: none;\n  border-radius: 9px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-right: 12px;\n  padding-left: 11px;\n}\n\nion-toggle {\n  margin: 0 auto;\n  display: block;\n}\n\nion-card {\n  padding: 15px !important;\n  background: #F8F8F8;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-button {\n  margin-left: 20px;\n  margin-right: 20px;\n  --background: #028490;\n  margin-top: 20px;\n}\n\n.toolbar-background {\n  --border-width: 0px !important;\n  border: 0 !important;\n}\n\n.toolbar-container {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.ToolbarVerde {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\nimg {\n  margin: 0 auto;\n  margin-top: 10px;\n  display: block;\n}\n\nh5 {\n  text-align: center;\n  font-family: \"Poppins\";\n  font-weight: 300;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.instiutenamerow {\n  color: white;\n  padding: 10px;\n}\n\np {\n  text-align: center;\n  margin-bottom: 13px;\n  font-family: \"Poppins\";\n}\n\nsvg {\n  margin: 0 auto;\n  display: block;\n}\n\n.addnew {\n  float: right;\n  background: white;\n  color: #028490;\n  border: 1px solid #028490;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 23px;\n  padding-right: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZC1hZGRtaXNzaW9uLW9mZmljZXJsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdDQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFHSSx3QkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLDhCQUFBO0VBQ0Esb0JBQUE7QUFGSjs7QUFLQTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLQTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUdJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpKOztBQU9BO0VBRUksWUFBQTtFQUVBLGFBQUE7QUFOSjs7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQU5KOztBQVNBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFOSjs7QUFTQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTkoiLCJmaWxlIjoiYWRkLWFkZG1pc3Npb24tb2ZmaWNlcmxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjMGMyZjZjICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjg0OTAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgcGFkZGluZzogMTFweDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDI4NDkwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMXB4O1xyXG59XHJcblxyXG5pb24tdG9nZ2xlIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIC8vIHdpZHRoOiAxNDNweDtcclxuICAgIC8vIGhlaWdodDogMTQzcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjg0OTA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9vbGJhci1jb250YWluZXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5Ub29sYmFyVmVyZGUge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDUge1xyXG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmluc3RpdXRlbmFtZXJvdyB7XHJcbiAgICAvLyBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzBjMmY2YztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYWRkbmV3IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMwMjg0OTA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDI4NDkwO1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIzcHg7XHJcbn0iXX0= */");

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

/***/ "nbST":
/*!*******************************************************************************!*\
  !*** ./src/app/add-addmission-officerlist/add-addmission-officerlist.page.ts ***!
  \*******************************************************************************/
/*! exports provided: AddAddmissionOfficerlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddmissionOfficerlistPage", function() { return AddAddmissionOfficerlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_addmission_officerlist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-addmission-officerlist.page.html */ "+xEt");
/* harmony import */ var _add_addmission_officerlist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-addmission-officerlist.page.scss */ "KBeX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models_adminsionOffice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/adminsionOffice */ "0XNn");
/* harmony import */ var _services_institute_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/institute.service */ "onIP");







let AddAddmissionOfficerlistPage = class AddAddmissionOfficerlistPage {
    constructor(instituteservice, router) {
        this.instituteservice = instituteservice;
        this.router = router;
        this.instituteLoginDetails = [];
        this.addmisionOfficer = new _models_adminsionOffice__WEBPACK_IMPORTED_MODULE_5__["AddmissionOfficer"];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
        this.instituteId = this.instituteLoginDetails['userProfile'].userRole;
    }
    submit() {
        let req = {
            admissionDepartment: this.addmisionOfficer.admissionDepartment,
            designation: this.addmisionOfficer.designation,
            email: this.addmisionOfficer.email,
            instituteId: this.instituteId,
            name: this.addmisionOfficer.name,
            phone1: this.addmisionOfficer.phone1,
            phone2: this.addmisionOfficer.phone2,
        };
        this.instituteservice.addAddmissionOfficer(req).subscribe(data => {
            this.router.navigateByUrl('/addmission-officerlist');
        }, error => {
        });
    }
};
AddAddmissionOfficerlistPage.ctorParameters = () => [
    { type: _services_institute_service__WEBPACK_IMPORTED_MODULE_6__["InstituteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddAddmissionOfficerlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-addmission-officerlist',
        template: _raw_loader_add_addmission_officerlist_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_addmission_officerlist_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddAddmissionOfficerlistPage);



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



/***/ }),

/***/ "r2I6":
/*!*********************************************************************************!*\
  !*** ./src/app/add-addmission-officerlist/add-addmission-officerlist.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AddAddmissionOfficerlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddmissionOfficerlistPageModule", function() { return AddAddmissionOfficerlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_addmission_officerlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-addmission-officerlist-routing.module */ "FgM3");
/* harmony import */ var _add_addmission_officerlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-addmission-officerlist.page */ "nbST");







let AddAddmissionOfficerlistPageModule = class AddAddmissionOfficerlistPageModule {
};
AddAddmissionOfficerlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_addmission_officerlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddAddmissionOfficerlistPageRoutingModule"]
        ],
        declarations: [_add_addmission_officerlist_page__WEBPACK_IMPORTED_MODULE_6__["AddAddmissionOfficerlistPage"]]
    })
], AddAddmissionOfficerlistPageModule);



/***/ })

}]);
//# sourceMappingURL=add-addmission-officerlist-add-addmission-officerlist-module.js.map