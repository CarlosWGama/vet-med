import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ConsultaDescricaoPage } from '../consulta-descricao/consulta-descricao';
import { ConsultaCadastrarPage } from '../consulta-cadastrar/consulta-cadastrar';

@IonicPage()
@Component({
  selector: 'page-animal',
  templateUrl: 'animal.html',
})
export class AnimalPage {

  private animal = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {}

  ionViewWillLoad() {
    this.animal = this.navParams.get("animal");
  }

  abrirConsulta(): void {
    let modal = this.modalCtrl.create(ConsultaDescricaoPage);
    modal.present();
  }

  novaConsulta(): void {
    this.navCtrl.push(ConsultaCadastrarPage, {animal: this.animal});
  }

}
