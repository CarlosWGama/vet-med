import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VeterinariosPage } from './veterinarios';

@NgModule({
  declarations: [
    VeterinariosPage,
  ],
  imports: [
    IonicPageModule.forChild(VeterinariosPage),
  ],
})
export class VeterinariosPageModule {}
