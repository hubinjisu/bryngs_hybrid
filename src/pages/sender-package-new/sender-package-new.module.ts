import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SenderPackageNew } from './sender-package-new';

@NgModule({
  declarations: [
    SenderPackageNew,
  ],
  imports: [
    IonicPageModule.forChild(SenderPackageNew),
  ],
  exports: [
    SenderPackageNew
  ]
})
export class SenderPackageNewModule {}
