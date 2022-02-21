(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\portfolio\portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




class HomeComponent {
    constructor() { }
    // tslint:disable-next-line: typedef
    ngOnInit() {
        this.formuser = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbz0GqICcDhkVm5gMOTo_YRQ1Vwi-QRND7cXN5ih0S0j2WwzSZuLRWLe0_aTFmWJj-iN/exec';
        const form = document.getElementById('formdata');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            fetch(scriptUrl, {
                method: 'POST',
                body: new FormData(form),
            })
                .then((html) => {
                alert('Success');
                this.formuser.reset();
            })
                .catch((error) => console.error('Error', error.message));
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 130, vars: 1, consts: [[1, "w-100", "dark-layer3", "opc85", "position-relative"], [1, "fixed-bg", 2, "background-image", "url(https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg)"], [1, "container"], [1, "page-title", "text-center", "w-100"], [1, "mb-0", 2, "visibility", "hidden"], [1, "thm-clr"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "index.html", "title", ""], [1, "icon_house"], [1, "breadcrumb-item", "active"], ["id", "cont", 1, "w-100", "pt-155", "pb-90", "position-relative"], [1, "port-wrap5", "w-100"], ["id", "row", 1, "row"], ["id", "content", 1, "col-md-4", "col-sm-6", "col-lg-4"], ["id", "port", 1, "port-box5", "mb-30", "position-relative", "overflow-hidden", "w-100"], ["src", "assets/website development.jpg", "alt", "Portfolio Image 1", 1, "img"], [1, "port-info5", "w-100"], ["routerLink", "/web", "onclick", "myweb()", "title", "", 1, "d-inline-block", "brd-rd3"], ["src", "assets/newapp.jpeg", "alt", "Portfolio Image 3", 1, "img"], ["routerLink", "/application", "title", "", 1, "d-inline-block", "brd-rd3"], ["src", "assets/logo.jpeg", "alt", "Portfolio Image 5", 1, "img"], ["routerLink", "/graphic", "title", "", 1, "d-inline-block", "brd-rd3"], ["src", "assets/social medial marketing.jpg", "alt", "Portfolio Image 2", 1, "img-fluid"], ["href", "portfolio-detail2.html", "routerLink", "/smm", 1, "d-inline-block", "brd-rd3"], ["src", "assets/photography and videography.jpg", "alt", "Portfolio Image 4", 1, "img-fluid"], ["href", "portfolio-detail2.html", "routerLink", "/photo", 1, "d-inline-block", "brd-rd3"], ["src", "assets/radio.jpeg", "alt", "Portfolio Image 4", 1, "img-fluid"], ["href", "portfolio-detail2.html", "routerLink", "/radio", 1, "d-inline-block", "brd-rd3"], [1, "w-100", "pb-120"], [1, "facts-wrap", "text-center", "w-100"], [1, "facts-list", "d-flex", "flex-wrap", "mb-0", "list-unstyled", "w-100"], [1, "fact-box", "fact-clr1", "mt-30", "w-100"], [1, "rounded-circle", "icon_mug"], [1, "mb-0"], [1, "counter"], [1, "fact-box", "fact-clr2", "mt-30", "w-100"], [1, "rounded-circle", "icon_gift_alt"], [1, "fact-box", "fact-clr3", "mt-30", "w-100"], [1, "rounded-circle", "icon_easel"], [1, "fact-box", "fact-clr4", "mt-30", "w-100"], [1, "rounded-circle", "icon_globe"], [1, "fact-box", "fact-clr5", "mt-30", "w-100"], [1, "rounded-circle", "icon_lightbulb_alt"], [1, "w-100", "pt-130", "pb-100", "position-relative"], [1, "fixed-bg", 2, "background-image", "url(assets/images/parallax4.jpg)"], [1, "cont-wrap", "text-center", "w-100"], [1, "mb-0", "text-white"], ["name", "formdata", "id", "formdata", 1, "w-100", 3, "formGroup"], [1, "row", "mrg25"], [1, "col-md-4", "col-sm-6", "col-md-4", "form-group"], [1, "input-field", "d-block", "mt-25", "position-relative", "w-100"], [1, "far", "fa-user"], ["formControlName", "name", "id", "myinput", "name", "name", "type", "text", "placeholder", "Your Name", 1, "form-control"], [1, "fas", "fa-phone"], ["formControlName", "phone", "name", "phone", "type", "tel", "placeholder", "Phone Number", 1, "form-control"], [1, "far", "fa-envelope"], ["formControlName", "email", "type", "email", "name", "email", "placeholder", "Your Email Address", 1, "form-control"], [1, "col-md-12", "col-sm-6", "col-lg-12"], ["type", "submit", 1, "thm-btn", "mini-btn", "mt-50", "brd-rd3"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "VIEW PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "VIEW PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "VIEW PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "VIEW PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "VIEW PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "VIEW PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "1100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Cups of coffee & tea");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Years of experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "k");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Hours on projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "260");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Domestic & International projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "35");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Professional Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Complete the Form we will ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Contact you");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "form", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "SEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formuser);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["#cont[_ngcontent-%COMP%] {\r\n    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\r\n}\r\n\r\n#row[_ngcontent-%COMP%]   .port-box5[_ngcontent-%COMP%] {\r\n    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\r\n    max-width: 374px;\r\n    max-height: 400px;\r\n    margin-left: 18px;\r\n}\r\n\r\n#row[_ngcontent-%COMP%]   .port-box5[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 370px;\r\n    object-fit: contain;\r\n}\r\n\r\n#content[_ngcontent-%COMP%] {\r\n    display: contents;\r\n}\r\n\r\n@media screen and (max-width: 413px) {\r\n    #row[_ngcontent-%COMP%]   .port-box5[_ngcontent-%COMP%] {\r\n        max-width: 300px;\r\n        height: 300px;\r\n        display: block;\r\n        margin: auto;\r\n        margin-bottom: 15px;\r\n    }\r\n    #row[_ngcontent-%COMP%]   .port-box5[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        height: 370px;\r\n        object-fit: contain;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    #row[_ngcontent-%COMP%]   .port-box5[_ngcontent-%COMP%] {\r\n        max-width: 300px;\r\n        height: 300px;\r\n        display: block;\r\n        margin: auto;\r\n        margin-bottom: 15px;\r\n    }\r\n    #row[_ngcontent-%COMP%]   .port-box5[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        height: 370px;\r\n        object-fit: contain;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJGQUEyRjtBQUMvRjs7QUFFQTtJQUNJLDJGQUEyRjtJQUMzRixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsY0FBYztRQUNkLFlBQVk7UUFDWixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixjQUFjO1FBQ2QsWUFBWTtRQUNaLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250IHtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQsIDMwLCAzNywgMC4xMikgMHB4IDJweCA0cHggMHB4LCByZ2JhKDE0LCAzMCwgMzcsIDAuMzIpIDBweCAycHggMTZweCAwcHg7XHJcbn1cclxuXHJcbiNyb3cgLnBvcnQtYm94NSB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDE0LCAzMCwgMzcsIDAuMTIpIDBweCAycHggNHB4IDBweCwgcmdiYSgxNCwgMzAsIDM3LCAwLjMyKSAwcHggMnB4IDE2cHggMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzNzRweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbn1cclxuXHJcbiNyb3cgLnBvcnQtYm94NSBpbWcge1xyXG4gICAgaGVpZ2h0OiAzNzBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTNweCkge1xyXG4gICAgI3JvdyAucG9ydC1ib3g1IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICAjcm93IC5wb3J0LWJveDUgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDM3MHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAjcm93IC5wb3J0LWJveDUge1xyXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgICNyb3cgLnBvcnQtYm94NSBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMzcwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EscT":
/*!********************************************!*\
  !*** ./src/app/webdev/webdev.component.ts ***!
  \********************************************/
/*! exports provided: WebdevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebdevComponent", function() { return WebdevComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class WebdevComponent {
    constructor() { }
    ngOnInit() {
    }
}
WebdevComponent.ɵfac = function WebdevComponent_Factory(t) { return new (t || WebdevComponent)(); };
WebdevComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebdevComponent, selectors: [["app-webdev"]], decls: 81, vars: 0, consts: [[1, "w-100", "position-relative"], [1, "fixed-bg"], [1, "container"], [1, "page-title", "text-center", "w-100"], [1, "mb-0", 2, "opacity", "0"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "index.html", "title", ""], [1, "icon_house"], ["href", "portfolio.html", "title", ""], [1, "breadcrumb-item", "active"], [1, "w-100", "pt-155", "pb-120", "position-relative"], [1, "port-detail-wrap", "text-center", "w-100"], [1, "port-detail-inner", "d-inline-block"], [1, "d-block"], [1, "mb-0"], [1, "port-detail-img2", "w-100"], [1, "row"], [1, "col-md-4", "col-sm-4", "col-lg-4"], ["href", "https://www.thekachorihub.com/", "target", "_blank", "title", "", 1, "d-block", "mt-30"], ["src", "assets/webimages/kachori.png", "alt", "Portfolio Detail Image 1", 1, "img-fluid", "w-100", 2, "height", "225px"], ["href", "https://www.thekachorihub.com/", "target", "_blank"], ["href", "https://www.ctstrength.in/", "target", "_blank", "title", "", 1, "d-block", "mt-30"], ["src", "assets/webimages/ctstrength.png", "alt", "Portfolio Detail Image 2", 1, "img-fluid", "w-100"], ["href", "https://www.ctstrength.in/"], ["href", "https://www.eduarty.com/", "target", "_blank", "title", "", 1, "d-block", "mt-30"], ["src", "assets/webimages/eduarty.png", "alt", "Portfolio Detail Image 3", 1, "img-fluid", "w-100"], ["href", "https://www.eduarty.com/"], ["href", "https://vintagestudios.in/", "target", "_blank", "title", "", 1, "d-block", "mt-30"], ["src", "assets/webimages/vintage.png", "alt", "Portfolio Detail Image 2", 1, "img-fluid", "w-100"], ["href", "https://vintagestudios.in/"], ["href", "https://joshibattery.in/", "target", "_blank", "title", "", 1, "d-block", "mt-30"], ["src", "assets/webimages/joshi2.png", "alt", "Portfolio Detail Image 3", 1, "img-fluid", "w-100"], ["href", "https://joshibattery.in/"], ["href", "https://anahatamusicatelier.com/", "target", "_blank", "title", "", 1, "d-block", "mt-30"], ["src", "assets/webimages/ana.png", "alt", "Portfolio Detail Image 3", 1, "img-fluid", "w-100", 2, "height", "225px"], ["href", "https://anahatamusicatelier.com/"]], template: function WebdevComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Website developement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "WEBSITE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "WEBSITE DEVELOPEMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Product Mockup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "WEBSITE DESIGN & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " DEVELOPEMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "We are the best one to create and maintain your web presence.An effective web presence will define your business/ Products/ services and improve the demand through customer centric approach. No matter if you are a startup, Growing organization or established one. We have solutions for all. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "The Kachori Hub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Visit Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Ctstrength India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Visit Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Eduarty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Visit Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Vintage Studios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Visit Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Joshi Battery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Visit Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Anahata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Visit Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Rowdies&display=swap');\r\n.port-detail-img2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.fixed-bg[_ngcontent-%COMP%] {\r\n    background-image: url('web.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n    background-position: center;\r\n}\r\n.port-detail-img2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: rgb(2, 5, 37);\r\n    animation: blink-animation 1s steps(5, start) infinite;\r\n    -webkit-animation: blink-animation 1s steps(5, start) infinite;\r\n    margin-top: 15px;\r\n    cursor: pointer;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}\r\n@media screen and (max-width: 413px) {\r\n    .fixed-bg[_ngcontent-%COMP%] {\r\n        background-position: center;\r\n        height: 60%;\r\n        width: 100%;\r\n        margin: 0;\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n        z-index: 1;\r\n    }\r\n}\r\n@media screen and (max-width: 840px) {\r\n    .fixed-bg[_ngcontent-%COMP%] {\r\n        background-position: center;\r\n        height: 60%;\r\n        width: 100%;\r\n        margin: 0;\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n        z-index: 1;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmRldi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTtBQUM1RTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxnQ0FBbUQ7SUFDbkQsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsc0RBQXNEO0lBQ3RELDhEQUE4RDtJQUM5RCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO1FBQzNCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsU0FBUztRQUNULGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsTUFBTTtRQUNOLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtRQUMzQixXQUFXO1FBQ1gsV0FBVztRQUNYLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLE1BQU07UUFDTixVQUFVO0lBQ2Q7QUFDSjtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRyIsImZpbGUiOiJ3ZWJkZXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvd2RpZXMmZGlzcGxheT1zd2FwJyk7XHJcbi5wb3J0LWRldGFpbC1pbWcyIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5maXhlZC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2Jhbm5lcnMvd2ViLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wb3J0LWRldGFpbC1pbWcyIGEgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyLCA1LCAzNyk7XHJcbiAgICBhbmltYXRpb246IGJsaW5rLWFuaW1hdGlvbiAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmstYW5pbWF0aW9uIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTNweCkge1xyXG4gICAgLmZpeGVkLWJnIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDBweCkge1xyXG4gICAgLmZpeGVkLWJnIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLypcclxuQGtleWZyYW1lcyBibGluay1hbmltYXRpbyB7XHJcbiAgICB0byB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmstYW5pbWF0aW9uIHtcclxuICAgIHRvIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmstYW5pbWF0aW9uIHtcclxuICAgIHRvIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBibGluay1hbmltYXRpb24ge1xyXG4gICAgdG8ge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxufSAqLyJdfQ== */"] });


/***/ }),

