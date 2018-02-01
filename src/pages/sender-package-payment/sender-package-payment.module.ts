import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SenderPackagePayment } from './sender-package-payment';

@NgModule({
  declarations: [
    SenderPackagePayment,
  ],
  imports: [
    IonicPageModule.forChild(SenderPackagePayment),
  ],
  exports: [
    SenderPackagePayment
  ]
})
export class SenderPackagePaymentModule {}
