import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AnimaisPage } from '../animais/animais';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	private email: string = '';
	private senha: string = '';

	constructor(public navCtrl: NavController, public menuCtrl: MenuController, private usuarioProvider: UsuarioProvider, private toastCtrl: ToastController, private alertCtrl: AlertController) {
	}

	ionViewWillEnter() {
		this.menuCtrl.enable(false);
	}

	ionViewWillLeave() {
		this.menuCtrl.enable(true);
	}

	/**
	 * Tenta logar com conta existente
	 */
  	logar():void {
		this.usuarioProvider.login(this.email, this.senha).then((data)=> {
		this.usuarioProvider.setJWT(data);
		this.navCtrl.setRoot(AnimaisPage);
		}).catch(falha => {
		if(falha.status == 404)
			this.toastCtrl.create({message: "Falha ao logar", duration:3000}).present();
		});
	}

	/**
	 * Cria uma nova conta para o usuário
	 */
	nova(): void {

		this.alertCtrl.create({
			title: "Cadastrar novo usuário",
			inputs: [
				{name: "email", placeholder: "Email"},
				{name: "senha", placeholder: "Senha", type:"password"}
			],
			buttons: [
				{text: "Cancelar", role: "cancel"},
				{text: "Cadastrar", handler: (dados) => {
					this.usuarioProvider.cadastrar(dados.email, dados.senha).then((data)=> {
						this.usuarioProvider.setJWT(data);
						this.navCtrl.setRoot(AnimaisPage);
					}).catch(falha => {
						if(falha.status == 406) {
							let msg = '';
							for (let erros of Object.keys(falha.error)) {
								console.log(falha.error[erros]);
								for (let mensagem of falha.error[erros]) 
									msg += mensagem + '<br/>';
							}
							this.alertCtrl.create({message: msg, buttons:['OK']}).present();
						}
							
					});
				}}
			]
		}).present();
		
	}
	  

}
