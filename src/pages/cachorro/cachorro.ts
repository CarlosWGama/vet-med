import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ConsultaDescricaoPage } from '../consulta-descricao/consulta-descricao';
import { ConsultaCadastrarPage } from '../consulta-cadastrar/consulta-cadastrar';

@IonicPage()
@Component({
  selector: 'page-cachorro',
  templateUrl: 'cachorro.html',
})
export class CachorroPage {

  private cachorro = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {}

  ionViewWillLoad() {
    this.cachorro = this.navParams.get("cachorro");
  }

  abrirConsulta(): void {
    let modal = this.modalCtrl.create(ConsultaDescricaoPage);
    modal.present();
  }

  novaConsulta(): void {
    this.navCtrl.push(ConsultaCadastrarPage, {cachorro: this.cachorro});
  }

}
