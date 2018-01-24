import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimaisPage } from './animais';
import { AnimalPageModule } from '../animal/animal.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    AnimaisPage
  ],
  imports: [
    IonicPageModule.forChild(AnimaisPage),
    AnimalPageModule,
    PipesModule
  ],
  
})
export class AnimaisPageModule {}
