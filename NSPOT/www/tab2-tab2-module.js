(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #028490 !important;\n  margin-bottom: -8px;\n}\n\np {\n  padding: 11px;\n  margin-top: 5px !important;\n  margin-bottom: 0px !important;\n}\n\n.btn-primary {\n  margin: 0 auto;\n  display: block;\n  background: #028490;\n  color: white;\n  border: none;\n  border-radius: 9px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-right: 12px;\n  padding-left: 11px;\n}\n\nion-toggle {\n  margin: 0 auto;\n  display: block;\n}\n\nion-item {\n  font-family: \"Poppins\";\n  font-size: 17px;\n  font-weight: bold;\n}\n\nion-label {\n  font-size: 9px;\n}\n\nion-card {\n  padding: 15px !important;\n  background: #F8F8F8;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-button {\n  margin-left: 20px;\n  margin-right: 20px;\n  --background: #028490;\n  margin-top: 20px;\n}\n\n.toolbar-background {\n  --border-width: 0px !important;\n  border: 0 !important;\n}\n\n.viewmore {\n  margin: 0 auto;\n  display: block;\n  background: #f8f8f8;\n  border: 2px solid #028490;\n  padding: 6px;\n  border-radius: 6px;\n}\n\n.toolbar-container {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.ToolbarVerde {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\nimg {\n  margin: 0 auto;\n  /* margin-top: 10px; */\n  width: 135px;\n  display: block;\n}\n\nh5 {\n  text-align: center;\n  font-family: \"Poppins\";\n  font-weight: 300;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.instiutenamerow {\n  color: white;\n  padding: 10px;\n}\n\np {\n  text-align: center;\n  margin-bottom: 13px;\n}\n\nsvg {\n  margin: 0 auto;\n  display: block;\n}\n\n.addnew {\n  float: right;\n  background: white;\n  color: #028490;\n  border: 1px solid #028490;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 23px;\n  padding-right: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdBO0VBR0ksd0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7QUFGSjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSw4QkFBQTtFQUNBLG9CQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLQTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7RUFHSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFPQTtFQUVJLFlBQUE7RUFFQSxhQUFBO0FBTko7O0FBU0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQU5KOztBQWFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFWSiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogIzBjMmY2YyAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDI4NDkwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICMwMjg0OTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDExcHg7XHJcbn1cclxuXHJcbmlvbi10b2dnbGUge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIC8vIHdpZHRoOiAxNDNweDtcclxuICAgIC8vIGhlaWdodDogMTQzcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjg0OTA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmlld21vcmUge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDI4NDkwO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4udG9vbGJhci1jb250YWluZXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5Ub29sYmFyVmVyZGUge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8qIG1hcmdpbi10b3A6IDEwcHg7ICovXHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDUge1xyXG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmluc3RpdXRlbmFtZXJvdyB7XHJcbiAgICAvLyBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzBjMmY2YztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxufVxyXG5cclxuc3ZnIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8vIGlvbi10b29sYmFyIHtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogIzAyODQ5MCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogLThweDtcclxuLy8gfVxyXG4uYWRkbmV3IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMwMjg0OTA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDI4NDkwO1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIzcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let Tab2Page = class Tab2Page {
    constructor(menu) {
        this.menu = menu;
        this.applicationtype = 'PreApplications';
    }
    segmentChanged(event) {
        console.log(event);
    }
    openEnd() {
        this.menu.open();
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
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <button routerLink=\"/navigaiondrawer\">s</button> -->\r\n            <!-- <IonMenuButton> </IonMenuButton> -->\r\n            <!-- <ion-menu-button auto-hide=\"false\"></ion-menu-button> -->\r\n\r\n            <!-- <ion-icon name=\"arrow-back-sharp\"></ion-icon> -->\r\n            <ion-menu-button auto-hide=\"false\" (click)=\"openEnd()\"></ion-menu-button>\r\n\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>NSPOT</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row style=\"    color: #0000007d;\r\n  background: #f4f4f4;\r\n  \">\r\n        <ion-col size=\"12\">\r\n            <h4 style=\"text-align: center;\r\n          color: #00000096;\r\n          font-family: 'Poppins';\r\n          font-weight: bold;\">Live Addmission Desk</h4>\r\n\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-item>\r\n                <ion-label>Choose Course</ion-label>\r\n                <ion-select placeholder=\"Select One\">\r\n                    <ion-select-option value=\"f\">c1</ion-select-option>\r\n                    <ion-select-option value=\"m\">c2</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n    <ion-segment [(ngModel)]=\"applicationtype\" (ionChange)=\"segmentChanged($event)\">\r\n        <ion-segment-button value=\"PreApplications\">\r\n            <ion-label>Pre Applications</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"Paymentawaiting\">\r\n            <ion-label>Payment awaiting Applications</ion-label>\r\n        </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <ion-row *ngIf=\"applicationtype == 'PreApplications'\">\r\n        <ion-col>\r\n            <ion-card>\r\n                <p style=\"text-align: left;\">NAME OF APPLICANT</p>\r\n                <p style=\"text-align: left;\">DATE OF REPORTING</p>\r\n                <p style=\"text-align: left;\">DATE OF APTITUDE TEST</p>\r\n                <p style=\"text-align: left;\">DATE OF ONLINE INTERVIEW</p>\r\n                <p style=\"text-align: left;\">ADMISSION APPROVAL</p>\r\n                <button class=\"viewmore\">View More</button>\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"applicationtype == 'Paymentawaiting'\">\r\n        <ion-col>\r\n            <ion-card>\r\n                <p style=\"text-align: left;\">NAME OF APPLICANT</p>\r\n                <p style=\"text-align: left;\">DATE OF REPORTING</p>\r\n                <p style=\"text-align: left;\">DETAILS</p>\r\n                <p style=\"text-align: left;\">REMARKS</p>\r\n                <p style=\"text-align: left;\">ADMISSION APPROVAL</p>\r\n                <button class=\"viewmore\">View More</button>\r\n\r\n            </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map