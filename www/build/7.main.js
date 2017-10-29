webpackJsonp([7],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrier_trip_package_select__ = __webpack_require__(291);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierTripPackageSelectModule", function() { return CarrierTripPackageSelectModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarrierTripPackageSelectModule = (function () {
    function CarrierTripPackageSelectModule() {
    }
    return CarrierTripPackageSelectModule;
}());
CarrierTripPackageSelectModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__carrier_trip_package_select__["a" /* CarrierTripPackageSelect */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__carrier_trip_package_select__["a" /* CarrierTripPackageSelect */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__carrier_trip_package_select__["a" /* CarrierTripPackageSelect */]
        ]
    })
], CarrierTripPackageSelectModule);

//# sourceMappingURL=carrier-trip-package-select.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrierTripPackageSelect; });
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
 * Generated class for the CarrierTripPackageSelect page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CarrierTripPackageSelect = (function () {
    function CarrierTripPackageSelect(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.packageStatus = 0;
        events.subscribe('numberInput', function (userEventData) {
            console.log('event data:::::', userEventData[0]);
            _this.packageStatus = userEventData[0];
        });
    }
    CarrierTripPackageSelect.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarrierTripPackageSelect');
    };
    CarrierTripPackageSelect.prototype.pickupPackage = function () {
        this.navCtrl.push("CarrierTripPackageNumberInput", { type: 1 });
    };
    CarrierTripPackageSelect.prototype.dropoffPackage = function () {
        this.navCtrl.push("CarrierTripPackageNumberInput", { type: 2 });
    };
    return CarrierTripPackageSelect;
}());
CarrierTripPackageSelect = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-carrier-trip-package-select',template:/*ion-inline-start:"/Users/binhu/Desktop/bryngs/bryngs_app/src/pages/carrier-trip-package-select/carrier-trip-package-select.html"*/'<!--\n  Generated template for the CarrierTripPackageSelect page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>carrier-trip-package-select</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button *ngIf = "packageStatus == 0" ion-button full (click) = "pickupPackage()">Pickup</button>\n  <button *ngIf = "packageStatus == 1" ion-button full (click) = "dropoffPackage()">Dropoff</button>\n  <button *ngIf = "packageStatus == 2" ion-button>Finished</button>\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-left>\n        <img src="assets/img/box1.jpg">\n      </ion-thumbnail>\n      <h2>Box1</h2>\n      <p>weight<2kg hoch<80cm</p>\n      <button *ngIf = "packageStatus == 0" ion-button clear item-right (click) = "pickupPackage()">Pickup</button>\n      <button *ngIf = "packageStatus == 1" ion-button clear item-right (click) = "dropoffPackage()">Dropoff</button>\n      <button *ngIf = "packageStatus == 2" ion-button clear item-right>Finished</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-left>\n        <img src="assets/img/box2.jpg">\n      </ion-thumbnail>\n      <h2>Box2</h2>\n      <p>weight<2kg hoch<80cm</p>\n      <button *ngIf = "packageStatus == 0" ion-button clear item-right (click) = "pickupPackage()">Pickup</button>\n      <button *ngIf = "packageStatus == 1" ion-button clear item-right (click) = "dropoffPackage()">Dropoff</button>\n      <button *ngIf = "packageStatus == 2" ion-button clear item-right>Finished</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-left>\n        <img src="assets/img/box3.jpg">\n      </ion-thumbnail>\n      <h2>Box3</h2>\n      <p>weight<2kg hoch<80cm</p>\n      <button *ngIf = "packageStatus == 0" ion-button clear item-right (click) = "pickupPackage()">Pickup</button>\n      <button *ngIf = "packageStatus == 1" ion-button clear item-right (click) = "dropoffPackage()">Dropoff</button>\n      <button *ngIf = "packageStatus == 2" ion-button clear item-right>Finished</button>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/binhu/Desktop/bryngs/bryngs_app/src/pages/carrier-trip-package-select/carrier-trip-package-select.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
], CarrierTripPackageSelect);

//# sourceMappingURL=carrier-trip-package-select.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map