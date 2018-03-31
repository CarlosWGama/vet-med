import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ConsultaDescricaoPage } from '../consulta-descricao/consulta-descricao';
import { ConsultaCadastrarPage } from '../consulta-cadastrar/consulta-cadastrar';
import { Consulta } from '../../models/Consulta';
import { ConsultaProvider } from '../../providers/consulta/consulta';

@IonicPage()
@Component({
  selector: 'page-animal',
  templateUrl: 'animal.html',
})
export class AnimalPage {

  private animal = null;
  private consultas: Consulta[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private consultaProvider: ConsultaProvider) {}

  ionViewWillLoad() {
    this.animal = this.navParams.get("animal");
  }

  ionViewWillEnter() {
    this.consultaProvider.buscar(this.animal.id).then(consultas => this.consultas = consultas);
  }

  abrir(consulta: Consulta): void {
    let modal = this.modalCtrl.create(ConsultaDescricaoPage, {consulta: consulta});
    modal.present();
  }

  excluir(consulta: Consulta) {
    this.consultaProvider.deletar(consulta.id).then(consultas => this.consultas = consultas); 
  }

  atualizar(consulta: Consulta) {
    this.navCtrl.push(ConsultaCadastrarPage, {consulta: consulta});
  }

  nova(): void {
    this.navCtrl.push(ConsultaCadastrarPage, {animal: this.animal});
  }

}
