import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CachorroPage } from './cachorro';

@NgModule({
  declarations: [
    CachorroPage,
  ],
  imports: [
    IonicPageModule.forChild(CachorroPage),
  ],
})
export class CachorroPageModule {}
