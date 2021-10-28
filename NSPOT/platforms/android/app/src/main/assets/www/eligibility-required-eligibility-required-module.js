(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eligibility-required-eligibility-required-module"],{

/***/ "3MYK":
/*!*********************************************************************************!*\
  !*** ./src/app/post-course/eligibility-required/eligibility-required.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EligibilityRequiredPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EligibilityRequiredPageModule", function() { return EligibilityRequiredPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _eligibility_required_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eligibility-required-routing.module */ "PvW4");
/* harmony import */ var _eligibility_required_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eligibility-required.page */ "gHuu");







let EligibilityRequiredPageModule = class EligibilityRequiredPageModule {
};
EligibilityRequiredPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _eligibility_required_routing_module__WEBPACK_IMPORTED_MODULE_5__["EligibilityRequiredPageRoutingModule"]
        ],
        declarations: [_eligibility_required_page__WEBPACK_IMPORTED_MODULE_6__["EligibilityRequiredPage"]]
    })
], EligibilityRequiredPageModule);



/***/ }),

/***/ "Anmq":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-course/eligibility-required/eligibility-required.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>NSPOT</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row style=\"    color: #0000007d;\r\nbackground: #f4f4f4;\r\n\">\r\n        <ion-col size=\"12\">\r\n            <h4 style=\"text-align: center;\">Eligibility Required</h4>\r\n\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-item>\r\n        <ion-label position=\"floating\">Brief Description </ion-label>\r\n        <ion-textarea [(ngModel)]=\"postaCource.eligibiliyInString\"></ion-textarea>\r\n    </ion-item>\r\n    <button class=\"ion-button\" style=\"width: 80%;\" (click)=\"submit()\">Submit</button>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "PvW4":
/*!*****************************************************************************************!*\
  !*** ./src/app/post-course/eligibility-required/eligibility-required-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: EligibilityRequiredPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EligibilityRequiredPageRoutingModule", function() { return EligibilityRequiredPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _eligibility_required_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eligibility-required.page */ "gHuu");




const routes = [
    {
        path: '',
        component: _eligibility_required_page__WEBPACK_IMPORTED_MODULE_3__["EligibilityRequiredPage"]
    }
];
let EligibilityRequiredPageRoutingModule = class EligibilityRequiredPageRoutingModule {
};
EligibilityRequiredPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EligibilityRequiredPageRoutingModule);



/***/ }),

/***/ "gHuu":
/*!*******************************************************************************!*\
  !*** ./src/app/post-course/eligibility-required/eligibility-required.page.ts ***!
  \*******************************************************************************/
/*! exports provided: EligibilityRequiredPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EligibilityRequiredPage", function() { return EligibilityRequiredPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_eligibility_required_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./eligibility-required.page.html */ "Anmq");
/* harmony import */ var _eligibility_required_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eligibility-required.page.scss */ "sTe7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models_postaCourse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_models/postaCourse */ "toLk");
/* harmony import */ var src_app_services_institute_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/institute.service */ "onIP");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/loader.service */ "nFbz");
/* harmony import */ var src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/toaster.service */ "UIBc");









let EligibilityRequiredPage = class EligibilityRequiredPage {
    constructor(instituteservice, router, loader, toaster) {
        this.instituteservice = instituteservice;
        this.router = router;
        this.loader = loader;
        this.toaster = toaster;
        this.postaCource = new src_app_models_postaCourse__WEBPACK_IMPORTED_MODULE_5__["Postacourse"]();
        this.feePayments = [];
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
    }
    submit() {
        this.loader.present();
        let req = {
            "eligibiliyInString": this.postaCource.eligibiliyInString,
            "instituteCourseId": this.institutecocourseId
        };
        this.instituteservice.addinstituteeligibility(req, this.instituteId).subscribe(data => {
            this.loader.dismiss();
            this.toaster.eligibilityadded();
            this.router.navigateByUrl('/post-course/job-areas');
        }, error => {
            this.loader.dismiss();
            this.toaster.erroreligibilityaddedd();
        });
    }
};
EligibilityRequiredPage.ctorParameters = () => [
    { type: src_app_services_institute_service__WEBPACK_IMPORTED_MODULE_6__["InstituteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] }
];
EligibilityRequiredPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-eligibility-required',
        template: _raw_loader_eligibility_required_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_eligibility_required_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EligibilityRequiredPage);



/***/ }),

/***/ "sTe7":
/*!*********************************************************************************!*\
  !*** ./src/app/post-course/eligibility-required/eligibility-required.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #028490 !important;\n  margin-bottom: -8px;\n}\n\nion-label {\n  font-family: \"Poppins\" !important;\n}\n\nion-card {\n  padding: 15px !important;\n  background: #F8F8F8;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\n.ion-button {\n  margin: 0 auto;\n  display: block;\n  background: #028490;\n  margin-top: 20px;\n  color: white;\n  padding: 21px;\n  border-radius: 14px;\n}\n\n.toolbar-background {\n  --border-width: 0px !important;\n  border: 0 !important;\n}\n\n.toolbar-container {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.ToolbarVerde {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\nimg {\n  margin: 0 auto;\n  margin-top: 10px;\n  display: block;\n}\n\nh5 {\n  text-align: center;\n  font-family: \"Poppins\";\n  font-weight: 300;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.instiutenamerow {\n  color: white;\n  padding: 10px;\n}\n\np {\n  text-align: center;\n}\n\nsvg {\n  margin: 0 auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbGlnaWJpbGl0eS1yZXF1aXJlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQ0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxpQ0FBQTtBQUFKOztBQUdBO0VBR0ksd0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLQTtFQUNJLDhCQUFBO0VBQ0Esb0JBQUE7QUFGSjs7QUFLQTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLQTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUdJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpKOztBQU9BO0VBRUksWUFBQTtFQUVBLGFBQUE7QUFOSjs7QUFTQTtFQUNJLGtCQUFBO0FBTko7O0FBU0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQU5KIiwiZmlsZSI6ImVsaWdpYmlsaXR5LXJlcXVpcmVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogIzBjMmY2YyAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDI4NDkwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICAvLyB3aWR0aDogMTQzcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDE0M3B4O1xyXG4gICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogIzAyODQ5MDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvb2xiYXItY29udGFpbmVyIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uVG9vbGJhclZlcmRlIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIC8vIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbiAgICAvLyBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbnN0aXV0ZW5hbWVyb3cge1xyXG4gICAgLy8gcGFkZGluZzogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICMwYzJmNmM7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuc3ZnIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=eligibility-required-eligibility-required-module.js.map