/***/ "G0il":
/*!**************************************!*\
  !*** ./src/app/smm/smm.component.ts ***!
  \**************************************/
/*! exports provided: SmmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmmComponent", function() { return SmmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class SmmComponent {
    constructor() { }
    ngOnInit() {
    }
}
SmmComponent.ɵfac = function SmmComponent_Factory(t) { return new (t || SmmComponent)(); };
SmmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmmComponent, selectors: [["app-smm"]], decls: 54, vars: 0, consts: [[1, "w-100", "position-relative"], [1, "fixed-bg"], [1, "container"], [1, "page-title", "text-center", "w-100"], [1, "mb-0", 2, "opacity", "0"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "index.html", "title", ""], [1, "icon_house"], ["href", "portfolio.html", "title", ""], [1, "breadcrumb-item", "active"], [1, "w-100", "pt-155", "pb-120", "position-relative"], [1, "port-detail-wrap", "text-center", "w-100"], [1, "port-detail-inner", "d-inline-block"], [1, "d-block"], [1, "mb-0"], [1, "port-detail-img2"], [1, "row"], [1, "col-md-4", "col-sm-4", "col-lg-4"], ["href", "", "target", "_blank", "title", "", 1, "d-block", "mt-30"], ["src", "assets/portfolio/ctso.jpg", "alt", "Portfolio Detail Image 1", 1, "img-fluid", "w-100"], ["src", "assets/portfolio/anahata.jpg", "alt", "Portfolio Detail Image 2", 1, "img-fluid", "w-100"], ["src", "assets/portfolio/aami.jpg", "alt", "Portfolio Detail Image 3", 1, "img-fluid", "w-100"], ["src", "assets/portfolio/dusshera.jpg", "alt", "Portfolio Detail Image 2", 1, "img-fluid", "w-100"], ["src", "assets/portfolio/green amrut.jpg", "alt", "Portfolio Detail Image 3", 1, "img-fluid", "w-100"], ["src", "assets/portfolio/onair.jpg", "alt", "Portfolio Detail Image 3", 1, "img-fluid", "w-100"], ["src", "assets/portfolio/satwik.jpeg", "alt", "Portfolio Detail Image 3", 1, "img-fluid", "w-100"]], template: function SmmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Social Media Marketingh1>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SOCIAL MEDIA MARKETING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Product Mockup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SOCIAL MEDIA & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " MARKETING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Social media is considered the second-most effective form of digital marketing, yet more than one-third of businesses have no social media presence at all. This is largely due to small businesses not having the time or resources to invest in social media marketing. To eradicate this, We\u2019ve designed our packages according to business types, also we offer customised packages as per your need.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".fixed-bg[_ngcontent-%COMP%] {\r\n    background-image: url('smm.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 90%;\r\n    background-position: center;\r\n}\r\n\r\n@media screen and (max-width: 413px) {\r\n    .fixed-bg[_ngcontent-%COMP%] {\r\n        background-position: center;\r\n        background-size: 100% 55%;\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0;\r\n        position: absolute;\r\n        top: -101px;\r\n        z-index: 1;\r\n    }\r\n    .port-detail-img2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin: auto;\r\n        width: 289px;\r\n        margin-bottom: 15px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 840px) {\r\n    .fixed-bg[_ngcontent-%COMP%] {\r\n        background-position: center;\r\n        background-size: 100% 55%;\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0;\r\n        position: absolute;\r\n        top: -101px;\r\n        z-index: 1;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQW1EO0lBQ25ELDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7UUFDM0IseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixXQUFXO1FBQ1gsU0FBUztRQUNULGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7UUFDM0IseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixXQUFXO1FBQ1gsU0FBUztRQUNULGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic21tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4ZWQtYmcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iYW5uZXJzL3NtbS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxM3B4KSB7XHJcbiAgICAuZml4ZWQtYmcge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTUlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTEwMXB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAucG9ydC1kZXRhaWwtaW1nMiBhIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDI4OXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0MHB4KSB7XHJcbiAgICAuZml4ZWQtYmcge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTUlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTEwMXB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "LHoH":
/*!******************************************!*\
  !*** ./src/app/radio/radio.component.ts ***!
  \******************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class RadioComponent {
    constructor() { }
    ngOnInit() {
    }
}
RadioComponent.ɵfac = function RadioComponent_Factory(t) { return new (t || RadioComponent)(); };
RadioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RadioComponent, selectors: [["app-radio"]], decls: 39, vars: 0, consts: [[1, "w-100", "position-relative"], [1, "fixed-bg"], [1, "container"], [1, "page-title", "text-center", "w-100"], [1, "mb-0", 2, "color", "rgb(248, 248, 248)", "opacity", "0.8"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "index.html", "title", ""], [1, "icon_house"], ["href", "portfolio.html", "title", ""], [1, "breadcrumb-item", "active"], ["id", "mysection"], [1, "videosection"], [1, "player"], [1, "musicbox"], ["src", "assets/audimg/img1.jpg"], ["controls", "controls"], ["src", "assets/audio/a1.aac", "type", "audio/aac"], ["src", "assets/audimg/img2.jpg"], ["src", "assets/audio/a2.aac", "type", "audio/aac"], ["src", "assets/audimg/img3.png"], ["src", "assets/audio/a3.aac", "type", "audio/aac"], ["src", "assets/audimg/img4.jpg"], ["src", "assets/audio/a4.aac", "type", "audio/aac"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Radio ADVERTISING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "audio", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "source", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "audio", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "source", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "audio", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "source", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "audio", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "source", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#mysection[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 50px;\r\n    width: 100%;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.fixed-bg[_ngcontent-%COMP%] {\r\n    background-image: url('out.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100%, 100%;\r\n    background-position: center;\r\n}\r\n\r\n.videosection[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.player[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 300px;\r\n    margin: 10px 10px;\r\n    background: white;\r\n    box-shadow: 0, 50px, 80px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.player[_ngcontent-%COMP%]   .musicbox[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 250px;\r\n}\r\n\r\n.player[_ngcontent-%COMP%]   .musicbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.player[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #111;\r\n    outline: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n@media screen and (max-width: 412px) {\r\n    .player[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin: auto;\r\n        margin-top: 10px;\r\n    }\r\n    .videosection[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .player[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin: auto;\r\n        margin-top: 10px;\r\n    }\r\n    .videosection[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        flex-direction: column;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0NBQTJDO0lBQzNDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsc0JBQXNCO0lBQzFCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsc0JBQXNCO0lBQzFCO0FBQ0oiLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5maXhlZC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL291dC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSwgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLnZpZGVvc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wbGF5ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAsIDUwcHgsIDgwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuLnBsYXllciAubXVzaWNib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4ucGxheWVyIC5tdXNpY2JveCBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5wbGF5ZXIgYXVkaW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gICAgb3V0bGluZTogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTJweCkge1xyXG4gICAgLnBsYXllciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAudmlkZW9zZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5wbGF5ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnZpZGVvc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "PlS/":
/*!**********************************************!*\
  !*** ./src/app/graphic/graphic.component.ts ***!
  \**********************************************/
