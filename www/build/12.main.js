webpackJsonp([12],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrier_home__ = __webpack_require__(286);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierHomeModule", function() { return CarrierHomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarrierHomeModule = (function () {
    function CarrierHomeModule() {
    }
    return CarrierHomeModule;
}());
CarrierHomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__carrier_home__["a" /* CarrierHome */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__carrier_home__["a" /* CarrierHome */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__carrier_home__["a" /* CarrierHome */]
        ]
    })
], CarrierHomeModule);

//# sourceMappingURL=carrier-home.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_courier_service__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrierHome; });
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
 * Generated class for the CarrierHome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CarrierHome = (function () {
    function CarrierHome(navCtrl, navParams, courierService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.courierService = courierService;
    }
    CarrierHome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarrierHome');
    };
    CarrierHome.prototype.ngOnInit = function () {
        this.getTrips();
    };
    CarrierHome.prototype.getTrips = function () {
        var _this = this;
        this.courierService.getFinishedTrips().subscribe(function (trips) {
            _this.trips = trips;
            console.log('trips: ' + trips);
        }, function (error) {
        });
    };
    CarrierHome.prototype.createNewTrip = function () {
        this.navCtrl.push("CarrierTripNew");
    };
    return CarrierHome;
}());
CarrierHome = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-carrier-home',template:/*ion-inline-start:"/Users/binhu/Desktop/bryngs/bryngs_app/src/pages/carrier-home/carrier-home.html"*/'<!--\n  Generated template for the CarrierHome page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>carrier-home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <button ion-button block (click)="createNewTrip()">New Trip</button>\n\n  <ion-card *ngFor="let item of trips">\n    <ion-row>\n      <ion-col>\n        {{item.origin}} -> {{item.destination}}\n      </ion-col>\n      <ion-col center text-right>\n        {{item.date}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="cube"></ion-icon>\n          <div>5</div>\n        </button>\n      </ion-col>\n      <ion-col center text-center>\n        <button ion-button icon-left clear small>\n          <div>16</div>\n          <ion-icon name="logo-usd"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col center text-right>\n        <button ion-button icon-right clear small>\n          <div>finished</div>\n          <ion-icon name="checkmark-circle"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/binhu/Desktop/bryngs/bryngs_app/src/pages/carrier-home/carrier-home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_courier_service__["a" /* CourierService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_courier_service__["a" /* CourierService */]])
], CarrierHome);

//# sourceMappingURL=carrier-home.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map