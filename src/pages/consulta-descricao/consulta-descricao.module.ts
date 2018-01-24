import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultaDescricaoPage } from './consulta-descricao';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ConsultaDescricaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultaDescricaoPage),
    PipesModule
  ],
})
export class ConsultaDescricaoPageModule {}
