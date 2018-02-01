import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../app/user';

@Injectable()
export class SenderService {
  constructor(public http: Http) {
    console.log('Hello sender service');
  }

  public getShipmentRecords() {}

  public offerPackage() {}

  public getPotentialCouriers() {}

  public selectCourier() {}

  public getShipmentStatus() {}

  public dropoffPackage() {}

  public rateCourier() {}

}
