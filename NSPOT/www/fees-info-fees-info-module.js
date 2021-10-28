(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fees-info-fees-info-module"],{

/***/ "0/+7":
/*!***********************************************************!*\
  !*** ./src/app/post-course/fees-info/fees-info.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #028490 !important;\n  margin-bottom: -8px;\n}\n\nion-label {\n  font-family: \"Poppins\" !important;\n}\n\nion-card {\n  padding: 15px !important;\n  background: #F8F8F8;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\n.ion-button {\n  margin: 0 auto;\n  display: block;\n  background: #028490;\n  margin-top: 20px;\n  color: white;\n  padding: 21px;\n  border-radius: 14px;\n}\n\n.toolbar-background {\n  --border-width: 0px !important;\n  border: 0 !important;\n}\n\n.toolbar-container {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.ToolbarVerde {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\nimg {\n  margin: 0 auto;\n  margin-top: 10px;\n  display: block;\n}\n\nh5 {\n  text-align: center;\n  font-family: \"Poppins\";\n  font-weight: 300;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.instiutenamerow {\n  color: white;\n  padding: 10px;\n}\n\np {\n  text-align: center;\n}\n\nsvg {\n  margin: 0 auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmZWVzLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUNBQUE7QUFBSjs7QUFHQTtFQUdJLHdCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSw4QkFBQTtFQUNBLG9CQUFBO0FBRko7O0FBS0E7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBRko7O0FBS0E7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7RUFHSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFPQTtFQUVJLFlBQUE7RUFFQSxhQUFBO0FBTko7O0FBU0E7RUFDSSxrQkFBQTtBQU5KOztBQVNBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFOSiIsImZpbGUiOiJmZWVzLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjMGMyZjZjICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjg0OTAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIC8vIHdpZHRoOiAxNDNweDtcclxuICAgIC8vIGhlaWdodDogMTQzcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDI4NDkwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9vbGJhci1jb250YWluZXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5Ub29sYmFyVmVyZGUge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDUge1xyXG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmluc3RpdXRlbmFtZXJvdyB7XHJcbiAgICAvLyBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzBjMmY2YztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */");

/***/ }),

/***/ "I02v":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-course/fees-info/fees-info.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>NSPOT</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row style=\"    color: #0000007d;\r\n  background: #f4f4f4;\r\n  \">\r\n        <ion-col size=\"12\">\r\n            <h4 style=\"text-align: center;\">FEE INFO</h4>\r\n\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-item>\r\n        <ion-label>Fees Payment Tenure</ion-label>\r\n        <ion-select placeholder=\"Select One\" [(ngModel)]=\"postaCource.feepaymenttenure\">\r\n            <ion-select-option *ngFor=\"let s of feePayments\" value=\"{{s.id}}\">{{s.title}}</ion-select-option>\r\n\r\n        </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label position=\"floating\">Total Course Fee (for selected Tenure)</ion-label>\r\n        <ion-input [(ngModel)]=\"postaCource.courseFee\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label position=\"floating\">Scholarship Name</ion-label>\r\n        <ion-input [(ngModel)]=\"postaCource.Scholarship\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label position=\"floating\">Scholarship Amount</ion-label>\r\n        <ion-input [(ngModel)]=\"postaCource.ScholarshipAmount\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n        <ion-label>Valid Upto</ion-label>\r\n\r\n        <ion-datetime [(ngModel)]=\"postaCource.ValidUpto\" displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\r\n\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label>Bank Account</ion-label>\r\n        <ion-select placeholder=\"Select One\" [(ngModel)]=\"postaCource.bankAcoount\">\r\n            <ion-select-option *ngFor=\"let s of bankAcoountList\" value=\"{{s.id}}\">{{s.name}}</ion-select-option>\r\n\r\n        </ion-select>\r\n    </ion-item>\r\n    <button class=\"ion-button\" (click)=\"CalculateFee(postaCource.courseFee)\">Calculate Fee</button>\r\n\r\n\r\n    <ion-card>\r\n        <ion-row>\r\n            <ion-col size=\"6\">\r\n                <p>NSPOT SERVICE CHARGES</p>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n                <p>{{serviceCharge}}</p>\r\n\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n                <p>BANK CHARGES</p>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n                <p>{{bankCharge}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n                <p>TAX</p>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n                <p>{{taxCharge}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n                <p>Total Fee</p>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n                <p>{{totalfee}}</p>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-card>\r\n\r\n    <button class=\"ion-button\" style=\"width: 80%;\" (click)=\"submit()\">Submit</button>\r\n\r\n</ion-content>");

/***/ }),

