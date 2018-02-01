import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarrierTripOngoing } from './carrier-trip-ongoing';

@NgModule({
  declarations: [
    CarrierTripOngoing,
  ],
  imports: [
    IonicPageModule.forChild(CarrierTripOngoing),
  ],
  exports: [
    CarrierTripOngoing
  ]
})
export class CarrierTripOngoingModule {}
