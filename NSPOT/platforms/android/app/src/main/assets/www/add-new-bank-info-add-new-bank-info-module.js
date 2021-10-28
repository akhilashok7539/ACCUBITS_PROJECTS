(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-new-bank-info-add-new-bank-info-module"],{

/***/ "2LGE":
/*!***************************************************************!*\
  !*** ./src/app/add-new-bank-info/add-new-bank-info.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #028490 !important;\n  margin-bottom: -8px;\n}\n\np {\n  padding: 11px;\n}\n\n.btn-primary {\n  margin: 0 auto;\n  display: block;\n  background: #028490;\n  color: white;\n  border: none;\n  border-radius: 9px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-right: 12px;\n  padding-left: 11px;\n}\n\nion-toggle {\n  margin: 0 auto;\n  display: block;\n}\n\nion-card {\n  padding: 15px !important;\n  background: #F8F8F8;\n}\n\nion-fab-button {\n  --background: #028490;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-button {\n  margin-left: 20px;\n  margin-right: 20px;\n  --background: #028490;\n  margin-top: 20px;\n}\n\n.toolbar-background {\n  --border-width: 0px !important;\n  border: 0 !important;\n}\n\n.toolbar-container {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.ToolbarVerde {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\nimg {\n  margin: 0 auto;\n  margin-top: 10px;\n  display: block;\n}\n\nh5 {\n  text-align: center;\n  font-family: \"Poppins\";\n  font-weight: 300;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.instiutenamerow {\n  color: white;\n  padding: 10px;\n}\n\np {\n  text-align: center;\n  margin-bottom: 13px;\n}\n\nsvg {\n  margin: 0 auto;\n  display: block;\n}\n\n.addnew {\n  float: right;\n  background: white;\n  color: #028490;\n  border: 1px solid #028490;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 23px;\n  padding-right: 23px;\n}\n\n.viewmore {\n  width: 68%;\n  margin: 0 auto;\n  margin-top: 18px;\n  display: block;\n  background: #ffffff;\n  border: 2px solid #028490;\n  padding: 13px;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZC1uZXctYmFuay1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdDQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFHSSx3QkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxxQkFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7QUFGSjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSw4QkFBQTtFQUNBLG9CQUFBO0FBRko7O0FBS0E7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBRko7O0FBS0E7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7RUFHSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFPQTtFQUVJLFlBQUE7RUFFQSxhQUFBO0FBTko7O0FBU0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVNBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQU5KIiwiZmlsZSI6ImFkZC1uZXctYmFuay1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogIzBjMmY2YyAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDI4NDkwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogIzAyODQ5MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTFweDtcclxufVxyXG5cclxuaW9uLXRvZ2dsZSB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICAvLyB3aWR0aDogMTQzcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDE0M3B4O1xyXG4gICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxufVxyXG5cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDI4NDkwO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjg0OTA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9vbGJhci1jb250YWluZXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5Ub29sYmFyVmVyZGUge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDUge1xyXG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmluc3RpdXRlbmFtZXJvdyB7XHJcbiAgICAvLyBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzBjMmY2YztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxufVxyXG5cclxuc3ZnIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5hZGRuZXcge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogIzAyODQ5MDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMjg0OTA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjNweDtcclxufVxyXG5cclxuLnZpZXdtb3JlIHtcclxuICAgIHdpZHRoOiA2OCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDI4NDkwO1xyXG4gICAgcGFkZGluZzogMTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufSJdfQ== */");

/***/ }),

/***/ "gklq":
/*!*************************************************************!*\
  !*** ./src/app/add-new-bank-info/add-new-bank-info.page.ts ***!
  \*************************************************************/
/*! exports provided: AddNewBankInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewBankInfoPage", function() { return AddNewBankInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_new_bank_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-new-bank-info.page.html */ "wfui");
/* harmony import */ var _add_new_bank_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-new-bank-info.page.scss */ "2LGE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AddNewBankInfoPage = class AddNewBankInfoPage {
    constructor() { }
    ngOnInit() {
    }
};
AddNewBankInfoPage.ctorParameters = () => [];
AddNewBankInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-new-bank-info',
        template: _raw_loader_add_new_bank_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_new_bank_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddNewBankInfoPage);



/***/ }),

/***/ "jYn6":
/*!***********************************************************************!*\
  !*** ./src/app/add-new-bank-info/add-new-bank-info-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AddNewBankInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewBankInfoPageRoutingModule", function() { return AddNewBankInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_new_bank_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-new-bank-info.page */ "gklq");




const routes = [
    {
        path: '',
        component: _add_new_bank_info_page__WEBPACK_IMPORTED_MODULE_3__["AddNewBankInfoPage"]
    }
];
let AddNewBankInfoPageRoutingModule = class AddNewBankInfoPageRoutingModule {
};
AddNewBankInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddNewBankInfoPageRoutingModule);



/***/ }),

/***/ "ngsL":
/*!***************************************************************!*\
  !*** ./src/app/add-new-bank-info/add-new-bank-info.module.ts ***!
  \***************************************************************/
/*! exports provided: AddNewBankInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewBankInfoPageModule", function() { return AddNewBankInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_new_bank_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-new-bank-info-routing.module */ "jYn6");
/* harmony import */ var _add_new_bank_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-new-bank-info.page */ "gklq");







let AddNewBankInfoPageModule = class AddNewBankInfoPageModule {
};
AddNewBankInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_new_bank_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNewBankInfoPageRoutingModule"]
        ],
        declarations: [_add_new_bank_info_page__WEBPACK_IMPORTED_MODULE_6__["AddNewBankInfoPage"]]
    })
], AddNewBankInfoPageModule);



/***/ }),

/***/ "wfui":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-new-bank-info/add-new-bank-info.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <button routerLink=\"/navigaiondrawer\">s</button> -->\r\n            <!-- <IonMenuButton> </IonMenuButton> -->\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>NSPOT</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n    <ion-row style=\"    color: #0000007d;\r\n  background: #f4f4f4;\r\n  \">\r\n        <ion-col size=\"12\">\r\n            <h4 style=\"text-align: center;\">Add New Bank Info</h4>\r\n\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-item>\r\n        <ion-label position=\"floating\">Account Number</ion-label>\r\n        <ion-input></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n        <ion-label position=\"floating\">Account Holder Name</ion-label>\r\n        <ion-input></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n        <ion-label position=\"floating\">IFSC Code</ion-label>\r\n        <ion-input></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n        <ion-label position=\"floating\">Nickname </ion-label>\r\n        <ion-input></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n        <input type=\"file\">\r\n    </ion-item>\r\n\r\n    <button class=\"viewmore\">Submit</button>\r\n\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=add-new-bank-info-add-new-bank-info-module.js.map