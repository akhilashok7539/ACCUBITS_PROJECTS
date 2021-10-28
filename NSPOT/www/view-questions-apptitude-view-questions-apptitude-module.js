(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-questions-apptitude-view-questions-apptitude-module"],{

/***/ "07w+":
/*!********************************************************************************************!*\
  !*** ./src/app/apptitude-test/view-questions-apptitude/view-questions-apptitude.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ViewQuestionsApptitudePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewQuestionsApptitudePageModule", function() { return ViewQuestionsApptitudePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_questions_apptitude_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-questions-apptitude-routing.module */ "13nZ");
/* harmony import */ var _view_questions_apptitude_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-questions-apptitude.page */ "buJ3");







let ViewQuestionsApptitudePageModule = class ViewQuestionsApptitudePageModule {
};
ViewQuestionsApptitudePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_questions_apptitude_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewQuestionsApptitudePageRoutingModule"]
        ],
        declarations: [_view_questions_apptitude_page__WEBPACK_IMPORTED_MODULE_6__["ViewQuestionsApptitudePage"]]
    })
], ViewQuestionsApptitudePageModule);



/***/ }),

/***/ "13nZ":
/*!****************************************************************************************************!*\
  !*** ./src/app/apptitude-test/view-questions-apptitude/view-questions-apptitude-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ViewQuestionsApptitudePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewQuestionsApptitudePageRoutingModule", function() { return ViewQuestionsApptitudePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_questions_apptitude_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-questions-apptitude.page */ "buJ3");




const routes = [
    {
        path: '',
        component: _view_questions_apptitude_page__WEBPACK_IMPORTED_MODULE_3__["ViewQuestionsApptitudePage"]
    }
];
let ViewQuestionsApptitudePageRoutingModule = class ViewQuestionsApptitudePageRoutingModule {
};
ViewQuestionsApptitudePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewQuestionsApptitudePageRoutingModule);



/***/ }),

/***/ "TRh+":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apptitude-test/view-questions-apptitude/view-questions-apptitude.page.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>view Questions</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row style=\"    color: #0000007d;\r\n  background: #f4f4f4;\r\n  \">\r\n        <ion-col size=\"12\">\r\n            <h4 style=\"text-align: center;\">Apptitude Test Questions</h4>\r\n\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-card *ngFor=\"let question of questionsList;let i=index;\">\r\n\r\n        <p>{{i+1}}) {{question.question}}</p>\r\n        <p *ngFor=\"let questions of question.Aptitude_Question_Options\" class=\"options\">\r\n            <input type=\"checkbox\" [checked]=\"questions.isCorrectOption == true\" disabled> {{questions.option}}\r\n        </p>\r\n        <!-- <input type=\"checkbox\" *ngFor=\"let questions of question.Aptitude_Question_Options\" />.{{questions.isCorrectOption}} -->\r\n        <!-- <input *ngFor=\"let questions of question.Aptitude_Question_Options\" type=\"checkbox\"> {{questions.isCorrectOption}} -->\r\n    </ion-card>\r\n    <ion-row>\r\n        <ion-col size=\"12\">\r\n            <ion-card>\r\n                <p>Add New Questions</p>\r\n                <hr>\r\n                <ion-item>\r\n                    <ion-label position=\"floating\"> Enter Your Question?</ion-label>\r\n                    <ion-input [(ngModel)]=\"questionName\"></ion-input>\r\n                </ion-item>\r\n                <ion-list>\r\n                    <ion-list-header>\r\n                        <ion-label>Options</ion-label>\r\n                    </ion-list-header>\r\n                    <!-- <ion-radio-group>\r\n                        <ion-list-header>\r\n                            <ion-label>Options</ion-label>\r\n                        </ion-list-header>\r\n\r\n                        <ion-item>\r\n\r\n                            <ion-radio slot=\"start\" value=\"1\"></ion-radio>\r\n                            <input type=\"text\">\r\n                        </ion-item>\r\n\r\n                        <ion-item>\r\n                            <ion-radio slot=\"start\" value=\"2\"></ion-radio>\r\n                            <input type=\"text\">\r\n                        </ion-item>\r\n\r\n\r\n                    </ion-radio-group> -->\r\n                    <input type=\"radio\" [(ngModel)]=\"correctanswser\" value=\"1\">\r\n                    <input type=\"text\" [(ngModel)]=\"option1\" placeholder=\"option 1\">\r\n\r\n                    <input type=\"radio\" [(ngModel)]=\"correctanswser\" value=\"2\">\r\n                    <input type=\"text\" [(ngModel)]=\"option2\" placeholder=\"option 2\">\r\n\r\n                    <input type=\"radio\" [(ngModel)]=\"correctanswser\" value=\"3\">\r\n                    <input type=\"text\" [(ngModel)]=\"option3\" placeholder=\"option 3\">\r\n\r\n\r\n                    <input type=\"radio\" [(ngModel)]=\"correctanswser\" value=\"4\">\r\n                    <input type=\"text\" [(ngModel)]=\"option4\" placeholder=\"option 3\">\r\n                </ion-list>\r\n                <button class=\"btn btn-primary\" (click)=\"submit()\">\r\n                <!-- <ion-icon name=\"plus-outline\"></ion-icon> -->\r\n                Add \r\n              </button>\r\n            </ion-card>\r\n        </ion-col>\r\n\r\n\r\n    </ion-row>\r\n\r\n</ion-content>");

