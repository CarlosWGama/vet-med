import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultaCadastrarPage } from './consulta-cadastrar';

@NgModule({
  declarations: [
    ConsultaCadastrarPage
  ],
  imports: [
    IonicPageModule.forChild(ConsultaCadastrarPage),
  ],
})
export class ConsultaCadastrarPageModule {}
