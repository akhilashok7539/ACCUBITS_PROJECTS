(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "IqiF":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "h1hx");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "nRCe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _config_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_config/endpoints */ "oCyk");
/* harmony import */ var _services_institute_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/institute.service */ "onIP");








let Tab3Page = class Tab3Page {
    constructor(router, menu, apiservice) {
        this.router = router;
        this.menu = menu;
        this.apiservice = apiservice;
        this.instituteInfo = [];
        this.institutedetails = [];
    }
    logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(['']);
    }
    ionViewWillEnter() {
        this.institutedetails = JSON.parse(localStorage.getItem('userLogin'));
        console.log(this.institutedetails['userProfile'].userType_modelId);
        this.instituteId = this.institutedetails['userProfile'].userType_modelId;
        this.loadInstituteInfo();
    }
    ngOnInit() {
        this.menu.enable(true);
        this.menu.swipeGesture(true);
    }
    ngAfterContentInit() {
        this.menu.enable(true);
        this.menu.swipeGesture(true);
    }
    ngAfterViewInit() {
        this.menu.enable(true);
        this.menu.swipeGesture(true);
    }
    ngOnDestroy() {
        this.menu.enable(true);
        this.menu.swipeGesture(true);
    }
    loadInstituteInfo() {
        // fetching institute details
        this.apiservice.doGetRequest(_config_endpoints__WEBPACK_IMPORTED_MODULE_6__["endPoints"].GetInstituteInfo + this.instituteId).subscribe((returnData) => {
            console.log(returnData);
            this.instituteInfo = returnData.data;
        }, error => {
            console.error(error);
            // this.toastr.error('Failed to fetch institute details')
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_institute_service__WEBPACK_IMPORTED_MODULE_7__["InstituteService"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "OcaV":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "IqiF");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



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

/***/ "h1hx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <button routerLink=\"/navigaiondrawer\">s</button> -->\r\n            <!-- <IonMenuButton> </IonMenuButton> -->\r\n            <ion-menu-button auto-hide=\"false\"></ion-menu-button>\r\n\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>NSPOT</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n    <ion-row style=\"    color: #0000007d;\r\n    background: #f4f4f4;\r\n    \">\r\n        <ion-col size=\"12\">\r\n            <h4 style=\"text-align: center;\">My Account</h4>\r\n\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"    color: #0000007d;\r\n    background: #028490f5;\r\n    \">\r\n        <ion-col size=\"4\">\r\n            <img src=\"./assets/img/user.jpg\" alt=\"\">\r\n\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n            <p style=\"margin-top: 22px;\">{{instituteInfo.name}}</p>\r\n            <p>{{instituteInfo.email}}</p>\r\n\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n        <ion-col size=\"12\">\r\n            <ion-card>\r\n                INSTITUTION KYC INFO\r\n\r\n                <ion-icon style=\"    float: right;\" name=\"chevron-forward-sharp\"></ion-icon>\r\n            </ion-card>\r\n            <ion-card routerLink=\"/bank-info\">\r\n                BANK INFO\r\n\r\n                <ion-icon style=\"    float: right;\" name=\"chevron-forward-sharp\"></ion-icon>\r\n            </ion-card>\r\n            <ion-card>\r\n                BOARD OF COUNCIL AWARDED\r\n\r\n                <ion-icon style=\"    float: right;\" name=\"chevron-forward-sharp\"></ion-icon>\r\n            </ion-card>\r\n            <ion-card>\r\n                DOWNLOADS\r\n\r\n                <ion-icon style=\"    float: right;\" name=\"chevron-forward-sharp\"></ion-icon>\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n                GALLERY\r\n\r\n                <ion-icon style=\"    float: right;\" name=\"chevron-forward-sharp\"></ion-icon>\r\n            </ion-card>\r\n            <ion-card>\r\n                VIRTUAL TOUR\r\n\r\n                <ion-icon style=\"    float: right;\" name=\"chevron-forward-sharp\"></ion-icon>\r\n            </ion-card>\r\n            <ion-card>\r\n                HOSTEL & TRANSPORTATION INFOS\r\n\r\n                <ion-icon style=\"    float: right;\" name=\"chevron-forward-sharp\"></ion-icon>\r\n            </ion-card>\r\n            <ion-card (click)=\"logout()\">\r\n                Logout\r\n                <ion-icon style=\"    float: right;\" name=\"power-sharp\"></ion-icon>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n\r\n</ion-content>\r\n\r\n<!-- \r\n<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\r\n    <ion-header>\r\n        <ion-toolbar color=\"primary\" style=\" --ion-color-base: #028490 !important;\r\n          padding-top: 47px;\r\n    padding-bottom: 47px;\">\r\n      \r\n            <img src=\"./assets/img/NSpot_Logo Png-03.svg\" alt=\"\">\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-item>\r\n                <ion-icon name=\"home-sharp\"></ion-icon>\r\n                <p style=\"color: black;\">Home</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-icon name=\"pulse-sharp\"></ion-icon>\r\n                <p style=\"color: black;\">Live Addmission Desk</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-icon name=\"person-circle-sharp\"></ion-icon>\r\n                <p style=\"color: black;\">Profile</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-icon name=\"mail-open-sharp\"></ion-icon>\r\n                <p style=\"color: black;\">Contact Us</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-icon name=\"arrow-up-circle-sharp\"></ion-icon>\r\n                <p style=\"color: black;\">Upgrade</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-icon name=\"pricetag-sharp\"></ion-icon>\r\n                <p style=\"color: black;\">Payment History</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-icon name=\"power-sharp\"></ion-icon>\r\n                <p style=\"color: black;\">Logout</p>\r\n            </ion-item>\r\n\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"main\"></ion-router-outlet> -->");

/***/ }),

/***/ "k+ul":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "IqiF");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "OcaV");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "nRCe":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #028490 !important;\n  margin-bottom: -8px;\n}\n\nion-card {\n  font-family: \"Poppins\";\n  font-size: 15px;\n  padding: 15px !important;\n  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;\n  background: #F8F8F8;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\n.toolbar-background {\n  --border-width: 0px !important;\n  border: 0 !important;\n}\n\n.toolbar-container {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.ToolbarVerde {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\nimg {\n  margin: 0 auto;\n  /* margin-top: 10px; */\n  margin-top: 10px;\n  width: 135px;\n  display: block;\n}\n\nh5 {\n  font-size: 16px;\n  text-align: center;\n  font-family: \"Poppins\";\n}\n\n.instiutenamerow {\n  color: white;\n  padding: 10px;\n}\n\np {\n  font-family: \"Poppins\";\n  text-align: left;\n  color: white;\n  padding: 4px;\n  margin-bottom: 8px;\n}\n\nsvg {\n  margin: 0 auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBR0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxnSEFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUtBO0VBQ0ksOEJBQUE7RUFDQSxvQkFBQTtBQUZKOztBQUtBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUZKOztBQUtBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBRUksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFISjs7QUFNQTtFQUVJLFlBQUE7RUFFQSxhQUFBO0FBTEo7O0FBUUE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVFBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFMSiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogIzBjMmY2YyAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDI4NDkwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICAvLyB3aWR0aDogMTQzcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDE0M3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDAlKSAwcHggMHB4IDBweCAwcHgsIHJnYigwIDAgMCAvIDAlKSAwcHggMHB4IDBweCAwcHgsIHJnYigwIDAgMCAvIDAlKSAwcHggMHB4IDBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50b29sYmFyLWJhY2tncm91bmQge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b29sYmFyLWNvbnRhaW5lciB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLlRvb2xiYXJWZXJkZSB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDUge1xyXG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbn1cclxuXHJcbi5pbnN0aXV0ZW5hbWVyb3cge1xyXG4gICAgLy8gcGFkZGluZzogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICMwYzJmNmM7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */");

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
//# sourceMappingURL=tab3-tab3-module.js.map