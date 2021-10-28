(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-course-post-course-module"],{

/***/ "7+RA":
/*!***********************************************************!*\
  !*** ./src/app/post-course/post-course-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PostCoursePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCoursePageRoutingModule", function() { return PostCoursePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _post_course_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-course.page */ "SX7D");




const routes = [
    {
        path: '',
        component: _post_course_page__WEBPACK_IMPORTED_MODULE_3__["PostCoursePage"]
    },
    {
        path: 'fees-info',
        loadChildren: () => __webpack_require__.e(/*! import() | fees-info-fees-info-module */ "fees-info-fees-info-module").then(__webpack_require__.bind(null, /*! ./fees-info/fees-info.module */ "x1Ha")).then(m => m.FeesInfoPageModule)
    },
    {
        path: 'eligibility-required',
        loadChildren: () => __webpack_require__.e(/*! import() | eligibility-required-eligibility-required-module */ "eligibility-required-eligibility-required-module").then(__webpack_require__.bind(null, /*! ./eligibility-required/eligibility-required.module */ "3MYK")).then(m => m.EligibilityRequiredPageModule)
    },
    {
        path: 'job-areas',
        loadChildren: () => __webpack_require__.e(/*! import() | job-areas-job-areas-module */ "job-areas-job-areas-module").then(__webpack_require__.bind(null, /*! ./job-areas/job-areas.module */ "uK4U")).then(m => m.JobAreasPageModule)
    }
];
let PostCoursePageRoutingModule = class PostCoursePageRoutingModule {
};
PostCoursePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostCoursePageRoutingModule);



/***/ }),

/***/ "ERq8":
/*!***************************************************!*\
  !*** ./src/app/post-course/post-course.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #028490 !important;\n  margin-bottom: -8px;\n}\n\nion-label {\n  font-family: \"Poppins\" !important;\n}\n\nion-card {\n  width: 143px;\n  height: 143px;\n  padding: 15px !important;\n  background: #F8F8F8;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-button {\n  margin-left: 20px;\n  margin-right: 20px;\n  --background: #028490;\n  margin-top: 20px;\n}\n\n.toolbar-background {\n  --border-width: 0px !important;\n  border: 0 !important;\n}\n\n.toolbar-container {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.ToolbarVerde {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\nimg {\n  margin: 0 auto;\n  margin-top: 10px;\n  display: block;\n}\n\nh5 {\n  text-align: center;\n  font-family: \"Poppins\";\n  font-weight: 300;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.instiutenamerow {\n  color: white;\n  padding: 10px;\n}\n\np {\n  text-align: center;\n}\n\nsvg {\n  margin: 0 auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBvc3QtY291cnNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdDQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGlDQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksOEJBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBR0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0E7RUFFSSxZQUFBO0VBRUEsYUFBQTtBQUpKOztBQU9BO0VBQ0ksa0JBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBSkoiLCJmaWxlIjoicG9zdC1jb3Vyc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjMGMyZjZjICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjg0OTAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHdpZHRoOiAxNDNweDtcclxuICAgIGhlaWdodDogMTQzcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjg0OTA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9vbGJhci1jb250YWluZXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5Ub29sYmFyVmVyZGUge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDUge1xyXG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmluc3RpdXRlbmFtZXJvdyB7XHJcbiAgICAvLyBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzBjMmY2YztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */");

/***/ }),

