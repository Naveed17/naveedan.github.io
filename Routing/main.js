(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"sec-about\" class=\" pt-5 pb-5\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center text-center\">\n      <div class=\"col-md-10 col-lg-8\">\n        <h1 class=\"h4\">About us</h1>\n        <p class=\"mt-4 mb-4\">Co-working spaces are brilliant for smaller companies of up to 4 people who want a regular\n          workspace. Cost effective, flexible and full of a vibrant energy that comes from hundreds of like-minded\n          people\n          going it alone.</p>\n      </div>\n    </div>\n\n    <div class=\"row mt-4\">\n      <div class=\"col-sm-4\">\n        <h4>350</h4>\n\n        <hr />\n\n        <h5>\n          members</h5>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <h4>60</h4>\n\n        <hr />\n\n        <h5>co-working spaces </h5>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <h4>3</h4>\n\n        <hr />\n\n        <h5>members' bars</h5>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: sans-serif;\n}\n\nnav {\n  height: 10vh;\n  background: #5b78c7;\n  position: relative;\n  display: flex\n}\n\n.nav-links {\n  display: flex;\n  list-style: none;\n  width: 50%;\n  /*background: lightcoral;*/\n  height: 100%;\n  justify-content: space-around;\n  align-items: center;\n  margin-left: auto;\n}\n\n.nav-links li a {\n  color: #fff;\n  text-decoration: none;\n  font-size: 16px;\n}\n\n.landing {\n  height: 90vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media screen and (max-width: 768px) {\n  .line {\n    width: 30px;\n    height: 3px;\n    background: #fff;\n    margin: 5px;\n  }\n\n  .hamburger {\n    position: absolute;\n    z-index: 999;\n    cursor: pointer;\n    right: 5%;\n    top: 50%;\n    -webkit-transform: translate(-5%, -50%);\n    transform: translate(-5%, -50%);\n  }\n\n  .nav-links {\n    position: fixed;\n    z-index: 99;\n    width: 100%;\n    height: 100vh;\n    background: #5b78c7;\n    flex-direction: column;\n    -webkit-clip-path: circle(1000px at 90% -10%);\n    clip-path: circle(1000px at 90% -10%);\n    transition: all 1s ease-out;\n    display: none;\n  }\n\n  .nav-links.open {\n    -webkit-clip-path: circle(100px at 100% -10%);\n    clip-path: circle(100px at 100% -10%);\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUVULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBR2xCO0FBQ0Y7O0FBRUE7RUFHRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsWUFBWTtFQUVaLDZCQUE2QjtFQUc3QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUdaLGFBQWE7RUFHYix1QkFBdUI7RUFHdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLHVDQUF1QztJQUN2QywrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBSW5CLHNCQUFzQjtJQUN0Qiw2Q0FBNkM7SUFDN0MscUNBQXFDO0lBRXJDLDJCQUEyQjtJQUMzQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw2Q0FBNkM7SUFDN0MscUNBQXFDO0VBQ3ZDOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxubmF2IHtcbiAgaGVpZ2h0OiAxMHZoO1xuICBiYWNrZ3JvdW5kOiAjNWI3OGM3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleFxufVxuXG4ubmF2LWxpbmtzIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogNTAlO1xuICAvKmJhY2tncm91bmQ6IGxpZ2h0Y29yYWw7Ki9cbiAgaGVpZ2h0OiAxMDAlO1xuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5uYXYtbGlua3MgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxhbmRpbmcge1xuICBoZWlnaHQ6IDkwdmg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubGluZSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuXG4gIC5oYW1idXJnZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHJpZ2h0OiA1JTtcbiAgICB0b3A6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01JSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUlLCAtNTAlKTtcbiAgfVxuXG4gIC5uYXYtbGlua3Mge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6ICM1Yjc4Yzc7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBjaXJjbGUoMTAwMHB4IGF0IDkwJSAtMTAlKTtcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgxMDAwcHggYXQgOTAlIC0xMCUpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm5hdi1saW5rcy5vcGVuIHtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogY2lyY2xlKDEwMHB4IGF0IDEwMCUgLTEwJSk7XG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMTAwcHggYXQgMTAwJSAtMTAlKTtcbiAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n\n  <h1>Routing</h1>\n\n  <div class=\"hamburger\">\n    <div class=\"line\"></div>\n    <div class=\"line\"></div>\n    <div class=\"line\"></div>\n  </div>\n  <ul class=\"nav-links\">\n\n    <li><a routerLink=\"about\">About</a></li>\n    <li><a routerLink=\"contect\">Contect</a></li>\n    <li><a routerLink=\"project\">Project</a></li>\n    <li><a routerLink=\"service\">Service</a></li>\n    <li><a routerLink=\"post\">post</a></li>\n  </ul>\n\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Routing";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contect_contect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contect/contect.component */ "./src/app/contect/contect.component.ts");
/* harmony import */ var _prject_prject_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prject/prject.component */ "./src/app/prject/prject.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");














