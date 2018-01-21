import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalPage } from './animal';

import { ConsultaDescricaoPageModule } from '../consulta-descricao/consulta-descricao.module';
import { ConsultaCadastrarPageModule } from '../consulta-cadastrar/consulta-cadastrar.module';

@NgModule({
  declarations: [
    AnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalPage),
    ConsultaDescricaoPageModule,
    ConsultaCadastrarPageModule
  ],
})
export class AnimalPageModule {}