/***/ }),

/***/ "UIBc":
/*!**********************************************!*\
  !*** ./src/app/_services/toaster.service.ts ***!
  \**********************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




let ToasterService = class ToasterService {
    constructor(toastrcontroller, router) {
        this.toastrcontroller = toastrcontroller;
        this.router = router;
    }
    userLogin() {
        this.toastrcontroller.create({
            message: 'Institute Login success!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    erroruserLogin() {
        this.toastrcontroller.create({
            message: 'Institute Login Failed!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    newCourseAdded() {
        this.toastrcontroller.create({
            message: 'Course Added!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    errornewCourseAdded() {
        this.toastrcontroller.create({
            message: 'Unablet to add new Course!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    feeInfoAdded() {
        this.toastrcontroller.create({
            message: 'Fees Info Added!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    errorfeeInfoAdded() {
        this.toastrcontroller.create({
            message: 'Unablet to fees info!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    eligibilityadded() {
        this.toastrcontroller.create({
            message: 'Eligibility Added!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    erroreligibilityaddedd() {
        this.toastrcontroller.create({
            message: 'Unablet to add Eligibility !',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    joboppouttunityadded() {
        this.toastrcontroller.create({
            message: 'Job Oppourtunity Added!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    errorjoboppouttunityadded() {
        this.toastrcontroller.create({
            message: 'Unablet to add Job Oppourtunity !',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    optionCheck() {
        this.toastrcontroller.create({
            message: 'Please choose a option!',
            cssClass: "toast-scheme ",
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
};
ToasterService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ToasterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToasterService);



/***/ }),

/***/ "buJ3":
/*!******************************************************************************************!*\
  !*** ./src/app/apptitude-test/view-questions-apptitude/view-questions-apptitude.page.ts ***!
  \******************************************************************************************/
/*! exports provided: ViewQuestionsApptitudePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewQuestionsApptitudePage", function() { return ViewQuestionsApptitudePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_questions_apptitude_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-questions-apptitude.page.html */ "TRh+");
/* harmony import */ var _view_questions_apptitude_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-questions-apptitude.page.scss */ "uqkf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_institute_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/institute.service */ "onIP");
/* harmony import */ var src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/toaster.service */ "UIBc");







