(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-market-my-market-module"],{

/***/ "./src/app/my-market/business-item/business-item.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/my-market/business-item/business-item.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-market/business-item/business-item.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/my-market/business-item/business-item.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-4\"*ngFor=\"let item of busItem;let i = index\">\n          <img class=\"rounded-circle\" src=\"http://temp.im/140x140/#fff\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>{{item.title}}</h2>\n          <p>{{item.secondTitle}}</p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\" [routerLink]=\"item.routeInfo\">{{item.btnName}} &raquo;</a></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/my-market/business-item/business-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/my-market/business-item/business-item.component.ts ***!
  \********************************************************************/
/*! exports provided: BusinessItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessItemComponent", function() { return BusinessItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BusinessItemComponent = /** @class */ (function () {
    function BusinessItemComponent() {
        this.busItem = [
            { imgSrc: 'http://temp.im/140x140/#fff', routeInfo: '/newcar', title: '新车业务', secondTitle: '关注最新汽车行业动向！', btnName: '了解详情' },
            { imgSrc: 'http://temp.im/140x140/#fff', routeInfo: '/usedcar', title: '二手车业务', secondTitle: '提供省心的二手车交易服务！', btnName: '了解详情' },
            { imgSrc: 'http://temp.im/140x140/#fff', routeInfo: 'carFinanceDetail', title: '汽车金融', secondTitle: '提供最全最贴心的的汽车金融政策！', btnName: '了解详情' }
        ];
    }
    BusinessItemComponent.prototype.ngOnInit = function () {
    };
    BusinessItemComponent.prototype.itemClick = function (url) {
        console.log(url);
    };
    BusinessItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-business-item',
            template: __webpack_require__(/*! ./business-item.component.html */ "./src/app/my-market/business-item/business-item.component.html"),
            styles: [__webpack_require__(/*! ./business-item.component.css */ "./src/app/my-market/business-item/business-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BusinessItemComponent);
    return BusinessItemComponent;
}());



/***/ }),

/***/ "./src/app/my-market/carousel-item/carousel-item.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/my-market/carousel-item/carousel-item.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-market/carousel-item/carousel-item.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/my-market/carousel-item/carousel-item.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<carousel>\n  <slide *ngFor=\"let item of carousel\">\n    <img src={{item.imgSrc}} alt={{item.imgAlt}} data-src=\"{{item.dataSrc}}\" style=\"display: block; width: 100%; height:500px\">\n  </slide>\n</carousel>\n"

/***/ }),

/***/ "./src/app/my-market/carousel-item/carousel-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/my-market/carousel-item/carousel-item.component.ts ***!
  \********************************************************************/
/*! exports provided: CarouselItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemComponent", function() { return CarouselItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselItemComponent = /** @class */ (function () {
    function CarouselItemComponent() {
        this.carousel = [
            { imgSrc: 'http://temp.im/1890x500/31A4D3', imgAlt: '第一 东方汽车', dataSrc: 'http://temp.im/1890x500/31A4D3' },
            { imgSrc: 'http://temp.im/1890x500/FFAEC9', imgAlt: '第二 东方汽车', dataSrc: 'http://temp.im/1890x500/FFAEC9' },
            { imgSrc: 'http://temp.im/1890x500/333', imgAlt: '第三 东方汽车', dataSrc: 'http://temp.im/1890x500/333' }
        ];
    }
    CarouselItemComponent.prototype.ngOnInit = function () {
    };
    CarouselItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel-item',
            template: __webpack_require__(/*! ./carousel-item.component.html */ "./src/app/my-market/carousel-item/carousel-item.component.html"),
            styles: [__webpack_require__(/*! ./carousel-item.component.css */ "./src/app/my-market/carousel-item/carousel-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselItemComponent);
    return CarouselItemComponent;
}());



/***/ }),

/***/ "./src/app/my-market/contact-us/contact-us.component.css":
/*!***************************************************************!*\
  !*** ./src/app/my-market/contact-us/contact-us.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-market/contact-us/contact-us.component.html":
/*!****************************************************************!*\
  !*** ./src/app/my-market/contact-us/contact-us.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-us works!\n</p>\n"

/***/ }),

