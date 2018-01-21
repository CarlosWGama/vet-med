import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Remedio } from '../../models/Remedio';
import { VeterinarioProvider } from '../../providers/veterinario/veterinario';

@IonicPage()
@Component({
  selector: 'page-consulta-cadastrar',
  templateUrl: 'consulta-cadastrar.html'
})
export class ConsultaCadastrarPage {

  private animal: any = null;

  private remedios: Remedio[] = [];
  private veterinarios: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private vetProvider: VeterinarioProvider) {
  }

  ionViewWillLoad() {
    this.animal = this.navParams.get("animal");
    this.vetProvider.buscar().then(veterinarios => this.veterinarios = veterinarios);
  }


  /** Cadastra novo Remédio na consulta atual */
  novoRemedio(): void {
    this.alertCtrl.create({
      title: "Adicionar Remédio",
      inputs: [
        { name: "remedio", placeholder: "Remédio", type: "text" },
        { name: "dosagem", placeholder: "Dosagem (quantidade)", type:"text"},
        { name: "duracao", placeholder: "Duração (dias)", type: "number"},
        { name: "frequencia", placeholder: "Frequência (horas)", type: "number"},
        { name: "inicio", placeholder: "Início", type: "date"}
      ],
      buttons: [
        {text: "Cancelar", role: "cancel"},
        {text: "Salvar", handler: (data) => {
          let remedio = new Remedio(data.remedio, data.dosagem, data.frequencia, data.duracao, data.inicio);
          this.remedios.push(remedio);

        }}
      ]
    }).present();
  } 

  /** Remover Remédio da Lista **/
  excluir(remedio: Remedio): void {
    let index = this.remedios.indexOf(remedio);
    this.remedios.splice(index, 1);
  }

  salvar(): void {
    this.navCtrl.pop();
  }

}
