import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, NavParams, Loading } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {JwtHelper} from "angular2-jwt";
// import {Storage} from "@ionic/storage";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService]
})
export class LoginPage {

// @Input()
// public test1: boolean;

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  jwtHelper = new JwtHelper();
  user: string;
  loginForm: FormGroup;
  loading: Loading;
  usernameCtrl: any;
  passwordCtrl: any;
  emailPattern: string = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
		+ "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  nameMinLength: number = 5;
  nameMaxLength: number = 20;
  passwordMinLength: number = 5;

  constructor(private nav: NavController, private formBuilder: FormBuilder,
    private auth: UserService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
      this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.minLength(this.nameMinLength), Validators.maxLength(this.nameMaxLength), Validators.required, Validators.pattern(this.emailPattern)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(this.passwordMinLength)])]
    })
    this.usernameCtrl = this.loginForm.controls['username'];
    this.passwordCtrl = this.loginForm.controls['password'];

    // storage.ready().then(() => {
    //   storage.get('profile').then(profile => {
    //     this.user = JSON.parse(profile);
    //   }).catch(console.log);
    // });
  }

  public createAccount() {
    this.nav.push('Register');
  }

  public login(userAccount) {
    this.showLoading()
    this.auth.loginAsCourier(userAccount).subscribe(allowed => {
      // this.authSuccess(data.name);
      if (allowed) {
        this.nav.setRoot('CarrierHome');
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
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

  authSuccess(token) {
    //  this.storage.set('token', token);
    //  this.user = this.jwtHelper.decodeToken(token).username;
    //  this.storage.set('profile', this.user);
   }
}
