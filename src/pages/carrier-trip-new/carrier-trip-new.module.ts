import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarrierTripNew } from './carrier-trip-new';

@NgModule({
  declarations: [
    CarrierTripNew,
  ],
  imports: [
    IonicPageModule.forChild(CarrierTripNew),
  ],
  exports: [
    CarrierTripNew
  ]
})
export class CarrierTripNewModule {}
