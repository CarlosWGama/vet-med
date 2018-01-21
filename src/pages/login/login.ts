import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CachorrosPage } from '../cachorros/cachorros';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private email: string = '';
  private senha: string = '';

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private usuarioProvider: UsuarioProvider, private toastCtrl: ToastController) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }

  logar():void {
    this.usuarioProvider.login(this.email, this.senha).then((data)=> {
      this.usuarioProvider.setJWT(data);
      this.navCtrl.setRoot(CachorrosPage);
    }).catch(falha => {
      if(falha.status == 404)
        this.toastCtrl.create({message: "Falha ao logar", duration:3000}).present();
    });

    //this.navCtrl.setRoot(CachorrosPage);
  }
}