/***/ "P+69":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-course/post-course.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <button routerLink=\"/navigaiondrawer\">s</button> -->\r\n            <!-- <IonMenuButton> </IonMenuButton> -->\r\n            <!-- <ion-menu-button auto-hide=\"false\"></ion-menu-button> -->\r\n\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>NSPOT</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"container\">\r\n        <h5>Post a New Course</h5>\r\n        <ion-item>\r\n            <ion-label>Main Category</ion-label>\r\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"postaCource.maincategory\" (ionChange)=\"maincategorychange($event)\">\r\n                <ion-select-option *ngFor=\"let s of mainCategories\" value=\"{{s.id}}\">{{s.title}}</ion-select-option>\r\n\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Sub Category 1</ion-label>\r\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"postaCource.subcategory1\" (ionChange)=\"subcategory1change($event)\">\r\n                <ion-select-option *ngFor=\"let s of subCategories1\" value=\"{{s.id}}\">{{s.title}}</ion-select-option>\r\n\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Sub Category 2</ion-label>\r\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"postaCource.subcategory2\" (ionChange)=\"subcategory2change($event)\">\r\n\r\n                <ion-select-option *ngFor=\"let s of subCategories2\" value=\"{{s.id}}\">{{s.title}}</ion-select-option>\r\n\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Sub Category 3</ion-label>\r\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"postaCource.subcategory3\" (ionChange)=\"subcategory3change($event)\">\r\n\r\n                <ion-select-option *ngFor=\"let s of subCategories3\" value=\"{{s.id}}\">{{s.title}}</ion-select-option>\r\n\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Sub Category 4</ion-label>\r\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"postaCource.subcategory4\" (ionChange)=\"subcategory4change($event)\">\r\n\r\n                <ion-select-option *ngFor=\"let s of subCategories4\" value=\"{{s.id}}\">{{s.title}}</ion-select-option>\r\n\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Sub Category 5</ion-label>\r\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"postaCource.subcategory5\">\r\n\r\n                <ion-select-option *ngFor=\"let s of subCategories5\" value=\"{{s.id}}\">{{s.title}}</ion-select-option>\r\n\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Academic Levels</ion-label>\r\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"postaCource.academiclevels\" (ionChange)=\"accademicLevelCoursechange($event)\">\r\n\r\n                <ion-select-option *ngFor=\"let s of accademiclevesl\" value=\"{{s.id}}\">{{s.title}}</ion-select-option>\r\n\r\n            </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label>Course Name</ion-label>\r\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"postaCource.accademicLevelCourseId\">\r\n\r\n                <ion-select-option *ngFor=\"let s of accademicLevelCourse\" value=\"{{s.id}}\">{{s.title}}</ion-select-option>\r\n\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Course Code</ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.courseCode\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Course Type</ion-label>\r\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"postaCource.courseTypeId\">\r\n\r\n                <ion-select-option *ngFor=\"let s of coursetype\" value=\"{{s.id}}\">{{s.title}}</ion-select-option>\r\n\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>University Type</ion-label>\r\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"postaCource.universityTypeId\">\r\n\r\n                <ion-select-option *ngFor=\"let s of universityTypes\" value=\"{{s.id}}\">{{s.title}}</ion-select-option>\r\n\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">University Name</ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.universityName\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Course Stream</ion-label>\r\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"postaCource.courseStreamId\" (ionChange)=\"substreamcourse($event)\">\r\n\r\n                <ion-select-option *ngFor=\"let s of courseStream\" value=\"{{s.id}}\">{{s.title}}</ion-select-option>\r\n\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Course Stream Specialization</ion-label>\r\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"postaCource.courseStreamSpecializationId\">\r\n\r\n                <ion-select-option *ngFor=\"let s of courseSubStream\" value=\"{{s.id}}\">{{s.title}}</ion-select-option>\r\n\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Available Seats</ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.availableSeats\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Academic Year</ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.accademicYear\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Academic Year Month</ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.accademicYearMonth\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Course Duration</ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.courseDuration\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Exam Conducted</ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.examConducted\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-label>Course Syllabus</ion-label>\r\n\r\n                </ion-col>\r\n                <ion-col>\r\n                    <input type=\"file\" (change)=\"syllubus($event.target.files)\">\r\n\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-item>\r\n\r\n\r\n        <ion-item>\r\n            <ion-label>Addmission Start Date</ion-label>\r\n            <ion-datetime [(ngModel)]=\"postaCource.admissionStartDate\" displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Addmission End Date</ion-label>\r\n            <ion-datetime [(ngModel)]=\"postaCource.admissionCloseDate\" displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Class Start Date</ion-label>\r\n            <ion-datetime [(ngModel)]=\"postaCource.classStartDate\" displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-list>\r\n            <ion-radio-group [(ngModel)]=\"postaCource.maleAllowed\" value=\"true\">\r\n                <ion-list-header>\r\n                    <ion-label>Male Allowed</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"true\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"false\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n        <ion-list>\r\n            <ion-radio-group [(ngModel)]=\"postaCource.femaleAllowed\" value=\"true\">\r\n                <ion-list-header>\r\n                    <ion-label>Female Allowed</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"true\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"false\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n        <ion-list>\r\n            <ion-radio-group [(ngModel)]=\"postaCource.otherGenderAllowed\" value=\"true\">\r\n                <ion-list-header>\r\n                    <ion-label>Other Gender Allowed</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"true\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"false\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Campus Name </ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.campusName\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Campus Address Line 1 </ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.campusAddressLine1\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Campus Address Line 2</ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.campusAddressLine2\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Campus Address Line 3 </ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.campusAddressLine3\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Locality </ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.locality\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Block </ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.block\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Country </ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.country\"></ion-input>\r\n        </ion-item>\r\n\r\n\r\n        <ion-list>\r\n            <ion-radio-group [(ngModel)]=\"postaCource.onlineClassAvailability\" value=\"true\">\r\n                <ion-list-header>\r\n                    <ion-label>Online Class Availability</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"true\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"false\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n        <ion-list>\r\n            <ion-radio-group [(ngModel)]=\"postaCource.refundPolicy\" value=\"true\">\r\n                <ion-list-header>\r\n                    <ion-label>Refund Policy</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"true\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"false\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n\r\n        <ion-list>\r\n            <ion-radio-group [(ngModel)]=\"postaCource.aptituteTestRequired\" value=\"true\">\r\n                <ion-list-header>\r\n                    <ion-label>Apptitude Test Required</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"true\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"false\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n        <ion-item *ngIf=\"postaCource.aptituteTestRequired == 'true'\">\r\n            <ion-label>Choose Apptitude Test</ion-label>\r\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"postaCource.aptituteTestId\">\r\n\r\n                <ion-select-option *ngFor=\"let s of apptututestestlist\" value=\"{{s.id}}\">{{s.title}}</ion-select-option>\r\n\r\n            </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-list>\r\n            <ion-radio-group [(ngModel)]=\"postaCource.onlineInterviewRequired\" value=\"true\">\r\n                <ion-list-header>\r\n                    <ion-label>Online Interview</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"true\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"false\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n\r\n        <!-- <ion-item>\r\n            <ion-label position=\"floating\">Job Positions </ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.jobAreas\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Job Positions </ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.jobPositions\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Salary Range </ion-label>\r\n            <ion-input [(ngModel)]=\"postaCource.salaryRange\"></ion-input>\r\n        </ion-item> -->\r\n        <!-- <ion-list>\r\n            <ion-radio-group [(ngModel)]=\"postaCource.hasPlacementAssistant\" value=\"true\">\r\n                <ion-list-header>\r\n                    <ion-label>Placement Assistance</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"true\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"false\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list> -->\r\n        <!-- <ion-item>\r\n            <ion-label position=\"floating\">Recuriters </ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item> -->\r\n        <ion-list>\r\n            <ion-radio-group [(ngModel)]=\"postaCource.isActive\" value=\"true\">\r\n                <ion-list-header>\r\n                    <ion-label>Active</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"true\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"false\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n\r\n\r\n\r\n        <ion-button expand=\"block\" (click)=\"submit()\">SUBMIT</ion-button>\r\n    </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "SX7D":
/*!*************************************************!*\
  !*** ./src/app/post-course/post-course.page.ts ***!
  \*************************************************/
