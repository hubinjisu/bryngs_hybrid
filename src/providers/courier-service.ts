import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../app/user';
import { Storage } from '../app/storage';

@Injectable()
export class CourierService {
  data: any;
  constructor(public http: Http) {
    console.log('Hello trip service Provider');
    this.data = null;
  }

  public getOfferedTrips() {}

  public getOngoingTrips() {}

  public getFinishedTrips() {
    // TODO: get the finished trip from backend
    return this.http.get('http://localhost:8080/api/trips')
      .map(res => res.json());
  }

  public offerTrip() {
    // TODO: publish the trip info, trigger the match criterias in backend
    return this.http.get('http://localhost:8080/api/depots')
      .map(res => res.json());
  }

  public selectPackages() {}

  public startTrip() {}

  public navigateTrip() {}

  public pickupPackage() {}

  public dropoffPackage() {}

  public rateSender() {}
}
