(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-applications-verify-applications-module"],{

/***/ "1Fl4":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify-applications/verify-applications.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>verify-applications</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "6a/r":
/*!*****************************************************************!*\
  !*** ./src/app/verify-applications/verify-applications.page.ts ***!
  \*****************************************************************/
/*! exports provided: VerifyApplicationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyApplicationsPage", function() { return VerifyApplicationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verify_applications_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verify-applications.page.html */ "1Fl4");
/* harmony import */ var _verify_applications_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify-applications.page.scss */ "Kfrg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let VerifyApplicationsPage = class VerifyApplicationsPage {
    constructor() { }
    ngOnInit() {
    }
};
VerifyApplicationsPage.ctorParameters = () => [];
VerifyApplicationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify-applications',
        template: _raw_loader_verify_applications_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verify_applications_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerifyApplicationsPage);



/***/ }),

/***/ "Kfrg":
/*!*******************************************************************!*\
  !*** ./src/app/verify-applications/verify-applications.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnktYXBwbGljYXRpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "S6aZ":
/*!*******************************************************************!*\
  !*** ./src/app/verify-applications/verify-applications.module.ts ***!
  \*******************************************************************/
/*! exports provided: VerifyApplicationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyApplicationsPageModule", function() { return VerifyApplicationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _verify_applications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify-applications-routing.module */ "TWha");
/* harmony import */ var _verify_applications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify-applications.page */ "6a/r");







let VerifyApplicationsPageModule = class VerifyApplicationsPageModule {
};
VerifyApplicationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verify_applications_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyApplicationsPageRoutingModule"]
        ],
        declarations: [_verify_applications_page__WEBPACK_IMPORTED_MODULE_6__["VerifyApplicationsPage"]]
    })
], VerifyApplicationsPageModule);



/***/ }),

/***/ "TWha":
/*!***************************************************************************!*\
  !*** ./src/app/verify-applications/verify-applications-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: VerifyApplicationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyApplicationsPageRoutingModule", function() { return VerifyApplicationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _verify_applications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verify-applications.page */ "6a/r");




const routes = [
    {
        path: '',
        component: _verify_applications_page__WEBPACK_IMPORTED_MODULE_3__["VerifyApplicationsPage"]
    }
];
let VerifyApplicationsPageRoutingModule = class VerifyApplicationsPageRoutingModule {
};
VerifyApplicationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerifyApplicationsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=verify-applications-verify-applications-module.js.map