var routes = [
    {
        path: "contect",
        component: _contect_contect_component__WEBPACK_IMPORTED_MODULE_6__["ContectComponent"]
    },
    {
        path: "project",
        component: _prject_prject_component__WEBPACK_IMPORTED_MODULE_7__["PrjectComponent"]
    },
    {
        path: "about",
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"]
    },
    {
        path: "service",
        component: _service_service_component__WEBPACK_IMPORTED_MODULE_10__["ServiceComponent"]
    },
    {
        path: "posts/:id",
        component: _post_post_component__WEBPACK_IMPORTED_MODULE_13__["PostComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _contect_contect_component__WEBPACK_IMPORTED_MODULE_6__["ContectComponent"],
                _prject_prject_component__WEBPACK_IMPORTED_MODULE_7__["PrjectComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _service_service_component__WEBPACK_IMPORTED_MODULE_10__["ServiceComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_13__["PostComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, { useHash: false })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contect/contect.component.css":
/*!***********************************************!*\
  !*** ./src/app/contect/contect.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlY3QvY29udGVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contect/contect.component.html":
/*!************************************************!*\
  !*** ./src/app/contect/contect.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"text-center mt-5 mb-5\">\n    <h1>Contect Us</h1>\n  </div>\n</div>\n<div class=\"container\">\n  <form>\n    <div class=\"form-row\">\n      <div class=\"col-md-4 mb-3\">\n        <label for=\"validationServer01\">First name</label>\n        <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer01\" placeholder=\"First name\" value=\"Mark\"\n          required>\n        <div class=\"valid-feedback\">\n          Looks good!\n        </div>\n      </div>\n      <div class=\"col-md-4 mb-3\">\n        <label for=\"validationServer02\">Last name</label>\n        <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"Last name\" value=\"Otto\"\n          required>\n        <div class=\"valid-feedback\">\n          Looks good!\n        </div>\n      </div>\n      <div class=\"col-md-4 mb-3\">\n        <label for=\"validationServerUsername\">Username</label>\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"inputGroupPrepend3\">@</span>\n          </div>\n          <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServerUsername\" placeholder=\"Username\"\n            aria-describedby=\"inputGroupPrepend3\" required>\n          <div class=\"invalid-feedback\">\n            Please choose a username.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"col-md-6 mb-3\">\n        <label for=\"validationServer03\">City</label>\n        <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer03\" placeholder=\"City\" required>\n        <div class=\"invalid-feedback\">\n          Please provide a valid city.\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"validationServer04\">State</label>\n        <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer04\" placeholder=\"State\" required>\n        <div class=\"invalid-feedback\">\n          Please provide a valid state.\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"validationServer05\">Zip</label>\n        <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer05\" placeholder=\"Zip\" required>\n        <div class=\"invalid-feedback\">\n          Please provide a valid zip.\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"form-check\">\n        <input class=\"form-check-input is-invalid\" type=\"checkbox\" value=\"\" id=\"invalidCheck3\" required>\n        <label class=\"form-check-label\" for=\"invalidCheck3\">\n          Agree to terms and conditions\n        </label>\n        <div class=\"invalid-feedback\">\n          You must agree before submitting.\n        </div>\n      </div>\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/contect/contect.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contect/contect.component.ts ***!
  \**********************************************/
/*! exports provided: ContectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContectComponent", function() { return ContectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContectComponent = /** @class */ (function () {
    function ContectComponent() {
    }
    ContectComponent.prototype.ngOnInit = function () { };
    ContectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-contect",
            template: __webpack_require__(/*! ./contect.component.html */ "./src/app/contect/contect.component.html"),
            styles: [__webpack_require__(/*! ./contect.component.css */ "./src/app/contect/contect.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContectComponent);
    return ContectComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/prject/prject.component.css":
/*!*********************************************!*\
  !*** ./src/app/prject/prject.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByamVjdC9wcmplY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/prject/prject.component.html":
/*!**********************************************!*\
  !*** ./src/app/prject/prject.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div class=\"row mb-4\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Special title treatment</h5>\n          <p class=\"card-text\">\n            With supporting text below as a natural lead-in to additional\n            content.\n          </p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Special title treatment</h5>\n          <p class=\"card-text\">\n            With supporting text below as a natural lead-in to additional\n            content.\n          </p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Special title treatment</h5>\n          <p class=\"card-text\">\n            With supporting text below as a natural lead-in to additional\n            content.\n          </p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Special title treatment</h5>\n          <p class=\"card-text\">\n            With supporting text below as a natural lead-in to additional\n            content.\n          </p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Special title treatment</h5>\n          <p class=\"card-text\">\n            With supporting text below as a natural lead-in to additional\n            content.\n          </p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Special title treatment</h5>\n          <p class=\"card-text\">\n            With supporting text below as a natural lead-in to additional\n            content.\n          </p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/prject/prject.component.ts":
/*!********************************************!*\
  !*** ./src/app/prject/prject.component.ts ***!
  \********************************************/
/*! exports provided: PrjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrjectComponent", function() { return PrjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrjectComponent = /** @class */ (function () {
    function PrjectComponent() {
    }
    PrjectComponent.prototype.ngOnInit = function () {
    };
    PrjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prject',
            template: __webpack_require__(/*! ./prject.component.html */ "./src/app/prject/prject.component.html"),
            styles: [__webpack_require__(/*! ./prject.component.css */ "./src/app/prject/prject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrjectComponent);
    return PrjectComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.css":
/*!***********************************************!*\
  !*** ./src/app/service/service.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2Uvc2VydmljZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/service/service.component.html":
/*!************************************************!*\
  !*** ./src/app/service/service.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"\" [matAutocomplete]=\"auto\" />\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of posts\" [value]=\"option\">\n        {{ option.id }}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
        var _this = this;
        this.posts = [];
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.posts = data;
        })
            .catch(function (error) { return console.error(error); });
    }
    ServiceComponent.prototype.ngOnInit = function () { };
    ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-service",
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.css */ "./src/app/service/service.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/Desktop/Angular/Routing/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map