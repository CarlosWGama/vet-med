import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Remedio } from '../../models/Remedio';
import { VeterinarioProvider } from '../../providers/veterinario/veterinario';
import { Consulta } from '../../models/Consulta';
import { ConsultaProvider } from '../../providers/consulta/consulta';

@IonicPage()
@Component({
  selector: 'page-consulta-cadastrar',
  templateUrl: 'consulta-cadastrar.html'
})
export class ConsultaCadastrarPage {

  private veterinarios: any[] = [];
  private consulta: Consulta;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private vetProvider: VeterinarioProvider, private consultaProvider: ConsultaProvider) {
  }

  ionViewWillLoad() {
    if (this.navParams.get("consulta") != null) {
      this.consulta = this.navParams.get("consulta");
    }
    else {
      this.consulta = new Consulta(this.navParams.get("animal"));
      console.log(this.consulta);
    }

    this.vetProvider.buscar().then(veterinarios => this.veterinarios = veterinarios);
  }

  ionViewDidEnter() {
    this.consulta.veterinario = this.consulta.veterinario; 
  }

  /** 
   * Cadastra novo Remédio na consulta atual 
   */
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
          this.consulta.remedios.push(remedio);

        }}
      ]
    }).present();
  } 

  /** 
   * Atualiza um reméedio da lista
   * @param remedio Remedio
   */
  editar(r: Remedio, index: number): void {
    this.alertCtrl.create({
      title: "Adicionar Remédio",
      inputs: [
        { name: "remedio", placeholder: "Remédio", type: "text", value: r.remedio },
        { name: "dosagem", placeholder: "Dosagem (quantidade)", type:"text", value: r.dosagem},
        { name: "duracao", placeholder: "Duração (dias)", type: "number", value: r.duracao.toString()},
        { name: "frequencia", placeholder: "Frequência (horas)", type: "number", value: r.frequencia.toString()},
        { name: "inicio", placeholder: "Início", type: "date", value: r.inicio.toString()}
      ],
      buttons: [
        {text: "Cancelar", role: "cancel"},
        {text: "Salvar", handler: (data) => {
          let remedio = new Remedio(data.remedio, data.dosagem, data.frequencia, data.duracao, data.inicio);
          this.consulta.remedios[index] = remedio;
          console.log(this.consulta.remedios);
        }}
      ]
    }).present();
  }

  /** 
   * Remover Remédio da Lista 
   * @param remedio 
   */
  excluir(remedio: Remedio): void {
    let index = this.consulta.remedios.indexOf(remedio);
    this.consulta.remedios.splice(index, 1);
  }

  /** 
   * Cria uma nova consulta 
   */
  salvar(): void {
    if (!this.validar()) {
      if (this.consulta.id == null)
        this.consultaProvider.cadastrar(this.consulta);
      else
        this.consultaProvider.atualizar(this.consulta);
      this.navCtrl.pop();
    }
  }
  /**
	 * Valida os campos do animal
	 * @return boolean
	 */
	private validar(): boolean {
		let error = this.alertCtrl.create({
			title: "Falha ao cadastrar",
			buttons: ["Ok"]
		});

		if (!this.consulta.veterinario)
			error.setMessage("Selecione um veterinário").present();
		else if (!this.consulta.causa || this.consulta.causa.trim() == "")
			error.setMessage("Informe a causa da consulta").present();
		else if (!this.consulta.data_consulta  || this.consulta.data_consulta.trim() == "")
			error.setMessage("Informe a data da consulta").present();
		else
			return false; //Não deu erro
		return true; //Deu erro
	}

}
