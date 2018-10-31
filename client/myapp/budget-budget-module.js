(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["budget-budget-module"],{

/***/ "./src/app/budget/budget.component.css":
/*!*********************************************!*\
  !*** ./src/app/budget/budget.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainclass{\r\n  width:88%;\r\n  margin:61px auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/budget/budget.component.html":
/*!**********************************************!*\
  !*** ./src/app/budget/budget.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"mainclass\">\n   <p>\n    budget works!\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/budget/budget.component.ts":
/*!********************************************!*\
  !*** ./src/app/budget/budget.component.ts ***!
  \********************************************/
/*! exports provided: BudgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetComponent", function() { return BudgetComponent; });
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

var BudgetComponent = /** @class */ (function () {
    function BudgetComponent() {
    }
    BudgetComponent.prototype.ngOnInit = function () {
    };
    BudgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-budget',
            template: __webpack_require__(/*! ./budget.component.html */ "./src/app/budget/budget.component.html"),
            styles: [__webpack_require__(/*! ./budget.component.css */ "./src/app/budget/budget.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BudgetComponent);
    return BudgetComponent;
}());



/***/ }),

/***/ "./src/app/budget/budget.module.ts":
/*!*****************************************!*\
  !*** ./src/app/budget/budget.module.ts ***!
  \*****************************************/
/*! exports provided: BudgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetModule", function() { return BudgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _budget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./budget.component */ "./src/app/budget/budget.component.ts");
/* harmony import */ var _budget_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./budget.router */ "./src/app/budget/budget.router.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BudgetModule = /** @class */ (function () {
    function BudgetModule() {
    }
    BudgetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_budget_router__WEBPACK_IMPORTED_MODULE_3__["budgetRooutes"])
            ],
            declarations: [
                _budget_component__WEBPACK_IMPORTED_MODULE_2__["BudgetComponent"]
            ]
        })
    ], BudgetModule);
    return BudgetModule;
}());



/***/ }),

/***/ "./src/app/budget/budget.router.ts":
/*!*****************************************!*\
  !*** ./src/app/budget/budget.router.ts ***!
  \*****************************************/
/*! exports provided: budgetRooutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "budgetRooutes", function() { return budgetRooutes; });
/* harmony import */ var _budget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget.component */ "./src/app/budget/budget.component.ts");

var budgetRooutes = [
    { path: '',
        component: _budget_component__WEBPACK_IMPORTED_MODULE_0__["BudgetComponent"],
        children: []
    }
];


/***/ })

}]);
//# sourceMappingURL=budget-budget-module.js.map