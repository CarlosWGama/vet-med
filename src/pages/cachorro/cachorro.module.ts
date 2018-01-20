import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CachorroPage } from './cachorro';

import { ConsultaDescricaoPageModule } from '../consulta-descricao/consulta-descricao.module';
import { ConsultaCadastrarPageModule } from '../consulta-cadastrar/consulta-cadastrar.module';

@NgModule({
  declarations: [
    CachorroPage,
  ],
  imports: [
    IonicPageModule.forChild(CachorroPage),
    ConsultaDescricaoPageModule,
    ConsultaCadastrarPageModule
  ],
})
export class CachorroPageModule {}
