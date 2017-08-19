import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,Platform } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  shownGroup = null;
  slideData = [{ image: "assets/img1.jpg" },{ image:  "assets/img2.jpg"},{ image:  "assets/img3.jpg" },{ image:  "assets/img4.jpg"},{ image:  "assets/img5.jpg"}]
   info = [
    { title: "भामाशाह रोजगार सृजन योजना", description: "स्वयं का उद्यम स्थापित करने के इच्छुक पंजीकृत बेरोज़गारों, महिलाओं, अनुसूचित जाति/जनजाति के युवाओं, दिव्यांगों एवं शिक्षित बेरोज़गार महिलाओं को बैंकों के माध्यम से ऋण उपलब्ध करवाकर स्वावलम्बी बनाना।" },
    {title:"सृजन योजना पात्रता ",description:"18 से 50 आयु वर्ग के सभी महिला व पुरुष जिनके परिवार की वार्षिक आय 6 लाख से अधिक न हो व राजस्थान का मूल निवासी हो।"},
    {title:" सृजन योजना सुविधाएं",description:"इस योजनान्तर्गत प्रत्येक अभ्यार्थियों को उनकी परियोजना के आधार पर सेवा व व्यापार कार्य के लिए अधिकतम 05 लाख रु तथा उद्योग हेतु अधिकतम 10 लाख रु तक का ऋण दिया जाता है एवं सभी क्षेत्रों में 4 प्रतिशत तक ब्याज अनुदान दिया जाता है।"},
    {title:"आवेदन के साथ औपचारिकताएं",description:"आवेदन करने के साथ आवेदक को प्रोजेक्ट रिपोर्ट की प्रति, आयु-प्रमाणपत्र, शैक्षणिक योग्यता प्रमाण पत्र एवं निवास प्रमाण पत्र, भामाशाह कार्ड एवं रोज़गार पंजीयन नम्बर की आवश्यकता होती है।"},
  
   ]
   constructor(private platform:Platform, public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
     this.onNotification();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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
}
openDoc(){
  this.alert.create({
     
   subTitle: ' Please download this form and attach the required documents. ',
   buttons: [
      {
        text: 'OK',
        role: 'ok',
        handler: () => {
          window.open('https://drive.google.com/open?id=0B5NlpyHsycSTTTRZWXhkTThqSFE', '_blank', 'location=yes')
        }
   
      }]
      }).present();
  }
async onNotification(){
  try {
    await this.platform.ready();
    FCMPlugin.onNotification((data)=>{
      this.alert.create({
        message: data.message
      }).present();}, (error)=>console.error(error)
    );
  } catch(e){
    console.error(e);
  }
}
}
