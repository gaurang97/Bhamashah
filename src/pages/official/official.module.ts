import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficialPage } from './official';

@NgModule({
  declarations: [
    OfficialPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficialPage),
  ],
  exports: [
    OfficialPage
  ]
})
export class OfficialPageModule {}
