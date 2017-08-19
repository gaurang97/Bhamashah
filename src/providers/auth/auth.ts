import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { usercreds } from '../../models/interfaces/usercreds';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {
  
  constructor(public afireauth: AngularFireAuth,private toastCtrl: ToastController) {

  }

/*
    For logging in a particular user. Called from the login.ts file.
  
*/  
  
  login(credentials: usercreds) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(() => {
        resolve(true);
      }).catch((err) => {
        
  let toast = this.toastCtrl.create({
    message: 'Password is incorrect',
    position: 'bottom',
    showCloseButton: true
  });toast.present();
  })
    })
     return promise;
    }
}