/***/ "PmrE":
/*!*******************************************************************!*\
  !*** ./src/app/post-course/fees-info/fees-info-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: FeesInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesInfoPageRoutingModule", function() { return FeesInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fees_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fees-info.page */ "etB/");




const routes = [
    {
        path: '',
        component: _fees_info_page__WEBPACK_IMPORTED_MODULE_3__["FeesInfoPage"]
    }
];
let FeesInfoPageRoutingModule = class FeesInfoPageRoutingModule {
};
FeesInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeesInfoPageRoutingModule);



/***/ }),

/***/ "etB/":
/*!*********************************************************!*\
  !*** ./src/app/post-course/fees-info/fees-info.page.ts ***!
  \*********************************************************/
/*! exports provided: FeesInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesInfoPage", function() { return FeesInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fees_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fees-info.page.html */ "I02v");
/* harmony import */ var _fees_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fees-info.page.scss */ "0/+7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models_postaCourse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_models/postaCourse */ "toLk");
/* harmony import */ var src_app_services_institute_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/institute.service */ "onIP");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/loader.service */ "nFbz");
/* harmony import */ var src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/toaster.service */ "UIBc");









let FeesInfoPage = class FeesInfoPage {
    constructor(instituteservice, router, loader, toaster) {
        this.instituteservice = instituteservice;
        this.router = router;
        this.loader = loader;
        this.toaster = toaster;
        this.feePayments = [];
        this.postaCource = new src_app_models_postaCourse__WEBPACK_IMPORTED_MODULE_5__["Postacourse"]();
        this.serviceCharge = "0.0";
        this.bankCharge = "0.0";
        this.taxCharge = "0.0";
        this.bankAcoountList = [];
        this.instituteLoginDetails = [];
        this.instutecoursedetails = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
        this.instituteId = this.instituteLoginDetails['userProfile'].userRole;
        this.instutecoursedetails = JSON.parse(sessionStorage.getItem("post-course"));
        this.institutecocourseId = this.instutecoursedetails['data'].id;
        this.feepaymetTeture();
        this.getbankaccountDetails();
    }
    feepaymetTeture() {
        this.instituteservice.getpaymetTenture().subscribe(data => {
            this.feePayments = data['data'];
        }, error => {
        });
    }
    getbankaccountDetails() {
        this.instituteservice.getbankDetailByInstId(this.instituteId).subscribe(data => {
            this.bankAcoountList = data['data'];
        }, error => {
        });
    }
    CalculateFee(fee) {
        console.log(fee);
        this.instituteservice.calculatenspotFee(fee).subscribe(data => {
            this.serviceCharge = data['data'].nspotFee;
            this.bankCharge = data['data'].bankCharge;
            this.taxCharge = data['data'].nspotTax;
            this.totalfee = this.serviceCharge + this.bankCharge + this.taxCharge;
        }, error => {
        });
    }
    submit() {
        this.loader.present();
        let req = {
            amount: this.postaCource.ScholarshipAmount,
            bankAccountId: this.postaCource.bankAcoount,
            hasScolarship: true,
            instituteCourseId: this.institutecocourseId,
            otherFee: this.postaCource.courseFee,
            paymentTenureId: this.postaCource.feepaymenttenure,
            title: this.postaCource.Scholarship,
            validUpto: this.postaCource.ValidUpto,
        };
        console.log(req);
        this.instituteservice.addfeesStructuretoinstitute(req, this.instituteId).subscribe(data => {
            this.loader.dismiss();
            this.toaster.feeInfoAdded();
            this.router.navigateByUrl('/post-course/eligibility-required');
        }, error => {
            this.loader.dismiss();
            this.toaster.errorfeeInfoAdded();
        });
    }
};
FeesInfoPage.ctorParameters = () => [
    { type: src_app_services_institute_service__WEBPACK_IMPORTED_MODULE_6__["InstituteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] }
];
FeesInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fees-info',
        template: _raw_loader_fees_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fees_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FeesInfoPage);



/***/ }),

/***/ "x1Ha":
/*!***********************************************************!*\
  !*** ./src/app/post-course/fees-info/fees-info.module.ts ***!
  \***********************************************************/
/*! exports provided: FeesInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesInfoPageModule", function() { return FeesInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fees_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fees-info-routing.module */ "PmrE");
/* harmony import */ var _fees_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fees-info.page */ "etB/");







let FeesInfoPageModule = class FeesInfoPageModule {
};
FeesInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fees_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeesInfoPageRoutingModule"]
        ],
        declarations: [_fees_info_page__WEBPACK_IMPORTED_MODULE_6__["FeesInfoPage"]]
    })
], FeesInfoPageModule);



/***/ })

}]);
//# sourceMappingURL=fees-info-fees-info-module.js.map