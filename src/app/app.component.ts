import { Component , ViewChild } from '@angular/core';
import { Platform, AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DetailsPage } from '../pages/details/details';
import { FaqPage } from '../pages/faq/faq';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { ProblemPage } from '../pages/problem/problem';
import { Nav } from 'ionic-angular';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  myrequests;
  myfriends;
  rootPage: any = 'LoginPage';
pages: Array<{title: string, icon: string, component: any}>;
  constructor( platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,  
              public alertCtrl: AlertController, public localNotifications: LocalNotifications) {
 
    platform.ready().then(() => {
     
    this.onNotification();
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      
      { title: 'Apply For Loan', icon:'copy', component: 'ProblemPage' },
      { title: 'Your Profile', icon:'person',component:'DetailsPage' },
      { title: 'FAQs', icon:'book', component:'FaqPage' },
      { title: 'Chats', icon:'contacts', component:'ChatsPage' },
    ];
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
  logout(){
    
    firebase.auth().signOut().then(() => {
      this.nav.setRoot('LoginPage');
    })
 
  }
  async onNotification(){
  try {
    
    FCMPlugin.onNotification((data)=>{
      this.alertCtrl.create({
        message: data.message
      }).present();}, (error)=>console.error(error)
    );
  } catch(e){
    console.error(e);
  }
}


}
