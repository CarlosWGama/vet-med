import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cachorro',
  templateUrl: 'cachorro.html',
})
export class CachorroPage {

  private cachorro = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    this.cachorro = this.navParams.get("cachorro");
  }

}
