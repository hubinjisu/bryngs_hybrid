import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarrierHome } from './carrier-home';

@NgModule({
  declarations: [
    CarrierHome,
  ],
  imports: [
    IonicPageModule.forChild(CarrierHome),
  ],
  exports: [
    CarrierHome
  ]
})
export class CarrierHomeModule {}
