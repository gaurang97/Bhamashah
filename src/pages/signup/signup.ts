import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
    
  newuser = {
    email: '',
    password: '',
    displayName: '',
    scannedCode1: null,
     scannedCode2: null
    
  }
  constructor(private barcodeScanner: BarcodeScanner,public navCtrl: NavController, public navParams: NavParams, public userservice: UserProvider,
              public loadingCtrl: LoadingController, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  signup() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    if (this.newuser.email == '' || this.newuser.password == '' || this.newuser.displayName == ''|| this.newuser.scannedCode1==''|| this.newuser.scannedCode2=='' ) {
      toaster.setMessage('All fields are required dude');
      toaster.present();
    }
    else if (this.newuser.password.length < 7) {
      toaster.setMessage('Password is not strong. Try giving more than six characters');
      toaster.present();
    }
     else if (this.newuser.scannedCode1.length < 200) {
      toaster.setMessage('Adhar info not matched');
      toaster.present();
     }
    else if (this.newuser.scannedCode2.length >20) {
      toaster.setMessage('Bhamashah info not matched');
      toaster.present();
     }
     
    else {
      let loader = this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 4000
      });
      loader.present();
      this.userservice.adduser(this.newuser).then((res: any) => {
        loader.dismiss();
        if (res.success)
          this.navCtrl.push('ProfilepicPage');
        else
          alert('Error' + res);
      })
    }
  }  

  goback() {
    this.navCtrl.setRoot('LoginPage');
  }
  scanCode1() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.newuser.scannedCode1 = barcodeData.text;
      if(this.newuser.scannedCode1==null)
     { this.alertCtrl.create({
        title: 'Adhar Not Attached'
      }).present();
      }
    }, (err) => {
        console.log('Error: ', err);
    });
  }
   scanCode2() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.newuser.scannedCode2 = barcodeData.text;
      if(this.newuser.scannedCode2==null)
     { this.alertCtrl.create({
        title: 'Bhamashah not Attached '
      }).present();
      }
    }, (err) => {
        console.log('Error: ', err);
    });
  }
}
