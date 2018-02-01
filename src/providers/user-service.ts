import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../app/user';
// import {tokenNotExpired} from 'angular2-jwt';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {
  public token: string;
  // currentUser: User;
  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  public register(credentials) {
    if (credentials.username == null || credentials.password == null) {
      return Observable.throw("Please insert Credentials");
    } else {
      return Observable.create(observer => {
        // TODO: store the credentials to backend
        observer.next(true);
        observer.complete();
      });
    }
  }

  public loginAsCourier(credentials) : Observable<boolean> {
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // let options = new RequestOptions({headers: headers});
    return this.http.post('http://localhost:9090/api/login', credentials)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: credentials.username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });

    // if (credentials.username == null || credentials.password == null) {
    //   return Observable.throw("Please insert Credentials");
    // } else {
    //   return Observable.create(observer => {
    //     // TODO: make request to backend to check the credentials
    //     let access = (credentials.username == "admin" && credentials.password == "admin");
    //     // let result = tokenNotExpired('/_ionickv/token');
    //     // this.currentUser = new User("admin", "123@h.com");
    //     // this.currentUser = new User();
    //     // this.currentUser.username = "admin";
    //     // this.currentUser.email = "123@h.com";
    //     observer.next(access);
    //     observer.complete();
    //   });
    // }
  }

  public loginAsSender(credentials) {
  }

  public loginAsAdministrator(credentials) {
  }

  public loginAsDepot(credentials) {
  }

  public logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');

    // return Observable.create(observer => {
    //   this.currentUser = null;
    //   observer.next(true);
    //   observer.complete();
    // })
  }

  public getUserInfo(): Observable<User[]> {
    // return this.currentUser;
    // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('/api/users', options)
            .map((response: Response) => response.json());
  }

  public editUserInfo() {}

  public adjustSetting() {}

  public deleteUser() {}

  // For Administrator
  public acceptRegisterRequest() {}
}
