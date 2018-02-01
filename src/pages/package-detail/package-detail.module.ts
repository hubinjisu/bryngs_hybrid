import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackageDetail } from './package-detail';

@NgModule({
  declarations: [
    PackageDetail,
  ],
  imports: [
    IonicPageModule.forChild(PackageDetail),
  ],
  exports: [
    PackageDetail
  ]
})
export class PackageDetailModule {}
