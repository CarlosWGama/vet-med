import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultaCadastrarPage } from './consulta-cadastrar';
import { DataBrasilPipe } from '../../pipes/data-brasil/data-brasil';

@NgModule({
  declarations: [
    ConsultaCadastrarPage,
    DataBrasilPipe
  ],
  imports: [
    IonicPageModule.forChild(ConsultaCadastrarPage),
  ],
})
export class ConsultaCadastrarPageModule {}