/***/ "./src/app/my-market/contact-us/contact-us.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/my-market/contact-us/contact-us.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/my-market/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/my-market/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/my-market/content/content.component.css":
/*!*********************************************************!*\
  !*** ./src/app/my-market/content/content.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width:320px){\r\n  #myCarousel{\r\n    display: none;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/my-market/content/content.component.html":
/*!**********************************************************!*\
  !*** ./src/app/my-market/content/content.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel\">\n  <carousel>\n    <slide>\n      <img src=\"http://temp.im/1890x500/31A4D3\" alt=\"first slide\" style=\"display: block; width: 100%; height:500px\">\n    </slide>\n    <slide>\n      <img src=\"http://temp.im/1890x500/FFAEC9\" alt=\"second slide\" style=\"display: block; width: 100%; height:500px\">\n    </slide>\n    <slide>\n      <img src=\"http://temp.im/1890x500/333\" alt=\"third slide\" style=\"display: block; width: 100%; height:500px\">\n    </slide>\n  </carousel>\n</div>\n\n<div class=\"container marketing\">\n\n  <!-- Three columns of text below the carousel -->\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"http://temp.im/140x140/#fff\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>新车业务</h2>\n      <p>关注最新汽车行业动向！</p>\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">了解详情 &raquo;</a></p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"http://temp.im/140x140/#fff\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>二手车业务</h2>\n      <p>提供省心的二手车交易服务！</p>\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">了解详情 &raquo;</a></p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"http://temp.im/140x140/#fff\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>汽车金融</h2>\n      <p>提供最全最贴心的的汽车金融政策！</p>\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">了解详情 &raquo;</a></p>\n    </div><!-- /.col-lg-4 -->\n  </div><!-- /.row -->\n\n\n  <!-- START THE FEATURETTES -->\n\n  <hr class=\"featurette-divider\">\n\n  <div class=\"row featurette\">\n    <div class=\"col-md-7\">\n      <h2 class=\"featurette-heading\">First featurette heading. <span class=\"text-muted\">It'll blow your mind.</span></h2>\n      <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n    </div>\n    <div class=\"col-md-5\">\n      <img class=\"featurette-image img-fluid mx-auto\" src=\"http://temp.im/500x500/4c77f2\" data-src=\"http://temp.im/500x500/4c77f2\" alt=\"Generic placeholder image\">\n    </div>\n  </div>\n\n  <hr class=\"featurette-divider\">\n\n  <div class=\"row featurette\">\n    <div class=\"col-md-7 order-md-2\">\n      <h2 class=\"featurette-heading\">Oh yeah, it's that good. <span class=\"text-muted\">See for yourself.</span></h2>\n      <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n    </div>\n    <div class=\"col-md-5 order-md-1\">\n      <img class=\"featurette-image img-fluid mx-auto\" src=\"http://temp.im/500x500/4c77f2\" data-src=\"http://temp.im/500x500/4c77f2\" alt=\"Generic placeholder image\">\n    </div>\n  </div>\n\n  <hr class=\"featurette-divider\">\n\n  <div class=\"row featurette\">\n    <div class=\"col-md-7\">\n      <h2 class=\"featurette-heading\">And lastly, this one. <span class=\"text-muted\">Checkmate.</span></h2>\n      <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n    </div>\n    <div class=\"col-md-5\">\n      <img class=\"featurette-image img-fluid mx-auto\" src=\"http://temp.im/500x500/4c77f2\" data-src=\"http://temp.im/500x500/4c77f2\" alt=\"Generic placeholder image\">\n    </div>\n  </div>\n\n  <hr class=\"featurette-divider\">\n\n  <!-- /END THE FEATURETTES -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/my-market/content/content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/my-market/content/content.component.ts ***!
  \********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/my-market/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/my-market/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/my-market/my-market.component.css":
/*!***************************************************!*\
  !*** ./src/app/my-market/my-market.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.marketing{\r\n  margin-top:100px;\r\n}\r\n.mainclass{\r\n  width:90%;\r\n  margin:60px auto;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/my-market/my-market.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-market/my-market.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<main role=\"main\" class=\"mainclass\">\r\n  <app-carousel-item></app-carousel-item>\r\n  <div class=\"container marketing\">\r\n    <!-- Three columns of text below the carousel -->\r\n    <app-business-item></app-business-item>\r\n    <!-- START THE FEATURETTES -->\r\n    <app-photo-list></app-photo-list>\r\n    <hr class=\"featurette-divider\">\r\n    <!-- /END THE FEATURETTES -->\r\n  </div>\r\n  <!-- /.container -->\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/my-market/my-market.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-market/my-market.component.ts ***!
  \**************************************************/
/*! exports provided: MyMarketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMarketComponent", function() { return MyMarketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyMarketComponent = /** @class */ (function () {
    function MyMarketComponent() {
    }
    MyMarketComponent.prototype.ngOnInit = function () {
    };
    MyMarketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-market',
            template: __webpack_require__(/*! ./my-market.component.html */ "./src/app/my-market/my-market.component.html"),
            styles: [__webpack_require__(/*! ./my-market.component.css */ "./src/app/my-market/my-market.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyMarketComponent);
    return MyMarketComponent;
}());



/***/ }),

