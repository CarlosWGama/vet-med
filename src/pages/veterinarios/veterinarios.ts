import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-veterinarios',
  templateUrl: 'veterinarios.html',
})
export class VeterinariosPage {

  private veterinarios: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.veterinarios = [
      {nome: "Paula", clinica: "Animal Amigo", telefone: "YYYY"},
      {nome: "Paulo", clinica: "animal.com", telefone: "YYYY"},
      {nome: "Simona", clinica: "X", telefone: "YYYY"},
      {nome: "Monique", clinica: "É o bicho", telefone: "YYYY"},
    ];
  }

  /** CRUD VETERINARIO **/
  novoVeterinario(): void {
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
          this.veterinarios.push(veterinario);
        }}
      ]
    }).present();
  }

  editarVeterinario(veterinario: any): void {
    let index = this.veterinarios.indexOf(veterinario);
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
          veterinario = { nome: data.nome, clinica: data.clinica, telefone: data.telefone };
          this.veterinarios[index] = veterinario;
        }}
      ]
    }).present();
  }

  excluirVeterinario(veterinario: any): void {
    let index = this.veterinarios.indexOf(veterinario);
    this.veterinarios.splice(index, 1);
  }

}
