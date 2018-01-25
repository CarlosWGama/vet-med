import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Consulta } from '../../models/Consulta';

@IonicPage()
@Component({
  selector: 'page-consulta-descricao',
  templateUrl: 'consulta-descricao.html',
})
export class ConsultaDescricaoPage {

  private consulta: Consulta;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.consulta = this.navParams.get("consulta");
    console.log(this.consulta);
  }

}
