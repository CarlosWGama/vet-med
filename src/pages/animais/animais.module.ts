import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimaisPage } from './animais';
import { AnimalPageModule } from '../animal/animal.module';
import { DataBrasilPipe } from '../../pipes/data-brasil/data-brasil';

@NgModule({
  declarations: [
    AnimaisPage,
    DataBrasilPipe
  ],
  imports: [
    IonicPageModule.forChild(AnimaisPage),
    AnimalPageModule
  ],
  
})
export class AnimaisPageModule {}
