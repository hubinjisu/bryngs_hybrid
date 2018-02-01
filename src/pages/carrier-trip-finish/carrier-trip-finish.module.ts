import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarrierTripFinish } from './carrier-trip-finish';

@NgModule({
  declarations: [
    CarrierTripFinish,
  ],
  imports: [
    IonicPageModule.forChild(CarrierTripFinish),
  ],
  exports: [
    CarrierTripFinish
  ]
})
export class CarrierTripFinishModule {}
