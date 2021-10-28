(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addmission-officerlist-addmission-officerlist-module"],{

/***/ "2cn0":
/*!*************************************************************************!*\
  !*** ./src/app/addmission-officerlist/addmission-officerlist.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #028490 !important;\n  margin-bottom: -8px;\n}\n\np {\n  padding: 11px;\n}\n\n.btn-primary {\n  margin: 0 auto;\n  display: block;\n  background: #028490;\n  color: white;\n  border: none;\n  border-radius: 9px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-right: 12px;\n  padding-left: 11px;\n}\n\nion-toggle {\n  margin: 0 auto;\n  display: block;\n}\n\nion-card {\n  padding: 15px !important;\n  background: #F8F8F8;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-button {\n  margin-left: 20px;\n  margin-right: 20px;\n  --background: #028490;\n  margin-top: 20px;\n}\n\n.toolbar-background {\n  --border-width: 0px !important;\n  border: 0 !important;\n}\n\n.toolbar-container {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.ToolbarVerde {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\nimg {\n  margin: 0 auto;\n  margin-top: 10px;\n  display: block;\n}\n\nh5 {\n  text-align: center;\n  font-family: \"Poppins\";\n  font-weight: 300;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.instiutenamerow {\n  color: white;\n  padding: 10px;\n}\n\np {\n  text-align: center;\n  margin-bottom: 13px;\n  font-weight: bold;\n  font-family: \"Poppins\";\n}\n\nsvg {\n  margin: 0 auto;\n  display: block;\n}\n\n.addnew {\n  float: right;\n  background: white;\n  color: #028490;\n  border: 1px solid #028490;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-family: \"Poppins\";\n  padding-left: 23px;\n  padding-right: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZG1pc3Npb24tb2ZmaWNlcmxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUdJLHdCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksOEJBQUE7RUFDQSxvQkFBQTtBQUZKOztBQUtBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUZKOztBQUtBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBR0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSko7O0FBT0E7RUFFSSxZQUFBO0VBRUEsYUFBQTtBQU5KOztBQVNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFOSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBTko7O0FBU0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTkoiLCJmaWxlIjoiYWRkbWlzc2lvbi1vZmZpY2VybGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICMwYzJmNmMgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogIzAyODQ5MCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICMwMjg0OTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDExcHg7XHJcbn1cclxuXHJcbmlvbi10b2dnbGUge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgLy8gd2lkdGg6IDE0M3B4O1xyXG4gICAgLy8gaGVpZ2h0OiAxNDNweDtcclxuICAgIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzAyODQ5MDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50b29sYmFyLWJhY2tncm91bmQge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b29sYmFyLWNvbnRhaW5lciB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLlRvb2xiYXJWZXJkZSB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgICAvLyB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgLy8gZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW5zdGl1dGVuYW1lcm93IHtcclxuICAgIC8vIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMGMyZjZjO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmFkZG5ldyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDI4NDkwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAyODQ5MDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjNweDtcclxufSJdfQ== */");

/***/ }),

/***/ "8sOx":
/*!*************************************************************************!*\
  !*** ./src/app/addmission-officerlist/addmission-officerlist.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddmissionOfficerlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmissionOfficerlistPageModule", function() { return AddmissionOfficerlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _addmission_officerlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addmission-officerlist-routing.module */ "Nv8u");
/* harmony import */ var _addmission_officerlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addmission-officerlist.page */ "LfQq");







let AddmissionOfficerlistPageModule = class AddmissionOfficerlistPageModule {
};
AddmissionOfficerlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addmission_officerlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddmissionOfficerlistPageRoutingModule"]
        ],
        declarations: [_addmission_officerlist_page__WEBPACK_IMPORTED_MODULE_6__["AddmissionOfficerlistPage"]]
    })
], AddmissionOfficerlistPageModule);



/***/ }),

/***/ "LfQq":
/*!***********************************************************************!*\
  !*** ./src/app/addmission-officerlist/addmission-officerlist.page.ts ***!
  \***********************************************************************/
