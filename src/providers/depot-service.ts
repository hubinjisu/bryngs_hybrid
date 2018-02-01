import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DepotService {
  constructor(public http: Http) {
    console.log('Hello depot service');
  }

  public acceptStorage() {}

  public releaseStorage() {}

}
