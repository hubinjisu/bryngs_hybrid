webpackJsonp([8],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrier_trip_package_number_input__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierTripPackageNumberInputModule", function() { return CarrierTripPackageNumberInputModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarrierTripPackageNumberInputModule = (function () {
    function CarrierTripPackageNumberInputModule() {
    }
    return CarrierTripPackageNumberInputModule;
}());
CarrierTripPackageNumberInputModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__carrier_trip_package_number_input__["a" /* CarrierTripPackageNumberInput */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__carrier_trip_package_number_input__["a" /* CarrierTripPackageNumberInput */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__carrier_trip_package_number_input__["a" /* CarrierTripPackageNumberInput */]
        ]
    })
], CarrierTripPackageNumberInputModule);

//# sourceMappingURL=carrier-trip-package-number-input.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrierTripPackageNumberInput; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CarrierTripPackageNumberInput page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CarrierTripPackageNumberInput = (function () {
    function CarrierTripPackageNumberInput(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.inputEvents = events;
        this.type = navParams.get('type');
        if (this.type == 1) {
            this.title = "Pick up Package";
        }
        else if (this.type == 2) {
            this.title = "Drop off Package";
        }
    }
    CarrierTripPackageNumberInput.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarrierTripPackageNumberInput');
    };
    CarrierTripPackageNumberInput.prototype.confirmPackageNumber = function () {
        if (this.type == 1) {
            this.inputEvents.publish('numberInput', "1");
        }
        else {
            this.inputEvents.publish('numberInput', "2");
        }
        this.navCtrl.pop();
    };
    return CarrierTripPackageNumberInput;
}());
CarrierTripPackageNumberInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-carrier-trip-package-number-input',template:/*ion-inline-start:"/Users/binhu/Desktop/bryngs/bryngs_app/src/pages/carrier-trip-package-number-input/carrier-trip-package-number-input.html"*/'<!--\n  Generated template for the CarrierTripPackageNumberInput page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Package Number</ion-label>\n    <ion-input type="number"></ion-input>\n  </ion-item>\n  <button ion-button block (click)="confirmPackageNumber()">Confirm</button>\n</ion-content>\n'/*ion-inline-end:"/Users/binhu/Desktop/bryngs/bryngs_app/src/pages/carrier-trip-package-number-input/carrier-trip-package-number-input.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
], CarrierTripPackageNumberInput);

//# sourceMappingURL=carrier-trip-package-number-input.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map