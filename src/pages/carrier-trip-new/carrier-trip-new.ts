import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarrierTripNew page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-carrier-trip-new',
  templateUrl: 'carrier-trip-new.html',
})
export class CarrierTripNew {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrierTripNew');
  }

  public publishTrip() {
    this.navCtrl.push("CarrierTripOngoing");
  }
}
