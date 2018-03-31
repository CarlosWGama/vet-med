import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { AnimalPage } from '../animal/animal';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { AnimalProvider } from '../../providers/animal/animal';

@IonicPage()
@Component({
  selector: 'page-animais',
  templateUrl: 'animais.html',
})
export class AnimaisPage {

	private animais: any[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController, private animalProvider: AnimalProvider) {
   
	}

	ionViewDidLoad() {
		this.animalProvider.buscar().then((animais) => {
			this.animais = animais;
		});
	}

	/** Abre tela com dados do animal */
	abrir(animalAbrir: any): void {
		this.navCtrl.push(AnimalPage, {animal: animalAbrir});
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
							this.animalProvider.cadastrar(campos).then((animais) => {
								this.animais = animais;
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
							this.animalProvider.atualizar(campos).then((animais) => {
								this.animais = animais;
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
	 *  Exclui um  animal 
	 */
	excluir(id: number): void {
		this.animalProvider.deletar(id).then((animais) => {
			this.animais = animais;
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
