import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CachorrosPage } from '../cachorros/cachorros';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }

  logar():void {
    this.navCtrl.setRoot(CachorrosPage);
  }
}
