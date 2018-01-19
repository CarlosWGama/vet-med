import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CachorrosPage } from './cachorros';
import { CachorroPageModule } from '../cachorro/cachorro.module';

@NgModule({
  declarations: [
    CachorrosPage,
  ],
  imports: [
    IonicPageModule.forChild(CachorrosPage),
    CachorroPageModule
  ],
})
export class CachorrosPageModule {}
