webpackJsonp([10],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrier_trip_new__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierTripNewModule", function() { return CarrierTripNewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarrierTripNewModule = (function () {
    function CarrierTripNewModule() {
    }
    return CarrierTripNewModule;
}());
CarrierTripNewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__carrier_trip_new__["a" /* CarrierTripNew */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__carrier_trip_new__["a" /* CarrierTripNew */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__carrier_trip_new__["a" /* CarrierTripNew */]
        ]
    })
], CarrierTripNewModule);

//# sourceMappingURL=carrier-trip-new.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrierTripNew; });
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
 * Generated class for the CarrierTripNew page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CarrierTripNew = (function () {
    function CarrierTripNew(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CarrierTripNew.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarrierTripNew');
    };
    CarrierTripNew.prototype.publishTrip = function () {
        this.navCtrl.push("CarrierTripOngoing");
    };
    return CarrierTripNew;
}());
CarrierTripNew = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-carrier-trip-new',template:/*ion-inline-start:"/Users/binhu/Desktop/bryngs/bryngs_app/src/pages/carrier-trip-new/carrier-trip-new.html"*/'<!--\n  Generated template for the CarrierTripNew page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>carrier-trip-new</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <ion-list no-border>\n      <ion-list-header>\n        Trip info\n      </ion-list-header>\n\n      <ion-item>\n        <ion-icon name=\'planet\' item-left></ion-icon>\n        Destination\n        <ion-note item-right>\n        Berlin\n        </ion-note>\n      </ion-item>\n\n      <ion-item>\n        <ion-toggle checked="false"></ion-toggle>\n        <ion-label>\n          Carry Package\n        </ion-label>\n        <ion-icon name=\'body\' item-left></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\'car\' item-left></ion-icon>\n        Car Type\n        <ion-icon name=\'car\' item-right color="secondary"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\'time\' item-left></ion-icon>\n        Start\n        <ion-note item-right>\n        13:00 4.Mai.2017\n        </ion-note>\n      </ion-item>\n    </ion-list>\n\n  <button ion-button block (click)="publishTrip()">Publish Trip</button>\n</ion-content>\n'/*ion-inline-end:"/Users/binhu/Desktop/bryngs/bryngs_app/src/pages/carrier-trip-new/carrier-trip-new.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CarrierTripNew);

//# sourceMappingURL=carrier-trip-new.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map