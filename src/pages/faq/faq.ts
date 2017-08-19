import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the FaqPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
shownGroup = null;
images = ['../assets/doc1.jpg ', '../assets/doc2.jpg ', '../assets/doc3.jpg ', '../assets/doc4.jpg' ,'../assets/doc5.jpg', '../assets/doc6.jpg ', '../assets/doc7.jpg ', '../assets/doc8.jpg ', '../assets/doc9.jpg ', '../assets/doc10.jpg ', '../assets/doc11.jpg ', '../assets/doc12.jpg ', '../assets/doc13.jpg '];
info1 = [
    { title: " How to handle app ?", description: "After the installation of app , firstly user has to register oneself in the app. Then one has to fill all the details regarding the options relevant to bhamashah and adhar card. one has to scan the QR code of adhar and bhamashah card. Then follow the instructions." },
    {title:"Attachments required ?",description:" After the case submission of one's idea ‌one has to attach the image of documents.1.Bhamshah card 2.Adhar card 3.Birth certificate 4.Caste certificate 5.Degree of qualification 6.Income certificate 7.Bhamashah form .One can download the form of srijan yojna through the link given in the app and print the form and fill it . Then after the form filling take the image and attach to the app. Then after the form filling take the image and attach to the app."},
    {title:"Result of case submission ?",description:" Notification regarding the application status will be sent after the evaluation process    "},
    {title:" Selection process ?",description:"Selection process will be done on the proper statistics that would be calculated by the govt. and process will be pious and transparent. Most deserving candidates will be selected."},
  {title:"Chat availability ?",description:"One can chat to the official only if he would got a request from the official only after the case selection."},

   ]
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
            this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 1000
      }).present();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};


}