let ViewQuestionsApptitudePage = class ViewQuestionsApptitudePage {
    constructor(instituteservice, router, toaster) {
        this.instituteservice = instituteservice;
        this.router = router;
        this.toaster = toaster;
        this.quesitions = [];
        this.questionsList = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.quesitions = JSON.parse(sessionStorage.getItem("view-apptitude-questions"));
        this.questionId = this.quesitions['id'];
        this.getQuestionsById();
    }
    getQuestionsById() {
        this.instituteservice.getallQuestions(this.questionId).subscribe(data => {
            this.questionsList = data['data'];
        }, error => {
        });
    }
    submit() {
        console.log(this.correctanswser);
        if (this.correctanswser == undefined) {
            this.toaster.optionCheck();
        }
        else {
            let req = {
                "correctOption": this.correctanswser,
                "option1": this.option1,
                "option2": this.option2,
                "option3": this.option3,
                "option4": this.option4,
                "question": this.questionName
            };
            this.instituteservice.addquestions(this.questionId, req).subscribe(data => {
                this.getQuestionsById();
                this.correctanswser = "";
                this.option1 = "";
                this.option2 = "";
                this.option3 = "";
                this.option4 = "";
                this.questionName = "";
            }, error => {
            });
        }
    }
};
ViewQuestionsApptitudePage.ctorParameters = () => [
    { type: src_app_services_institute_service__WEBPACK_IMPORTED_MODULE_5__["InstituteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] }
];
ViewQuestionsApptitudePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-questions-apptitude',
        template: _raw_loader_view_questions_apptitude_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_questions_apptitude_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewQuestionsApptitudePage);



/***/ }),

/***/ "uqkf":
/*!********************************************************************************************!*\
  !*** ./src/app/apptitude-test/view-questions-apptitude/view-questions-apptitude.page.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #028490 !important;\n  margin-bottom: -8px;\n}\n\nion-label {\n  font-family: \"Poppins\" !important;\n}\n\nion-card {\n  padding: 15px !important;\n  background: #F8F8F8;\n}\n\np {\n  font-size: 17px;\n  font-weight: 700;\n  color: #028490;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\n.btn-primary {\n  margin: 0 auto;\n  display: block;\n  margin-top: 17px;\n  background: #028490;\n  color: white;\n  padding: 12px;\n  border-radius: 9px;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-button {\n  margin-left: 20px;\n  margin-right: 20px;\n  --background: #028490;\n  margin-top: 20px;\n}\n\n.toolbar-background {\n  --border-width: 0px !important;\n  border: 0 !important;\n}\n\n.toolbar-container {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.ToolbarVerde {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\nimg {\n  margin: 0 auto;\n  margin-top: 10px;\n  display: block;\n}\n\nh5 {\n  text-align: center;\n  font-family: \"Poppins\";\n  font-weight: 300;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.instiutenamerow {\n  color: white;\n  padding: 10px;\n}\n\ninput[type=radio] {\n  width: 29px;\n}\n\ninput[type=text] {\n  width: 83%;\n  padding: 9px;\n  margin: 5px;\n}\n\np {\n  text-align: left;\n}\n\n.options {\n  text-align: left;\n  font-weight: normal;\n  color: #7a7a7a;\n}\n\nsvg {\n  margin: 0 auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3LXF1ZXN0aW9ucy1hcHB0aXR1ZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUNBQUE7QUFBSjs7QUFHQTtFQUVJLHdCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksOEJBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQURKOztBQUlBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBR0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUE7RUFFSSxZQUFBO0VBRUEsYUFBQTtBQUxKOztBQVFBO0VBQ0ksV0FBQTtBQUxKOztBQVFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTEo7O0FBUUE7RUFDSSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFRQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBTEoiLCJmaWxlIjoidmlldy1xdWVzdGlvbnMtYXBwdGl0dWRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogIzBjMmY2YyAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDI4NDkwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICAvLyBoZWlnaHQ6IDE0M3B4O1xyXG4gICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwMjg0OTA7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzAyODQ5MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjg0OTA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9vbGJhci1jb250YWluZXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5Ub29sYmFyVmVyZGUge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDUge1xyXG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmluc3RpdXRlbmFtZXJvdyB7XHJcbiAgICAvLyBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzBjMmY2YztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cmFkaW9dIHtcclxuICAgIHdpZHRoOiAyOXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIHdpZHRoOiA4MyU7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjN2E3YTdhO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=view-questions-apptitude-view-questions-apptitude-module.js.map