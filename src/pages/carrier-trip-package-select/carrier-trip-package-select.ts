import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the CarrierTripPackageSelect page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-carrier-trip-package-select',
  templateUrl: 'carrier-trip-package-select.html',
})
export class CarrierTripPackageSelect {
  packageStatus:number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    events.subscribe('numberInput', userEventData => {
      console.log('event data:::::', userEventData[0]);
      this.packageStatus = <number>userEventData[0];
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrierTripPackageSelect');
  }

  public pickupPackage() {
    this.navCtrl.push("CarrierTripPackageNumberInput", {type : 1});
  }

  public dropoffPackage() {
    this.navCtrl.push("CarrierTripPackageNumberInput", {type : 2});
  }
}
