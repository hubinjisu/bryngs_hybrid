import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading  } from 'ionic-angular';
import { CourierService } from '../../providers/courier-service';
import { Storage } from '../../app/storage';

enum TripStatus {
    committed = 0,
    selectStation = 1,
    prepareToStart = 2,
    started = 3
}
/**
 * Generated class for the CarrierTripOngoing page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-carrier-trip-ongoing',
  templateUrl: 'carrier-trip-ongoing.html',
  providers: [CourierService]
})
export class CarrierTripOngoing implements OnInit {
  loading: Loading;
  storages : Storage[];
  tripStatus : TripStatus = TripStatus.committed;
  color:string = "null";
  constructor(public navCtrl: NavController, public navParams: NavParams, private courierService : CourierService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrierTripOngoing');
  }

  ngOnInit():void {
    this.getStorages();
  }

  getStorages(): void {
    this.showLoading().then(() => {
      this.courierService.offerTrip().subscribe(storages => {
        this.storages = storages;
        console.log('storage: ' + storages);
        // this.loading.dismiss();
      },
        error => {
          this.showError(error);
        });
    });

  }

  showLoading() : Promise<any>{
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    return this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  public confirmSelections() {
    this.tripStatus = TripStatus.prepareToStart;
    this.color = "primary";
  }

  public cancelSelections() {
    this.tripStatus = TripStatus.committed;
    this.color = "null";
  }

  public selectStations() {
    this.tripStatus = TripStatus.selectStation;
    this.color = "light";
  }

  public reselectStations() {
    this.tripStatus = TripStatus.selectStation;
    this.color = "light";
  }

  public selectPackages() {
    this.navCtrl.push("CarrierTripPackageSelect");
  }

  public startTrip() {
    this.tripStatus = TripStatus.started;
    this.color = "danger";
  }

  public finishTrip() {
    this.navCtrl.push("CarrierTripFinish");
    this.color = "secondary";
  }
}