/*! exports provided: GraphicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicComponent", function() { return GraphicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class GraphicComponent {
    constructor() { }
    ngOnInit() {
    }
}
GraphicComponent.ɵfac = function GraphicComponent_Factory(t) { return new (t || GraphicComponent)(); };
GraphicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraphicComponent, selectors: [["app-graphic"]], decls: 73, vars: 0, consts: [[1, "w-100", "position-relative"], [1, "fixed-bg", 2, "background-image", "url(https://www.pixelo.net/wp-content/uploads/2018/10/1934823-e1540532501723.jpg)"], [1, "container"], [1, "page-title", "text-center", "w-100"], [1, "mb-0", 2, "opacity", "0"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "index.html", "title", ""], [1, "icon_house"], ["href", "portfolio.html", "title", ""], [1, "breadcrumb-item", "active"], [1, "w-100", "pt-155", "pb-120", "position-relative"], [1, "port-detail-wrap", "w-100"], [1, "row"], [1, "col-md-8", "col-sm-12", "col-lg-8"], [1, "leftside"], [1, "theiaStickySidebar"], [1, "port-detail-img", "w-100", 2, "cursor", "pointer"], ["src", "assets/logos/atelier.jpg", 1, "img-fluid", "w-100"], ["src", "assets/portfolio/Copy of 3.jpg", 1, "img-fluid", "mt-40", "w-100"], ["src", "assets/logos/Damle caterers.png", 1, "img-fluid", "mt-40", "w-100"], ["src", "assets/portfolio/aamigosstory.jpg", 1, "img-fluid", "mt-40", "w-100"], ["src", "assets/logos/aami.png", 1, "img-fluid", "mt-40", "w-100"], ["src", "assets/portfolio/international.jpg", 1, "img-fluid", "mt-40", "w-100"], ["src", "assets/logos/swaad.png", 1, "img-fluid", "mt-40", "w-100"], ["src", "assets/portfolio/tilakpost.jpeg", 1, "img-fluid", "mt-40", "w-100"], ["src", "assets/logos/vintage.png", 1, "img-fluid", "mt-40", "w-100"], [1, "col-md-4", "col-sm-12", "col-lg-4"], [1, "rightside"], [1, "port-detail-info"], [1, "d-block"], [1, "mb-0"], [1, "port-scl", "d-block"], [1, "port-scl-inner"], ["href", "javascript:void(0);", "title", "", "target", "_blank"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-youtube"], [1, "fab", "fa-pinterest-p"], [1, "port-ord-info", "w-100"], ["href", "javascript:void(0);", "title", ""]], template: function GraphicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Graphic Design & Developement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Portfolio Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Product Mockup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Graphic Design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Logo Deign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "SHARE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Qestigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum est notare quam littera gothica, quam nunc putamus est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum quarta decima et quinta decima. quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum quarta decima et quinta decima. anteposuerit litterarum quarta decima et quinta decima.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Client:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Mark Thompson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Services:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Design, Branding, Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Project Link:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "website.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".port-detail-wrap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .leftside[_ngcontent-%COMP%] {\r\n    position: -webkit-sticky;\r\n    height: 600px;\r\n    overflow-y: scroll;\r\n    width: 90%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYXBoaWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZCIsImZpbGUiOiJncmFwaGljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydC1kZXRhaWwtd3JhcCAucm93IC5sZWZ0c2lkZSB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Rcx8":
/*!******************************************!*\
  !*** ./src/app/photo/photo.component.ts ***!
  \******************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class PhotoComponent {
    constructor() { }
    ngOnInit() {
    }
}
PhotoComponent.ɵfac = function PhotoComponent_Factory(t) { return new (t || PhotoComponent)(); };
PhotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoComponent, selectors: [["app-photo"]], decls: 54, vars: 0, consts: [[1, "w-100", "position-relative"], [1, "fixed-bg"], [1, "container"], [1, "page-title", "text-center", "w-100"], [1, "mb-0", 2, "color", "white", "opacity", "0.6", "visibility", "hidden"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "index.html", "title", ""], [1, "icon_house"], ["href", "portfolio.html", "title", ""], [1, "breadcrumb-item", "active"], [1, "mt-5"], [1, "col-sm-6", "col-md-4", "col-lg-3", "item"], ["href", "assets/ruturajsir/apple.jpg", "data-lightbox", "photos"], ["src", "assets/ruturajsir/apple.jpg", 1, "img-fluid", "m-1"], ["href", "assets/ruturajsir/biomed.JPG", "data-lightbox", "photos"], ["src", "assets/ruturajsir/biomed.JPG", 1, "img-fluid", "m-2"], ["href", "assets/ruturajsir/dagan.jpg", "data-lightbox", "photos"], ["src", "assets/ruturajsir/dagan.jpg", 1, "img-fluid", "m-2"], ["href", "assets/ruturajsir/gift.JPG", "data-lightbox", "photos"], ["src", "assets/ruturajsir/gift.JPG", 1, "img-fluid", "m-2"], ["href", "assets/ruturajsir/lux.JPG", "data-lightbox", "photos"], ["src", "assets/ruturajsir/lux.JPG", 1, "img-fluid", "m-2"], ["href", "assets/ruturajsir/nilon.JPG", "data-lightbox", "photos"], ["src", "assets/ruturajsir/nilon.JPG", 1, "img-fluid", "m-2"], ["href", "assets/ruturajsir/obessed.JPG", "data-lightbox", "photos"], ["src", "assets/ruturajsir/obessed.JPG", 1, "img-fluid", "m-2"], ["href", "assets/ruturajsir/tricura.jpg", "data-lightbox", "photos"], ["src", "assets/ruturajsir/tricura.jpg", 1, "img-fluid", "m-2"], ["href", "assets/ruturajsir/model.JPG", "data-lightbox", "photos"], ["src", "assets/ruturajsir/model.JPG", 1, "img-fluid", "m-2"], ["href", "assets/ruturajsir/mp1.JPG", "data-lightbox", "photos"], ["src", "assets/ruturajsir/mp1.JPG", 1, "img-fluid", "m-2"], ["href", "assets/ruturajsir/mp2.jpg", "data-lightbox", "photos"], ["src", "assets/ruturajsir/mp2.jpg", 1, "img-fluid", "m-2"], ["href", "assets/ruturajsir/model1.jpg", "data-lightbox", "photos"], ["src", "assets/ruturajsir/model1.jpg", 1, "img-fluid", "m-2"]], template: function PhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PHOTOGRAPHY ADVERTISING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".fixed-bg[_ngcontent-%COMP%] {\r\n    background-image: url('photovideo.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n    background-position: center;\r\n}\r\n\r\n@media screen and (max-width: 413px) {\r\n    .fixed-bg[_ngcontent-%COMP%] {\r\n        background-position: center;\r\n        height: 60%;\r\n        width: 100%;\r\n        margin: 0;\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n        z-index: 1;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 840px) {\r\n    .fixed-bg[_ngcontent-%COMP%] {\r\n        background-position: center;\r\n        height: 60%;\r\n        width: 100%;\r\n        margin: 0;\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n        z-index: 1;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBMEQ7SUFDMUQsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtRQUMzQixXQUFXO1FBQ1gsV0FBVztRQUNYLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLE1BQU07UUFDTixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO1FBQzNCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsU0FBUztRQUNULGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsTUFBTTtRQUNOLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InBob3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4ZWQtYmcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iYW5uZXJzL3Bob3RvdmlkZW8uanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDEzcHgpIHtcclxuICAgIC5maXhlZC1iZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcclxuICAgIC5maXhlZC1iZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");




class AppComponent {
    constructor(route) {
        this.route = route;
    }
    myweb() {
        this.route.navigate(['/web']);
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 101, vars: 0, consts: [[1, "w-100", "drk-bg4", "pt-90", "pb-40"], [1, "container"], [1, "footer-inner2", "w-100"], [1, "row"], [1, "col-md-6", "col-sm-6", "col-lg-3"], [1, "widget", "w-100", "mb-55"], [1, "logo", "d-inline-block"], ["href", "index.html", "title", "Home"], ["src", "assets/white.png", "alt", "Logo", "srcset", "assets/white.png", 1, "img-fluid", 2, "width", "190px", "height", "100px"], [1, "mb-0"], [1, "w-100", "position-relative"], ["type", "email", "placeholder", "Email Address", 1, "brd-rd3", "w-100"], ["type", "submit"], [1, "far", "fa-envelope"], [1, "col-md-6", "col-sm-6", "col-lg-3", 2, "visibility", "hidden"], [1, "thm-clr"], [1, "twitter-list", "mb-0", "list-unstyled", "w-100"], [1, "w-100"], [1, "fab", "fa-twitter"], ["href", "javascript:void(0);", "title", ""], ["id", "myfoot", 1, "col-md-6", "col-sm-6", "col-lg-3"], [1, "insta-gal", "d-flex", "flex-wrap", "mb-0", "list-unstyled"], ["href", "javascript:void(0);", "title", "", 1, "d-block", "w-100"], ["src", "assets/images/resources/insta-img1.jpg", "alt", "Instagram Image 1", 1, "img-fluid"], ["src", "assets/images/resources/insta-img2.jpg", "alt", "Instagram Image 2", 1, "img-fluid"], ["src", "assets/images/resources/insta-img3.jpg", "alt", "Instagram Image 3", 1, "img-fluid"], ["src", "assets/images/resources/insta-img4.jpg", "alt", "Instagram Image 4", 1, "img-fluid"], ["src", "assets/images/resources/insta-img5.jpg", "alt", "Instagram Image 5", 1, "img-fluid"], ["src", "assets/images/resources/insta-img6.jpg", "alt", "Instagram Image 6", 1, "img-fluid"], ["href", "javascript:void(0);", "title", "", 1, "follow-btn", "d-inline-block"], ["src", "assets/images/insta-icon.png", "alt", "Instagram Icon"], [1, "cont-info-list", "mb-0", "list-unstyled", "w-100"], [1, "scl4", "w-100"], ["href", "https://www.facebook.com/Socioad/", "title", "Facebook", "target", "_blank", 1, "d-inline-block", "rounded-circle", "facebook"], [1, "fab", "fa-facebook-f"], ["href", "https://twitter.com/socio_ad", "title", "Twitter", "target", "_blank", 1, "d-inline-block", "rounded-circle", "twitter"], ["href", "https://www.instagram.com/socio_ad/", "title", "Instagram", "target", "_blank", 1, "d-inline-block", "rounded-circle", "Instagram"], [1, "fab", "fa-instagram"], ["href", "https://in.linkedin.com/company/socio-ad-pvt-ltd", "title", "LinkedIn", "target", "_blank", 1, "d-inline-block", "rounded-circle", "linkedin"], [1, "fab", "fa-linkedin"], [1, "bootom-bar2", "text-center", "w-100"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\"Word of mouth isn't spoken anymore, it's Posted\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Twitter Stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Would you like to know about our next theme? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "https://t.co/69YglbWtUw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Recover WP updated to the version 1.3.4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "https://t.co/PjMoihwZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " 102, Ecstasy C, Gulawani Maharaj Road, near BLOCK-2, Kothrud, Pune, Maharashtra 411038");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " 08007287446");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Connect@socioad.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u00A9 2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Socioad Private Limited");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: ["@media screen and (max-width: 840px) {\r\n    #myfoot[_ngcontent-%COMP%] {\r\n        margin-top: -300px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 413px) {\r\n    #myfoot[_ngcontent-%COMP%] {\r\n        margin-top: -300px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDBweCkge1xyXG4gICAgI215Zm9vdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTMwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTNweCkge1xyXG4gICAgI215Zm9vdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTMwMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _webdev_webdev_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webdev/webdev.component */ "EscT");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _graphic_graphic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphic/graphic.component */ "PlS/");
/* harmony import */ var _application_application_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application/application.component */ "j4it");
/* harmony import */ var _smm_smm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./smm/smm.component */ "G0il");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./photo/photo.component */ "Rcx8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./radio/radio.component */ "LHoH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "8Y7J");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _webdev_webdev_component__WEBPACK_IMPORTED_MODULE_3__["WebdevComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _graphic_graphic_component__WEBPACK_IMPORTED_MODULE_6__["GraphicComponent"],
        _application_application_component__WEBPACK_IMPORTED_MODULE_7__["ApplicationComponent"],
        _smm_smm_component__WEBPACK_IMPORTED_MODULE_8__["SmmComponent"],
        _photo_photo_component__WEBPACK_IMPORTED_MODULE_9__["PhotoComponent"],
        _radio_radio_component__WEBPACK_IMPORTED_MODULE_11__["RadioComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]] }); })();


/***/ }),

