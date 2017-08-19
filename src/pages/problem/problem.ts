import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController,ToastController, LoadingController} from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the ProblemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-problem',
  templateUrl: 'problem.html',
})
export class ProblemPage {
scannedCode = null;

currentImage1: string=null;
currentImage2: string=null;
currentImage3: string=null;
currentImage4: string=null;
currentImage5: string=null;
currentImage6: string=null;
currentImage7: string=null;
currentImage8: string=null;
currentImage9: string=null;


    mail: ''
    
  
  constructor(private toaster: ToastController, private barcodeScanner: BarcodeScanner,public navCtrl: NavController, private camera: Camera, public navParams: NavParams, public platform:Platform, private alertCtrl: AlertController, private emailComposer: EmailComposer, public loadingCtrl: LoadingController) {
         this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 1000
      }).present();
  }
     
  
  
 
 accessGallery() {
    const options: CameraOptions = {
 
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,

    }
    
 
    this.camera.getPicture(options).then((imageData) => {
      this.currentImage1 = imageData;
      this.alertCtrl.create({
        title: 'Bhamashah ID attached successfully'
      }).present();
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });
  }
   accessGallery1() {
      const options: CameraOptions = {
 
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,

    }
    
 
    this.camera.getPicture(options).then((imageData) => {
      this.currentImage2 = imageData;
      this.alertCtrl.create({
        title: 'Adhar ID attached successfully'
      }).present();
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });
  }
   accessGallery2() {
     const options: CameraOptions = {
 
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,

    }
    
 
    this.camera.getPicture(options).then((imageData) => {
      this.currentImage3 = imageData;
      this.alertCtrl.create({
        title: 'Birth Certificate Attached Successfully'
      }).present();
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });
  }
   accessGallery3() {
     const options: CameraOptions = {
 
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,

    }
    
 
    this.camera.getPicture(options).then((imageData) => {
      this.currentImage4 = imageData;
      this.alertCtrl.create({
        title: 'Educational Certificate attached successfully'
      }).present();
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });
  }
   accessGallery4() {
     const options: CameraOptions = {
 
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,

    }
    
 
    this.camera.getPicture(options).then((imageData) => {
      this.currentImage5 = imageData;
      this.alertCtrl.create({
        title: 'Bonafide Certificate attached successfully'
      }).present();
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });
  }
   accessGallery5() {
     const options: CameraOptions = {
 
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
     }
    
 
    this.camera.getPicture(options).then((imageData) => {
      this.currentImage6 = imageData;
      this.alertCtrl.create({
        title: 'Rojgar Panjiyan attached successfully'
      }).present();
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });
  }
   accessGallery6() {
     const options: CameraOptions = {
 
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,

    }
    
 
    this.camera.getPicture(options).then((imageData) => {
      this.currentImage7 = imageData;
      this.alertCtrl.create({
        title: 'Paper 1 attached successfully'
      }).present();
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });
  }
   accessGallery7() {
     const options: CameraOptions = {
 
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,

    }
    
 
    this.camera.getPicture(options).then((imageData) => {
      this.currentImage8 = imageData;
      this.alertCtrl.create({
        title: 'Paper 2 attached successfully'
      }).present();
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });
  }
    accessGallery8() {
     const options: CameraOptions = {
 
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,

    }
    
 
    this.camera.getPicture(options).then((imageData) => {
      this.currentImage9 = imageData;
      this.alertCtrl.create({
        title: 'Paper 3 attached successfully'
      }).present();
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });
  }

  sendPicture(mail){

 if (this.currentImage7 == '' || this.currentImage8 == '' || this.currentImage9 == '' ){
   this.toaster.create({
      message: 'Attach all the mentioned documents carefully. ',
    duration: 1500,
    position: 'top'
   }).present();
  

  
 }
  else {
    this.emailComposer.addAlias('gmail', 'com.google.android.gm');
this.emailComposer.open({
  app: 'gmail',

  to: 'gaurangdadheech.it19@jecrc.ac.in',
  
  
  attachments: [

  this.currentImage1,
  this.currentImage2,
  this.currentImage3,
  this.currentImage4,
  this.currentImage5,
  this.currentImage6,
  this.currentImage7,
  this.currentImage8,
  this.currentImage9,
 
  
  

    ],
  subject: 'my app',
  body: [" Your Case :  " +   this.mail],
       
        
 isHtml: false
})
  }

}



  openDoc(){
    window.open('https://drive.google.com/open?id=0B5NlpyHsycSTTTRZWXhkTThqSFE', '_blank', 'location=yes');
  }

  nextPage(){
    this.navCtrl.push('ChatsPage');
  }
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }
  profilePage(){
    this.navCtrl.push('ProfilePage')
  }
  info(){
    this.alertCtrl.create({
      title: 'How to Apply',
      subTitle: ' Attach all the mentioned documents one by one (All documents are Mandatory) and Add your basic plan credentials in the case column. ',
      buttons: ['OK']
      
    }).present();
  }
}