import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { VeterinarioProvider } from '../../providers/veterinario/veterinario';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@IonicPage()
@Component({
  selector: 'page-veterinarios',
  templateUrl: 'veterinarios.html',
})
export class VeterinariosPage {

  private veterinarios: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private vetProvider: VeterinarioProvider, private toastCtrl: ToastController) {
  }

  ionViewWillEnter() {
    this.vetProvider.buscar().then((veterinarios) => {
      this.veterinarios = veterinarios;
    });
  }

  /** CRUD VETERINARIO **/
  /** Cadastrar um novo veterinário */
  novo(): void {
    this.alertCtrl.create({
      title: "Novo Veterinário",
      inputs: [
        { name: "nome", placeholder: "Nome veterinário" },
        { name: "clinica", placeholder: "Clínica" },
        { name: "telefone", placeholder: "Telefone" }
      ], 
      buttons: [
        { text: "Cancelar", role: "cancel" },
        { text: "Cadastrar", handler: (data) => {
				let veterinario = { nome: data.nome, clinica: data.clinica, telefone: data.telefone };
				
				//Valida
				if (!this.validar(veterinario)) {
				
					//Cadastrar
					this.vetProvider.cadastrar(veterinario).then((veterinarios) => {
						this.veterinarios = veterinarios;
					
						this.toastCtrl.create({
							message: "Cadastrado com sucesso",
							duration: 3000
						}).present();
					});
					
				}
			}
		}
      ]
    }).present();
  }

  editar(veterinario: any): void {
    this.alertCtrl.create({
      title: "Novo Veterinário",
      inputs: [
        { name: "nome", value: veterinario.nome, placeholder: "Nome veterinário" },
        { name: "clinica", value: veterinario.clinica, placeholder: "Clínica" },
        { name: "telefone", value: veterinario.telefone, placeholder: "Telefone" }
      ], 
      buttons: [
        { text: "Cancelar", role: "cancel" },
        { text: "Cadastrar", handler: (data) => {
          		veterinario = {id: veterinario.id, nome: data.nome, clinica: data.clinica, telefone: data.telefone };
				//Valida
				if (!this.validar(veterinario)) {
				
					//Atualiza
					this.vetProvider.editar(veterinario).then((veterinarios) => {
						this.veterinarios = veterinarios;
					
						this.toastCtrl.create({
							message: "Atualizado com sucesso",
							duration: 3000
						}).present();
					});
				}
			}
		}
      ]
    }).present();
  }

  excluir(id: number): void {
    //Exclui
	this.vetProvider.deletar(id).then((veterinarios) => {
		this.veterinarios = veterinarios;
	
		this.toastCtrl.create({
			message: "Excluido com sucesso",
			duration: 3000
		}).present();
	});
  }



	/**
	 * Valida os campos do veterinário
	 * @param vet 
	 * @return boolean
	 */
	private validar(vet: {nome:string, clinica:string, telefone:string}): boolean {
		let error = this.alertCtrl.create({
			title: "Falha ao cadastrar",
			buttons: ["Ok"]
		});

		if (vet.nome == "")
			error.setMessage("Preencha o nome").present();
		else if (vet.clinica == "")
			error.setMessage("Preencha a clinica a qual o veterinário pertence").present();
		else
			return false; //Não deu erro
		return true; //Deu erro
	}

}
