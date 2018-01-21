import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CachorrosPage } from './cachorros';
import { CachorroPageModule } from '../cachorro/cachorro.module';
import { DataBrasilPipe } from '../../pipes/data-brasil/data-brasil';

@NgModule({
  declarations: [
    CachorrosPage,
    DataBrasilPipe
  ],
  imports: [
    IonicPageModule.forChild(CachorrosPage),
    CachorroPageModule
  ],
  
})
export class CachorrosPageModule {}
