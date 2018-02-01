webpackJsonp([9],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrier_trip_ongoing__ = __webpack_require__(289);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierTripOngoingModule", function() { return CarrierTripOngoingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarrierTripOngoingModule = (function () {
    function CarrierTripOngoingModule() {
    }
    return CarrierTripOngoingModule;
}());
CarrierTripOngoingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__carrier_trip_ongoing__["a" /* CarrierTripOngoing */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__carrier_trip_ongoing__["a" /* CarrierTripOngoing */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__carrier_trip_ongoing__["a" /* CarrierTripOngoing */]
        ]
    })
], CarrierTripOngoingModule);

//# sourceMappingURL=carrier-trip-ongoing.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_courier_service__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrierTripOngoing; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TripStatus;
(function (TripStatus) {
    TripStatus[TripStatus["committed"] = 0] = "committed";
    TripStatus[TripStatus["selectStation"] = 1] = "selectStation";
    TripStatus[TripStatus["prepareToStart"] = 2] = "prepareToStart";
    TripStatus[TripStatus["started"] = 3] = "started";
})(TripStatus || (TripStatus = {}));
/**
 * Generated class for the CarrierTripOngoing page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CarrierTripOngoing = (function () {
    function CarrierTripOngoing(navCtrl, navParams, courierService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.courierService = courierService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.tripStatus = TripStatus.committed;
        this.color = "null";
    }
    CarrierTripOngoing.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarrierTripOngoing');
    };
    CarrierTripOngoing.prototype.ngOnInit = function () {
        this.getStorages();
    };
    CarrierTripOngoing.prototype.getStorages = function () {
        var _this = this;
        this.showLoading().then(function () {
            _this.courierService.offerTrip().subscribe(function (storages) {
                _this.storages = storages;
                console.log('storage: ' + storages);
                // this.loading.dismiss();
            }, function (error) {
                _this.showError(error);
            });
        });
    };
    CarrierTripOngoing.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        return this.loading.present();
    };
    CarrierTripOngoing.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    CarrierTripOngoing.prototype.confirmSelections = function () {
        this.tripStatus = TripStatus.prepareToStart;
        this.color = "primary";
    };
    CarrierTripOngoing.prototype.cancelSelections = function () {
        this.tripStatus = TripStatus.committed;
        this.color = "null";
    };
    CarrierTripOngoing.prototype.selectStations = function () {
        this.tripStatus = TripStatus.selectStation;
        this.color = "light";
    };
    CarrierTripOngoing.prototype.reselectStations = function () {
        this.tripStatus = TripStatus.selectStation;
        this.color = "light";
    };
    CarrierTripOngoing.prototype.selectPackages = function () {
        this.navCtrl.push("CarrierTripPackageSelect");
    };
    CarrierTripOngoing.prototype.startTrip = function () {
        this.tripStatus = TripStatus.started;
        this.color = "danger";
    };
    CarrierTripOngoing.prototype.finishTrip = function () {
        this.navCtrl.push("CarrierTripFinish");
        this.color = "secondary";
    };
    return CarrierTripOngoing;
}());
CarrierTripOngoing = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-carrier-trip-ongoing',template:/*ion-inline-start:"/Users/binhu/Desktop/bryngs/bryngs_app/src/pages/carrier-trip-ongoing/carrier-trip-ongoing.html"*/'<!--\n  Generated template for the CarrierTripOngoing page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>carrier-trip-ongoing</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-card-content>\n      <ion-card-title>\n        Munich -- Berlin\n      </ion-card-title>\n      <p>\n        14:00h 21.Mai\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col *ngIf = "tripStatus == 1">\n        <button ion-button clear small color="warning" (click)="cancelSelections()" icon-left>\n          <ion-icon name=\'close-circle\'></ion-icon>\n          cancel\n        </button>\n      </ion-col>\n      <ion-col *ngIf = "tripStatus == 1" text-center>\n        <button ion-button clear small color="danger" (click)="confirmSelections()" icon-left>\n          <ion-icon name=\'checkmark-circle\'></ion-icon>\n          confirm\n        </button>\n      </ion-col>\n      <ion-col *ngIf = "tripStatus == 0" text-right>\n        <button ion-button clear small color="danger" (click)="selectStations()" icon-left>\n          <ion-icon name=\'cube\'></ion-icon>\n          Select\n        </button>\n      </ion-col>\n      <ion-col *ngIf = "tripStatus == 2" text-left>\n        <button ion-button clear small color="danger" (click)="reselectStations()" icon-left>\n          <ion-icon name=\'cube\'></ion-icon>\n          Reselect\n        </button>\n      </ion-col>\n      <ion-col *ngIf = "tripStatus == 2" text-right>\n        <button ion-button clear small color="danger" (click)="startTrip()" icon-left>\n          <ion-icon name=\'car\'></ion-icon>\n          Start Trip\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n  <ion-list >\n    <ion-item detail-push *ngFor="let item of storages" color="primary" (click) = "selectPackages()">\n      <ion-label>\n        <h1>\n          {{ item.name }}\n        </h1>\n        <p>\n          {{item.address}}\n        </p>\n      </ion-label>\n      <ion-note item-right>\n        3 package\n      </ion-note>\n    </ion-item>\n\n\n  </ion-list>\n\n  <button ion-button block (click)="finishTrip()">Finish Trip</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/binhu/Desktop/bryngs/bryngs_app/src/pages/carrier-trip-ongoing/carrier-trip-ongoing.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_courier_service__["a" /* CourierService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_courier_service__["a" /* CourierService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], CarrierTripOngoing);

//# sourceMappingURL=carrier-trip-ongoing.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map