/*! exports provided: PostCoursePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCoursePage", function() { return PostCoursePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_course_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post-course.page.html */ "P+69");
/* harmony import */ var _post_course_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-course.page.scss */ "ERq8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models_postaCourse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/postaCourse */ "toLk");
/* harmony import */ var _services_institute_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/institute.service */ "onIP");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/loader.service */ "nFbz");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/toaster.service */ "UIBc");









let PostCoursePage = class PostCoursePage {
    constructor(InstituteService, router, loader, toaster) {
        this.InstituteService = InstituteService;
        this.router = router;
        this.loader = loader;
        this.toaster = toaster;
        this.mainCategories = [];
        this.subCategories1 = [];
        this.subCategories2 = [];
        this.subCategories3 = [];
        this.subCategories4 = [];
        this.subCategories5 = [];
        this.accademiclevesl = [];
        this.coursetype = [];
        this.apptututestestlist = [];
        this.universityTypes = [];
        this.postaCource = new _models_postaCourse__WEBPACK_IMPORTED_MODULE_5__["Postacourse"]();
        this.formdata = new FormData();
        this.courseStream = [];
        this.courseSubStream = [];
        this.instituteLoginDetails = [];
        this.accademicLevelCourse = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
        this.instituteId = this.instituteLoginDetails['userProfile'].userRole;
        this.postaCource.instituteId = this.instituteId;
        console.log(this.instituteId);
        this.getmaincategory();
        this.getallacademiclevvsl();
        this.getcoursetype();
        this.getuniversitytypes();
        this.getcourseStream();
        this.postaCource.maleAllowed = 'true';
        this.postaCource.femaleAllowed = 'true';
        this.postaCource.otherGenderAllowed = 'true';
        this.postaCource.onlineClassAvailability = 'true';
        this.postaCource.refundPolicy = 'true';
        this.postaCource.aptituteTestRequired = 'true';
        this.postaCource.onlineInterviewRequired = 'true';
        this.postaCource.hasPlacementAssistant = 'true';
        this.postaCource.recruiters = 'true';
        this.postaCource.isActive = 'true';
        this.getallapptitutetest();
    }
    getallacademiclevvsl() {
        this.InstituteService.getallacademiclevel().subscribe(data => {
            this.accademiclevesl = data;
        }, error => {
        });
    }
    getmaincategory() {
        this.InstituteService.getallmaincategory().subscribe(data => {
            this.mainCategories = data['data'];
        }, error => {
        });
    }
    maincategorychange(event) {
        this.loader.present();
        console.log(event.target.value);
        this.InstituteService.getmaincategorybyid1(event.target.value).subscribe(data => {
            this.subCategories1 = data['data'];
            this.loader.dismiss();
        }, error => {
            this.loader.dismiss();
        });
    }
    subcategory1change(event) {
        this.loader.present();
        console.log(event.target.value);
        this.InstituteService.getmaincategorybyid2(event.target.value).subscribe(data => {
            this.subCategories2 = data['data'];
            this.loader.dismiss();
        }, error => {
            this.loader.dismiss();
        });
    }
    subcategory2change(event) {
        this.loader.present();
        console.log(event.target.value);
        this.InstituteService.getmaincategorybyid3(event.target.value).subscribe(data => {
            this.subCategories3 = data['data'];
            this.loader.dismiss();
        }, error => {
            this.loader.dismiss();
        });
    }
    subcategory3change(event) {
        this.loader.present();
        console.log(event.target.value);
        this.InstituteService.getmaincategorybyid4(event.target.value).subscribe(data => {
            this.subCategories4 = data['data'];
            this.loader.dismiss();
        }, error => {
            this.loader.dismiss();
        });
    }
    subcategory4change(event) {
        this.loader.present();
        this.InstituteService.getmaincategorybyid5(event.target.value).subscribe(data => {
            this.subCategories5 = data['data'];
            this.loader.dismiss();
        }, error => {
            this.loader.dismiss();
        });
    }
    getcoursetype() {
        this.InstituteService.getcoursetype().subscribe(data => {
            this.coursetype = data['data'];
        }, error => {
        });
    }
    getuniversitytypes() {
        this.InstituteService.getuniversitytypes().subscribe(data => {
            this.universityTypes = data['data'];
        }, error => {
        });
    }
    getcourseStream() {
        this.InstituteService.getcourseStream().subscribe(data => {
            this.courseStream = data['data'];
        }, error => {
        });
    }
    substreamcourse(event) {
        this.loader.present();
        this.InstituteService.substreamcoursespecialization(event.target.value).subscribe(data => {
            this.courseSubStream = data['data'];
            this.loader.dismiss();
        }, error => {
            this.loader.dismiss();
        });
    }
    getallapptitutetest() {
        this.InstituteService.getalltestlist(this.instituteId).subscribe(data => {
            this.apptututestestlist = data['data'];
        }, error => {
        });
    }
    accademicLevelCoursechange(event) {
        this.loader.present();
        this.InstituteService.accademicLevelCoursechange(event.target.value).subscribe(data => {
            this.accademicLevelCourse = data['data'];
            this.loader.dismiss();
        }, error => {
            this.loader.dismiss();
        });
    }
    syllubus(event) {
        this.fileToUpload = event.item(0);
    }
    submit() {
        console.log(this.postaCource.admissionStartDate.split('T')[0]);
        this.loader.present();
        this.formdata.append("accademicLevelId", this.postaCource.academiclevels);
        this.formdata.append('accademicLevelCourseId', this.postaCource.accademicLevelCourseId);
        this.formdata.append("courseTypeId", this.postaCource.courseTypeId);
        this.formdata.append("courseCode", this.postaCource.courseCode);
        this.formdata.append("universityTypeId", this.postaCource.universityTypeId);
        this.formdata.append("universityName", this.postaCource.universityName);
        this.formdata.append("courseStreamId", this.postaCource.courseStreamId);
        this.formdata.append("courseStreamSpecializationId", this.postaCource.courseStreamSpecializationId);
        this.formdata.append("availableSeats", this.postaCource.availableSeats);
        this.formdata.append("accademicYear", this.postaCource.accademicYear);
        this.formdata.append("accademicYearMonth", this.postaCource.accademicYearMonth);
        this.formdata.append("courseDuration", this.postaCource.courseDuration);
        this.formdata.append("examConducted", this.postaCource.examConducted);
        this.formdata.append("admissionStartDate", this.postaCource.admissionStartDate.split('T')[0]);
        this.formdata.append("admissionCloseDate", this.postaCource.admissionCloseDate.split('T')[0]);
        this.formdata.append("classStartDate", this.postaCource.classStartDate.split('T')[0]);
        this.formdata.append("maleAllowed", this.postaCource.maleAllowed);
        this.formdata.append("femaleAllowed", this.postaCource.femaleAllowed);
        this.formdata.append("otherGenderAllowed", this.postaCource.otherGenderAllowed);
        this.formdata.append("campusName", this.postaCource.campusName);
        this.formdata.append("campusAddressLine1", this.postaCource.campusAddressLine1);
        this.formdata.append("campusAddressLine2", this.postaCource.campusAddressLine2);
        this.formdata.append("campusAddressLine3", this.postaCource.campusAddressLine3);
        this.formdata.append("country", this.postaCource.country);
        this.formdata.append("block", this.postaCource.block);
        this.formdata.append("locality", this.postaCource.locality);
        this.formdata.append("refundPolicy", this.postaCource.refundPolicy);
        this.formdata.append("onlineClassAvailability", this.postaCource.onlineClassAvailability);
        this.formdata.append("aptituteTestRequired", this.postaCource.aptituteTestRequired);
        this.formdata.append("aptituteTestId", this.postaCource.aptituteTestId);
        this.formdata.append("onlineInterviewRequired", this.postaCource.onlineInterviewRequired);
        this.formdata.append("courseSyllabusFile", this.fileToUpload);
        this.formdata.append("CourseCategoryId", this.postaCource.maincategory);
        this.formdata.append("CourseSubCategoryId", this.postaCource.subcategory1);
        this.formdata.append("CourseSubCategory2Id", this.postaCource.subcategory2);
        this.formdata.append("CourseSubCategory3Id", this.postaCource.subcategory3);
        this.formdata.append("CourseSubCategory4Id", this.postaCource.subcategory4);
        this.formdata.append("CourseSubCategory5Id", this.postaCource.subcategory5);
        this.formdata.append("isActive", this.postaCource.isActive);
        // this.formdata.append("eligibiliyInString",this.postaCource.eligibiliyInString)
        // this.formdata.append("jobAreas",this.postaCource.jobAreas)
        // this.formdata.append("jobPositions",this.postaCource.jobPositions)
        // this.formdata.append("salaryRange",this.postaCource.salaryRange)
        // this.formdata.append("hasPlacementAssistant",this.postaCource.hasPlacementAssistant)
        // this.formdata.append("recruiters",this.postaCource.recruiters)
        // this.formdata.append("instituteId",this.postaCource.instituteId)
        this.InstituteService.addacourse(this.postaCource.instituteId, this.formdata).subscribe(data => {
            this.loader.dismiss();
            this.toaster.newCourseAdded();
            sessionStorage.setItem("post-course", JSON.stringify(data));
            this.router.navigateByUrl('/post-course/fees-info');
        }, error => {
            this.formdata = new FormData();
            this.loader.dismiss();
            this.toaster.errornewCourseAdded();
            this.formdata.delete;
        });
    }
};
PostCoursePage.ctorParameters = () => [
    { type: _services_institute_service__WEBPACK_IMPORTED_MODULE_6__["InstituteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: _services_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] }
];
PostCoursePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-course',
        template: _raw_loader_post_course_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_course_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostCoursePage);



/***/ }),

/***/ "aVEZ":
/*!***************************************************!*\
  !*** ./src/app/post-course/post-course.module.ts ***!
  \***************************************************/
/*! exports provided: PostCoursePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCoursePageModule", function() { return PostCoursePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _post_course_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-course-routing.module */ "7+RA");
/* harmony import */ var _post_course_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-course.page */ "SX7D");







let PostCoursePageModule = class PostCoursePageModule {
};
PostCoursePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _post_course_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostCoursePageRoutingModule"]
        ],
        declarations: [_post_course_page__WEBPACK_IMPORTED_MODULE_6__["PostCoursePage"]]
    })
], PostCoursePageModule);



/***/ }),

/***/ "toLk":
/*!****************************************!*\
  !*** ./src/app/_models/postaCourse.ts ***!
  \****************************************/
/*! exports provided: Postacourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Postacourse", function() { return Postacourse; });
class Postacourse {
}


/***/ })

}]);
//# sourceMappingURL=post-course-post-course-module.js.map