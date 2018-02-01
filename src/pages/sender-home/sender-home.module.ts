import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SenderHome } from './sender-home';

@NgModule({
  declarations: [
    SenderHome,
  ],
  imports: [
    IonicPageModule.forChild(SenderHome),
  ],
  exports: [
    SenderHome
  ]
})
export class SenderHomeModule {}
