(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_institute_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/institute.service */ "onIP");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/loader.service */ "nFbz");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/toaster.service */ "UIBc");









let LoginPage = class LoginPage {
    constructor(apiservice, toaster, loader, router, menuCtrl) {
        this.apiservice = apiservice;
        this.toaster = toaster;
        this.loader = loader;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    ngOnInit() {
        this.menuCtrl.enable(false);
        this.menuCtrl.swipeGesture(false);
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    submit() {
        let req = {
            "password": this.password,
            "username": this.username
        };
        this.loader.present();
        this.apiservice.login(req).subscribe(data => {
            this.loader.dismiss();
            if (data['status'] === true) {
                console.error(data);
                localStorage.setItem("userLogin", JSON.stringify(data['data']));
                this.router.navigate(['/tabs']);
                this.toaster.userLogin();
            }
            else {
                console.error(data);
                this.toaster.erroruserLogin();
            }
        }, error => {
            this.loader.dismiss();
            console.error(error);
        });
    }
    ngAfterContentInit() {
        this.menuCtrl.enable(false);
        this.menuCtrl.swipeGesture(false);
    }
    ngAfterViewInit() {
        this.menuCtrl.enable(false);
        this.menuCtrl.swipeGesture(false);
    }
    ngOnDestroy() {
        this.menuCtrl.enable(true);
        this.menuCtrl.swipeGesture(false);
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_institute_service__WEBPACK_IMPORTED_MODULE_6__["InstituteService"] },
    { type: _services_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-content padding class=\"background\"> -->\r\n<!-- <div style=\"background: url('./assets/images/register.jpg');\">\r\n  </div> -->\r\n<!-- <p routerLink=\"/folder/Inbox\">Guest Login?</p>  -->\r\n\r\n<!-- <div class=\"row\">\r\n        <div class=\"container\">\r\n            <input type=\"number\" [(ngModel)]=\"mobnumber\" class=\"form-control\" placeholder=\"Phone Number\">\r\n            <button class=\"btn btn-danger\" (click)=\"sendOtp()\">Send OTP</button>\r\n        </div>\r\n    </div> -->\r\n\r\n\r\n<ion-content padding>\r\n\r\n\r\n    <!-- <ion-row class=\"rowclass\">\r\n        <ion-col>\r\n\r\n\r\n        </ion-col>\r\n    </ion-row> -->\r\n\r\n    <div class=\"center\">\r\n        <img src=\"./assets/img/nspot-logo.jpg\" alt=\"\">\r\n        <div heading-column-ln>\r\n            <h1 big-heading> Welcome to NSPOT!</h1>\r\n\r\n\r\n        </div>\r\n        <ion-label>\r\n            <h1 big-heading> Login!</h1>\r\n\r\n        </ion-label>\r\n        <div linespace>\r\n\r\n\r\n        </div>\r\n        <div style=\"margin-bottom: 20px;\">\r\n            <input type=\"text\" placeholder=\"User Name\" [(ngModel)]=\"username\">\r\n\r\n        </div>\r\n        <div style=\"margin-bottom: 20px;\">\r\n            <input [type]=\"passwordType\" placeholder=\"Password\" [(ngModel)]=\"password\">\r\n            <ion-icon [name]=\"passwordIcon\" item-right (click)=\"hideShowPassword()\" style=\"    margin-top: -28px;\r\n            float: right;\r\n            margin-right: 9px;\r\n            color: #3c3c3ca6;\"></ion-icon>\r\n        </div>\r\n        <!-- <ion-item transparent> -->\r\n\r\n\r\n\r\n\r\n\r\n        <!-- <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n            &nbsp; -->\r\n        <!-- <ion-input placeholder=\"User Name\" type=\"text\" [(ngModel)]=\"mobnumber\">\r\n            </ion-input> -->\r\n\r\n        <!-- </ion-item>\r\n        <ion-item transparent> -->\r\n        <!-- <ion-icon name=\"eye\"></ion-icon>\r\n            &nbsp;\r\n            <ion-input placeholder=\"Password\" type=\"text\" [(ngModel)]=\"password\">\r\n            </ion-input> -->\r\n\r\n        <!-- </ion-item> -->\r\n        <div linespace></div>\r\n        <!-- <ion-button (click)=\"sendOtp()\" class=\"ion-button-class\" shape=\"round\" fill=\"solid\" size=\"large\" expand=\"block\">\r\n              Send OTP</ion-button> -->\r\n        <button (click)=\"submit()\" class=\"ion-button-class\">Login</button>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    },
    {
        path: 'login',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rowclass {\n  height: 30%;\n  border-bottom-left-radius: 34px;\n  border-bottom-right-radius: 35px;\n}\n\n.heading {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\np {\n  text-align: center;\n  letter-spacing: 2px;\n  color: white;\n}\n\n.center {\n  margin: 33px;\n}\n\n[linespace] {\n  height: 30px;\n}\n\n.ion-button-class {\n  background-image: linear-gradient(-45deg, #60b2bb 0%, #028490 100%);\n  width: 76%;\n  display: block;\n  margin: 0 auto;\n  padding: 14px;\n  color: white;\n  border-radius: 11px;\n  font-size: 17px;\n}\n\nimg {\n  margin-left: -25px;\n  width: 177px;\n  margin-bottom: 28px;\n  margin-top: 31px;\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 21px;\n  font-weight: bold;\n}\n\ninput {\n  background: #80808033;\n  border: none;\n  padding: 14px;\n  width: 100%;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QkE7RUFDSSxXQUFBO0VBSUEsK0JBQUE7RUFDQSxnQ0FBQTtBQTFCSjs7QUE2QkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQTFCSjs7QUFrQ0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQS9CSjs7QUFrQ0E7RUFDSSxZQUFBO0FBL0JKOztBQWtDQTtFQUNJLFlBQUE7QUEvQko7O0FBa0NBO0VBR0ksbUVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWpDSjs7QUFvQ0E7RUFNSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBdENKOztBQXlDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBdENKOztBQXlDQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUF0Q0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9yZWdpc3Rlci5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuLy8gfVxyXG4vLyAuZm9ybS1jb250cm9sIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDI1NHB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMzlweDtcclxuLy8gICAgIGhlaWdodDogNTdweDtcclxuLy8gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbi8vIH1cclxuLy8gLmNvbnRhaW5lcntcclxuLy8gICAgIG1hcmdpbjogMTVweDtcclxuLy8gfVxyXG4vLyAuYnRue1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIGJhY2tncm91bmQ6ICNkOTFlNTM7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA0M3B4O1xyXG4vLyAgICAgd2lkdGg6IDcwJTtcclxuLy8gfVxyXG4vLyBwe1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuLy8gfVxyXG4ucm93Y2xhc3Mge1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNDQ4MWViIDAlLCAjMDRiZWZlIDEwMCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2U2NWU4NSAwJSwgI2Q5MWU1MyAxMDAlKTtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggLTQ1ZGVnLCAjNjBiMmJiIDAlLCAjMDI4NDkwIDEwMCUpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzRweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNXB4O1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDY5cHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICBtYXJnaW46IDMzcHg7XHJcbn1cclxuXHJcbltsaW5lc3BhY2VdIHtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmlvbi1idXR0b24tY2xhc3Mge1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2U2NWU4NSAwJSwgI2Q5MWU1MyAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCAtNDVkZWcsICM1MzgxYWYgMCUsICMxRTQ1NkMgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIC00NWRlZywgIzYwYjJiYiAwJSwgIzAyODQ5MCAxMDAlKTtcclxuICAgIHdpZHRoOiA3NiU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICAvLyAgICAgd2lkdGg6IDIwMnB4O1xyXG4gICAgLy8gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICAvLyAgICAgbWFyZ2luLWJvdHRvbTogLTE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICB3aWR0aDogMTc3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzFweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODA4MDgwMzM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map