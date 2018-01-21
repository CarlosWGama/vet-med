import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { CachorroPage } from '../cachorro/cachorro';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { CachorroProvider } from '../../providers/cachorro/cachorro';
import { DataBrasilPipe } from '../../pipes/data-brasil/data-brasil';

@IonicPage()
@Component({
  selector: 'page-cachorros',
  templateUrl: 'cachorros.html',
})
export class CachorrosPage {

	private cachorros: any[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController, private cachorroProvider: CachorroProvider) {
   
	}

	ionViewDidLoad() {
		this.cachorroProvider.buscar().then((cachorros) => {
			this.cachorros = cachorros;
		});
	}

	/** Abre tela com dados do animal */
	abrir(cachorroAbrir: any): void {
		this.navCtrl.push(CachorroPage, {cachorro: cachorroAbrir});
	}

	/** 
	 * Cadastro de um novo Animal 
	 */
	novo() {
		let alert = this.alertCtrl.create({
			title: 'Novo Animal',
			message: 'Cadastre um novo animal',
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
				}, 
				{
					text: 'Cadastrar',
					handler: (data) => {
						let campos  = {"nome": data.nome, "raca": data.raca, "nascimento": data.nascimento};
						
						if (!this.validar(campos)) {
							this.cachorroProvider.cadastrar(campos).then((cachorros) => {
								this.cachorros = cachorros;
								this.toastCtrl.create({
									message: 'Cadastrado',
									duration: 3000,
									position: 'bottom'
								}).present();
							}).catch((error) => {
								
							});
						}
						
					}
				}
			]
		});
		alert.present();
	}

	/** 
	 * Editar de um novo Animal 
	 */
	editar(animal: {nome: string, nascimento: string, id: number, raca: string}) {
		let alert = this.alertCtrl.create({
			title: 'Atualizar Animal',
			message: 'Atualizando ' + animal.nome,
			inputs: [
				{
					name: "nome",
					value: animal.nome,
					placeholder: "Nome"
				},
				{
					name: "raca",
					value: animal.raca,
					placeholder: "Raça"
				},
				{
					name: "nascimento",
					value: animal.nascimento,
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
					text: 'Atualizar',
					handler: (data) => {
						let campos  = {id: animal.id, nome: data.nome, raca: data.raca, nascimento: data.nascimento};
						
						if (!this.validar(campos)) {
							this.cachorroProvider.atualizar(campos).then((animais) => {
								this.cachorros = animais;
								this.toastCtrl.create({
									message: 'Atualizado',
									duration: 3000,
									position: 'bottom'
								}).present();
							});
						}
					}
				}
			]
		});
		alert.present();
	}


	/**
	 *  Exclui um  cachorro 
	 */
	excluir(id: number): void {
		this.cachorroProvider.deletar(id).then((cachorros) => {
			this.cachorros = cachorros;
		});
	}


	/**
	 * Valida os campos do animal
	 * @param animal 
	 * @return boolean
	 */
	private validar(animal: {nome:string, raca:string, nascimento:string}): boolean {
		let error = this.alertCtrl.create({
			title: "Falha ao cadastrar",
			buttons: ["Ok"]
		});

		if (animal.nome == "")
			error.setMessage("Preencha o nome").present();
		else if (animal.raca == "")
			error.setMessage("Preencha a raça").present();
		else if (animal.nascimento == "")
			error.setMessage("Preencha a data de nascimento").present();
		else
			return false; //Não deu erro
		return true; //Deu erro
	}

  

}
