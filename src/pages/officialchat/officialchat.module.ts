import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficialchatPage } from './officialchat';

@NgModule({
  declarations: [
    OfficialchatPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficialchatPage),
  ],
  exports: [
    OfficialchatPage
  ]
})
export class OfficialchatPageModule {}
