import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SenderPackageNumber } from './sender-package-number';

@NgModule({
  declarations: [
    SenderPackageNumber,
  ],
  imports: [
    IonicPageModule.forChild(SenderPackageNumber),
  ],
  exports: [
    SenderPackageNumber
  ]
})
export class SenderPackageNumberModule {}
