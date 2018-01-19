import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { CachorroPage } from '../cachorro/cachorro';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@IonicPage()
@Component({
  selector: 'page-cachorros',
  templateUrl: 'cachorros.html',
})
export class CachorrosPage {

	private cachorros: any[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController) {
   
	}

	ionViewDidLoad() {
		this.cachorros.push({nome:"Raica", raca: "Poodle", idade:"15", nascimento:"17/01/2003"});
		this.cachorros.push({nome:"Raica", raca: "Poodle", idade:"15", nascimento:"17/01/2003"});
		this.cachorros.push({nome:"Raica", raca: "Poodle", idade:"15", nascimento:"17/01/2003"});
	}

	/** Abre tela com dados do cachorro */
	abrirCachorro(cachorroAbrir: any): void {
		this.navCtrl.push(CachorroPage, {cachorro: cachorroAbrir});
	}

	/** Cadastro de um novo Cachorro */
	novoCachorro() {
		let alert = this.alertCtrl.create({
			title: 'Novo Cachorro',
			message: 'Cadastre um novo Cachorro',
			inputs: [
				{
					name: "nome",
					placeholder: "Nome"
				},
				{
					name: "raca",
					placeholder: "Raça"
				},
				{
					name: "nascimento",
					type: "date"
				}
			],
			buttons: [
				{
				text: 'Cancelar', role: 'cancel',
				handler: () => {
					console.log('Cancel clicked');
				}
				}, {
					text: 'Cadastrar',
					handler: (data) => {
						console.log(data.nome);

						this.toastCtrl.create({
							message: 'Cadastrado',
							duration: 3000,
							position: 'bottom'
						}).present();
					}
				}
			]
		});
		alert.present();
	}

  

}
