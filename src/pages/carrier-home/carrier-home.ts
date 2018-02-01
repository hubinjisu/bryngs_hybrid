import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourierService } from '../../providers/courier-service';
import { Trip } from '../../app/trip';
/**
 * Generated class for the CarrierHome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-carrier-home',
  templateUrl: 'carrier-home.html',
  providers: [CourierService]
})
export class CarrierHome implements OnInit{
  trips : Trip[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private courierService : CourierService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrierHome');
  }

  ngOnInit():void {
    this.getTrips();
  }

  getTrips():void {
    this.courierService.getFinishedTrips().subscribe(trips => {
      this.trips = trips;
      console.log('trips: ' + trips);
    },
      error => {
      });

  }

  createNewTrip() {
    this.navCtrl.push("CarrierTripNew");
  }
}