/***/ "j4it":
/*!******************************************************!*\
  !*** ./src/app/application/application.component.ts ***!
  \******************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class ApplicationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApplicationComponent.ɵfac = function ApplicationComponent_Factory(t) { return new (t || ApplicationComponent)(); };
ApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationComponent, selectors: [["app-application"]], decls: 63, vars: 0, consts: [[1, "w-100", "position-relative"], [1, "fixed-bg"], [1, "container"], [1, "page-title", "text-center", "w-100"], [1, "mb-0", 2, "color", "white", "visibility", "hidden"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "index.html", "title", ""], [1, "icon_house"], ["href", "portfolio.html", "title", ""], [1, "breadcrumb-item", "active"], [1, "w-100", "pt-155", "pb-120", "position-relative"], [1, "port-detail-wrap", "text-center", "w-100"], [1, "port-detail-inner", "d-inline-block"], [1, "d-block"], [1, "mb-0"], [1, "port-detail-img2", "w-100"], [1, "row"], [1, "col-md-4", "col-sm-4", "col-lg-4"], ["href", "https://apps.apple.com/us/app/swaray/id1526899079", "target", "_blank", "title", "", 1, "d-block", "mt-30"], ["src", "assets/app/swaray.png", "alt", "Portfolio Detail Image 1", 1, "img-fluid", "w-100", 2, "height", "225px"], ["href", "https://apps.apple.com/us/app/swaray/id1526899079", "target", "_blank"], ["href", "https://apps.apple.com/us/app/pool-lab-aquatic-engineering/id1360432891?ls=1", "target", "_blank", "title", "", 1, "d-block", "mt-30"], ["src", "assets/app/Pool.png", "alt", "Portfolio Detail Image 2", 1, "img-fluid", "w-100"], ["href", "https://apps.apple.com/us/app/pool-lab-aquatic-engineering/id1360432891?ls=1", "target", "_blank"], ["href", "https://apps.apple.com/us/app/namariq/id1488211330", "target", "_blank", "title", "", 1, "d-block", "mt-30"], ["src", "assets/app/namariq2.png", "alt", "Portfolio Detail Image 3", 1, "img-fluid", "w-100"], ["href", "https://apps.apple.com/us/app/namariq/id1488211330", "target", "_blank"], ["href", "https://apps.apple.com/us/app/qkids/id1542800015", "target", "_blank", "title", "", 1, "d-block", "mt-30"], ["src", "assets/app/qkids.png", "alt", "Portfolio Detail Image 2", 1, "img-fluid", "w-100"], ["href", "https://apps.apple.com/us/app/qkids/id1542800015", "target", "_blank"], ["href", "https://apps.apple.com/us/app/kweeber-restaurateur/id1387323131?ls=1", "target", "_blank", "title", "", 1, "d-block", "mt-30"], ["src", "assets/app/kweeber.png", "alt", "Portfolio Detail Image 3", 1, "img-fluid", "w-100"], ["href", "https://apps.apple.com/us/app/kweeber-restaurateur/id1387323131?ls=1"]], template: function ApplicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "App Developement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "App Developement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Product Mockup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "APP DESIGN & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " DEVELOPEMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Qestigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum est notare quam littera gothica, quam nunc putamus est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum quarta decima et quinta decima. quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum quarta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Visit Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Visit Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Visit Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Visit Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Visit Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Rowdies&display=swap');\r\n    .port-detail-img2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        font-family: 'Rowdies', cursive;\r\n        text-align: center;\r\n        color: rgb(2, 5, 37);\r\n        animation: blink-animation 1s steps(5, start) infinite;\r\n        -webkit-animation: blink-animation 1s steps(5, start) infinite;\r\n        margin-top: 15px;\r\n        cursor: pointer;\r\n        font-size: 15px;\r\n    }\r\n    .fixed-bg[_ngcontent-%COMP%] {\r\n        background-image: url('soft.jpg');\r\n        background-repeat: no-repeat;\r\n        background-size: 100% 100%;\r\n        background-position: center;\r\n    }\r\n    @keyframes blink-animation {\r\n        to {\r\n            visibility: hidden;\r\n        }\r\n    }\r\n    @keyframes blink-animation {\r\n        to {\r\n            visibility: hidden;\r\n        }\r\n    }\r\n    @media screen and (max-width: 413px) {\r\n        .fixed-bg[_ngcontent-%COMP%] {\r\n            background-position: center;\r\n            height: 60%;\r\n            width: 100%;\r\n            margin: 0;\r\n            position: absolute;\r\n            left: 0;\r\n            top: 0;\r\n            z-index: 1;\r\n        }\r\n    }\r\n    @media screen and (max-width: 840px) {\r\n        .fixed-bg[_ngcontent-%COMP%] {\r\n            background-position: center;\r\n            height: 60%;\r\n            width: 100%;\r\n            margin: 0;\r\n            position: absolute;\r\n            left: 0;\r\n            top: 0;\r\n            z-index: 1;\r\n        }\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IklBQUksNEVBQTRFO0lBQzVFO1FBQ0ksK0JBQStCO1FBQy9CLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsc0RBQXNEO1FBQ3RELDhEQUE4RDtRQUM5RCxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGVBQWU7SUFDbkI7SUFFQTtRQUNJLGlDQUE0QztRQUM1Qyw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLDJCQUEyQjtJQUMvQjtJQUVBO1FBQ0k7WUFDSSxrQkFBa0I7UUFDdEI7SUFDSjtJQVFBO1FBQ0k7WUFDSSxrQkFBa0I7UUFDdEI7SUFDSjtJQVFBO1FBQ0k7WUFDSSwyQkFBMkI7WUFDM0IsV0FBVztZQUNYLFdBQVc7WUFDWCxTQUFTO1lBQ1Qsa0JBQWtCO1lBQ2xCLE9BQU87WUFDUCxNQUFNO1lBQ04sVUFBVTtRQUNkO0lBQ0o7SUFFQTtRQUNJO1lBQ0ksMkJBQTJCO1lBQzNCLFdBQVc7WUFDWCxXQUFXO1lBQ1gsU0FBUztZQUNULGtCQUFrQjtZQUNsQixPQUFPO1lBQ1AsTUFBTTtZQUNOLFVBQVU7UUFDZDtJQUNKIiwiZmlsZSI6ImFwcGxpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um93ZGllcyZkaXNwbGF5PXN3YXAnKTtcclxuICAgIC5wb3J0LWRldGFpbC1pbWcyIGEgaDMge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm93ZGllcycsIGN1cnNpdmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMiwgNSwgMzcpO1xyXG4gICAgICAgIGFuaW1hdGlvbjogYmxpbmstYW5pbWF0aW9uIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmstYW5pbWF0aW9uIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5maXhlZC1iZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9zb2Z0LmpwZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYmxpbmstYW5pbWF0aW9uIHtcclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBibGluay1hbmltYXRpb24ge1xyXG4gICAgICAgIHRvIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBibGluay1hbmltYXRpb24ge1xyXG4gICAgICAgIHRvIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rLWFuaW1hdGlvbiB7XHJcbiAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTNweCkge1xyXG4gICAgICAgIC5maXhlZC1iZyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcclxuICAgICAgICAuZml4ZWQtYmcge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICB9Il19 */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 62, vars: 0, consts: [[1, "stick", "style1", "w-100", "d-flex", "flex-wrap", "justify-content-between", "align-items-center"], [1, "logo"], [1, "mb-0"], ["href", "index.html", "title", "Home", 2, "visibility", "hidden"], ["src", "assets/rebuilt.png", "alt", "Logo", "srcset", "assets/rebuilt.png", "width", "105", 1, "img-fluid", 2, "width", "190px", "height", "135px"], [1, "menu-btns", "d-inline-flex"], ["href", "javascript:void(0);", "title", "", 1, "search-btn", "rounded-circle"], [1, "fas", "fa-search"], ["href", "javascript:void(0);", "title", "", 1, "menu-btn", "rounded-circle"], [1, "fas", "fa-align-justify"], [1, "menu-wrap"], [1, "menu-cls-btn", "rounded-circle"], [1, "icon_close"], [1, "mb-0", "list-unstyled", "w-100"], [1, "menu-item-has-children"], ["href", "javascript:void(0);", "title", "", "routerLink", "/web"], ["href", "javascript:void(0);", "title", "", "routerLink", "/graphic"], ["href", "javascript:void(0);", "routerLink", "/application"], ["href", "javascript:void(0);", "routerLink", "/smm"], ["href", "javascript:void(0);", "routerLink", "/photo"], ["href", "contact.html", "title", ""], [1, "search-wrap", "w-100", "d-flex", "flex-wrap", "align-items-center", "justify-content-center"], [1, "search-cls-btn", "rounded-circle"], [1, "w-100"], ["type", "text", "placeholder", "Search here...."], ["type", "submit"], [1, "sticky-header", "w-100", "position-fixed"], ["href", "index.html", "title", "Home"], ["src", "assets/rebuilt.png", "alt", "Logo", "srcset", "assets/rebuilt.png", 1, "img-fluid", 2, "width", "140px", "height", "100px"], [1, "menu-wrap2"], ["href", "javascript:void(0);", "title", "", "routerLink", "/radio"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Graphic Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "App developement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Social Media marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Photo Advertising");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nav", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Social Media marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Photography & Videography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Radio-Advertising");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "App Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio/radio.component */ "LHoH");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo/photo.component */ "Rcx8");
/* harmony import */ var _smm_smm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smm/smm.component */ "G0il");
/* harmony import */ var _graphic_graphic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphic/graphic.component */ "PlS/");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _webdev_webdev_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webdev/webdev.component */ "EscT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _application_application_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application/application.component */ "j4it");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");










const routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'web',
        component: _webdev_webdev_component__WEBPACK_IMPORTED_MODULE_5__["WebdevComponent"]
    },
    {
        path: 'graphic',
        component: _graphic_graphic_component__WEBPACK_IMPORTED_MODULE_3__["GraphicComponent"]
    },
    {
        path: 'application',
        component: _application_application_component__WEBPACK_IMPORTED_MODULE_7__["ApplicationComponent"]
    },
    {
        path: 'smm',
        component: _smm_smm_component__WEBPACK_IMPORTED_MODULE_2__["SmmComponent"]
    },
    {
        path: 'photo',
        component: _photo_photo_component__WEBPACK_IMPORTED_MODULE_1__["PhotoComponent"]
    },
    {
        path: 'radio',
        component: _radio_radio_component__WEBPACK_IMPORTED_MODULE_0__["RadioComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map