/***/ "./src/app/my-market/my-market.module.ts":
/*!***********************************************!*\
  !*** ./src/app/my-market/my-market.module.ts ***!
  \***********************************************/
/*! exports provided: MyMarketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMarketModule", function() { return MyMarketModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_market_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-market.component */ "./src/app/my-market/my-market.component.ts");
/* harmony import */ var _my_market_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-market.router */ "./src/app/my-market/my-market.router.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/content.component */ "./src/app/my-market/content/content.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/my-market/contact-us/contact-us.component.ts");
/* harmony import */ var _photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photo-list/photo-list.component */ "./src/app/my-market/photo-list/photo-list.component.ts");
/* harmony import */ var _business_item_business_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./business-item/business-item.component */ "./src/app/my-market/business-item/business-item.component.ts");
/* harmony import */ var _carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./carousel-item/carousel-item.component */ "./src/app/my-market/carousel-item/carousel-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var MyMarketModule = /** @class */ (function () {
    function MyMarketModule() {
    }
    MyMarketModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _my_market_component__WEBPACK_IMPORTED_MODULE_3__["MyMarketComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"],
                _photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_8__["PhotoListComponent"],
                _business_item_business_item_component__WEBPACK_IMPORTED_MODULE_9__["BusinessItemComponent"],
                _carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_10__["CarouselItemComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_my_market_router__WEBPACK_IMPORTED_MODULE_4__["myMarketRooutes"])
            ],
            providers: [],
        })
    ], MyMarketModule);
    return MyMarketModule;
}());



/***/ }),

/***/ "./src/app/my-market/my-market.router.ts":
/*!***********************************************!*\
  !*** ./src/app/my-market/my-market.router.ts ***!
  \***********************************************/
/*! exports provided: myMarketRooutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myMarketRooutes", function() { return myMarketRooutes; });
/* harmony import */ var _my_market_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-market.component */ "./src/app/my-market/my-market.component.ts");

var myMarketRooutes = [
    { path: '', component: _my_market_component__WEBPACK_IMPORTED_MODULE_0__["MyMarketComponent"] },
];


/***/ }),

/***/ "./src/app/my-market/photo-list/photo-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/my-market/photo-list/photo-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-market/photo-list/photo-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/my-market/photo-list/photo-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let m of market;let i = index\">\n  <hr class=\"featurette-divider\">\n  <div class=\"row featurette\">\n    <div class=\"col-md-7 {{ i%2 != 0? 'order-md-2':''}}\">\n      <h2 class=\"featurette-heading\">{{m.title}}<span class=\"text-muted\"> {{m.secondTitle}} </span></h2>\n      <p class=\"lead\">{{m.content}}</p>\n    </div>\n    <div class=\"col-md-5 {{ i%2 != 0? 'order-md-1':''}}\">\n      <img class=\"featurette-image img-fluid mx-auto\" src = {{m.imgSrc}} data-src= {{m.dataSrc}} alt={{m.imgAlt}}>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/my-market/photo-list/photo-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/my-market/photo-list/photo-list.component.ts ***!
  \**************************************************************/
/*! exports provided: PhotoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListComponent", function() { return PhotoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoListComponent = /** @class */ (function () {
    function PhotoListComponent() {
        this.market = [
            { title: '东方汽车20年', secondTitle: '_路见美好', content: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna,',
                imgSrc: 'http://temp.im/500x500/4c77f2', dataSrc: 'http://temp.im/500x500/4c77f2', imgAlt: '东方汽车', imgHeight: 500, imgWidth: 500 },
            { title: '东方汽车20年', secondTitle: '_路见美好', content: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna,',
                imgSrc: 'http://temp.im/500x500/4c77f2', dataSrc: 'http://temp.im/500x500/4c77f2', imgAlt: '东方汽车', imgHeight: 500, imgWidth: 500 },
            { title: '东方汽车20年', secondTitle: '_路见美好', content: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna,',
                imgSrc: 'http://temp.im/500x500/4c77f2', dataSrc: 'http://temp.im/500x500/4c77f2', imgAlt: '东方汽车', imgHeight: 500, imgWidth: 500 }
        ];
    }
    PhotoListComponent.prototype.ngOnInit = function () {
    };
    PhotoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-list',
            template: __webpack_require__(/*! ./photo-list.component.html */ "./src/app/my-market/photo-list/photo-list.component.html"),
            styles: [__webpack_require__(/*! ./photo-list.component.css */ "./src/app/my-market/photo-list/photo-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoListComponent);
    return PhotoListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=my-market-my-market-module.js.map