import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import firebase from 'firebase';
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController, LoadingController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = { 
    email: '',
    password: ''
  }
  constructor(public loadingCtrl:LoadingController, public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider,private toastCtrl: ToastController) {
    
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin() {
    this.authservice.login(this.credentials).then((res: any) => {
      if (!res.code)
       { this.navCtrl.push('HomePage');
     this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 2000
      }).present();
       }

      else
        alert(res);
         })
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  passwordreset() {
    this.navCtrl.push('PasswordresetPage');
  }

}
