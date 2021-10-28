(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bank-info-bank-info-module"],{

/***/ "3FO+":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bank-info/bank-info.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <button routerLink=\"/navigaiondrawer\">s</button> -->\r\n            <!-- <IonMenuButton> </IonMenuButton> -->\r\n            <!-- <ion-menu-button auto-hide=\"false\"></ion-menu-button> -->\r\n\r\n            <!-- <ion-icon name=\"arrow-back-sharp\"></ion-icon> -->\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>NSPOT</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row style=\"    color: #0000007d;\r\n  background: #f4f4f4;\r\n  \">\r\n        <ion-col size=\"12\">\r\n            <h4 style=\"text-align: center;\r\n          color: #00000096;\r\n          font-family: 'Poppins';\r\n          font-weight: bold;\">Bank Info</h4>\r\n\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-card>\r\n                <p style=\"text-align: left;\">Nickname</p>\r\n                <p style=\"text-align: left;\"> Account Holder's Name</p>\r\n                <p style=\"text-align: left;\">Account No</p>\r\n                <p style=\"text-align: left;\"> IFSC Code</p>\r\n\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/add-new-bank-info\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n</ion-content>");

/***/ }),

/***/ "Gt1z":
/*!***********************************************!*\
  !*** ./src/app/bank-info/bank-info.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #028490 !important;\n  margin-bottom: -8px;\n}\n\np {\n  padding: 11px;\n}\n\n.btn-primary {\n  margin: 0 auto;\n  display: block;\n  background: #028490;\n  color: white;\n  border: none;\n  border-radius: 9px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-right: 12px;\n  padding-left: 11px;\n}\n\nion-toggle {\n  margin: 0 auto;\n  display: block;\n}\n\nion-card {\n  padding: 15px !important;\n  background: #F8F8F8;\n}\n\nion-fab-button {\n  --background: #028490;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-button {\n  margin-left: 20px;\n  margin-right: 20px;\n  --background: #028490;\n  margin-top: 20px;\n}\n\n.toolbar-background {\n  --border-width: 0px !important;\n  border: 0 !important;\n}\n\n.toolbar-container {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.ToolbarVerde {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\nimg {\n  margin: 0 auto;\n  margin-top: 10px;\n  display: block;\n}\n\nh5 {\n  text-align: center;\n  font-family: \"Poppins\";\n  font-weight: 300;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.instiutenamerow {\n  color: white;\n  padding: 10px;\n}\n\np {\n  text-align: center;\n  margin-bottom: 13px;\n}\n\nsvg {\n  margin: 0 auto;\n  display: block;\n}\n\n.addnew {\n  float: right;\n  background: white;\n  color: #028490;\n  border: 1px solid #028490;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 23px;\n  padding-right: 23px;\n}\n\n.viewmore {\n  margin: 0 auto;\n  display: block;\n  background: #f8f8f8;\n  border: 2px solid #028490;\n  padding: 6px;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJhbmstaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQ0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBR0ksd0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0kscUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksOEJBQUE7RUFDQSxvQkFBQTtBQUZKOztBQUtBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUZKOztBQUtBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBR0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSko7O0FBT0E7RUFFSSxZQUFBO0VBRUEsYUFBQTtBQU5KOztBQVNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFOSjs7QUFTQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFOSiIsImZpbGUiOiJiYW5rLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjMGMyZjZjICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjg0OTAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgcGFkZGluZzogMTFweDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDI4NDkwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMXB4O1xyXG59XHJcblxyXG5pb24tdG9nZ2xlIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIC8vIHdpZHRoOiAxNDNweDtcclxuICAgIC8vIGhlaWdodDogMTQzcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG59XHJcblxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjg0OTA7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzAyODQ5MDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50b29sYmFyLWJhY2tncm91bmQge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b29sYmFyLWNvbnRhaW5lciB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLlRvb2xiYXJWZXJkZSB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgICAvLyB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgLy8gZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW5zdGl1dGVuYW1lcm93IHtcclxuICAgIC8vIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMGMyZjZjO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmFkZG5ldyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDI4NDkwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAyODQ5MDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyM3B4O1xyXG59XHJcblxyXG4udmlld21vcmUge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDI4NDkwO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59Il19 */");

/***/ }),

/***/ "GtBn":
/*!*******************************************************!*\
  !*** ./src/app/bank-info/bank-info-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: BankInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankInfoPageRoutingModule", function() { return BankInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bank_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bank-info.page */ "o/29");




const routes = [
    {
        path: '',
        component: _bank_info_page__WEBPACK_IMPORTED_MODULE_3__["BankInfoPage"]
    }
];
let BankInfoPageRoutingModule = class BankInfoPageRoutingModule {
};
BankInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BankInfoPageRoutingModule);



/***/ }),

/***/ "kA5L":
/*!***********************************************!*\
  !*** ./src/app/bank-info/bank-info.module.ts ***!
  \***********************************************/
/*! exports provided: BankInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankInfoPageModule", function() { return BankInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _bank_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bank-info-routing.module */ "GtBn");
/* harmony import */ var _bank_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bank-info.page */ "o/29");







let BankInfoPageModule = class BankInfoPageModule {
};
BankInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bank_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["BankInfoPageRoutingModule"]
        ],
        declarations: [_bank_info_page__WEBPACK_IMPORTED_MODULE_6__["BankInfoPage"]]
    })
], BankInfoPageModule);



/***/ }),

/***/ "o/29":
/*!*********************************************!*\
  !*** ./src/app/bank-info/bank-info.page.ts ***!
  \*********************************************/
/*! exports provided: BankInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankInfoPage", function() { return BankInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bank_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bank-info.page.html */ "3FO+");
/* harmony import */ var _bank_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank-info.page.scss */ "Gt1z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BankInfoPage = class BankInfoPage {
    constructor() { }
    ngOnInit() {
    }
};
BankInfoPage.ctorParameters = () => [];
BankInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bank-info',
        template: _raw_loader_bank_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bank_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BankInfoPage);



/***/ })

}]);
//# sourceMappingURL=bank-info-bank-info-module.js.map