/*! exports provided: AddmissionOfficerlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmissionOfficerlistPage", function() { return AddmissionOfficerlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addmission_officerlist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addmission-officerlist.page.html */ "m3HY");
/* harmony import */ var _addmission_officerlist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addmission-officerlist.page.scss */ "2cn0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_institute_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/institute.service */ "onIP");






let AddmissionOfficerlistPage = class AddmissionOfficerlistPage {
    constructor(instituteservice, router) {
        this.instituteservice = instituteservice;
        this.router = router;
        this.instituteLoginDetails = [];
        this.addmisiionOfficerList = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
        this.instituteId = this.instituteLoginDetails['userProfile'].userRole;
        this.getalloffiers();
    }
    getalloffiers() {
        this.instituteservice.getalladdmissionOfficer(this.instituteId).subscribe(data => {
            this.addmisiionOfficerList = data['data'];
        }, error => {
        });
    }
};
AddmissionOfficerlistPage.ctorParameters = () => [
    { type: _services_institute_service__WEBPACK_IMPORTED_MODULE_5__["InstituteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddmissionOfficerlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addmission-officerlist',
        template: _raw_loader_addmission_officerlist_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addmission_officerlist_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddmissionOfficerlistPage);



/***/ }),

/***/ "Nv8u":
/*!*********************************************************************************!*\
  !*** ./src/app/addmission-officerlist/addmission-officerlist-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AddmissionOfficerlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmissionOfficerlistPageRoutingModule", function() { return AddmissionOfficerlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _addmission_officerlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addmission-officerlist.page */ "LfQq");




const routes = [
    {
        path: '',
        component: _addmission_officerlist_page__WEBPACK_IMPORTED_MODULE_3__["AddmissionOfficerlistPage"]
    }
];
let AddmissionOfficerlistPageRoutingModule = class AddmissionOfficerlistPageRoutingModule {
};
AddmissionOfficerlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddmissionOfficerlistPageRoutingModule);



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

/***/ "m3HY":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addmission-officerlist/addmission-officerlist.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <button routerLink=\"/navigaiondrawer\">s</button> -->\r\n            <!-- <IonMenuButton> </IonMenuButton> -->\r\n            <!-- <ion-menu-button auto-hide=\"false\"></ion-menu-button> -->\r\n\r\n            <!-- <ion-icon name=\"arrow-back-sharp\"></ion-icon> -->\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>NSPOT</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-row style=\"    color: #0000007d;\r\n    background: #f4f4f4;\r\n    \">\r\n        <ion-col size=\"12\">\r\n            <h4 style=\"text-align: center;\">Admission Officers</h4>\r\n\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col>\r\n            <button class=\"addnew\" routerLink=\"/add-addmission-officerlist\">Add New</button>\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n        <ion-col size=\"12\" *ngFor=\"let addmisiionOfficerList of addmisiionOfficerList\">\r\n            <ion-card>\r\n                <p>{{addmisiionOfficerList.name}}</p>\r\n                <p>{{addmisiionOfficerList.designation}} ,{{addmisiionOfficerList.admissionDepartment}}</p>\r\n                <!-- <ion-toggle color=\"primary\"></ion-toggle>\r\n              <ion-toggle ion-toggle-text=\"online;offline\" ng-model=\"customText\" toggle-class=\"toggle-my-theme\">\r\n                  Custom text: <b>{{ customText || false }}</b>\r\n              </ion-toggle> -->\r\n                <button class=\"btn btn-primary\">\r\n                <ion-icon name=\"create-outline\"></ion-icon>\r\n                Edit\r\n              </button>\r\n            </ion-card>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"12\">\r\n          <ion-card>\r\n              <p>Course Name</p>\r\n          </ion-card>\r\n      </ion-col> -->\r\n    </ion-row>\r\n</ion-content>");

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
//# sourceMappingURL=addmission-officerlist-addmission-officerlist-module.js.map