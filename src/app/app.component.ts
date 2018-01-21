import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Páginas
import { CachorrosPage } from '../pages/cachorros/cachorros';
import { VeterinariosPage } from '../pages/veterinarios/veterinarios';
import { LoginPage } from '../pages/login/login';
import { UsuarioProvider } from '../providers/usuario/usuario';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public usuarioProvider: UsuarioProvider) {
    this.initializeApp();

     //Redirecionada para a página correta
     this.usuarioProvider.getJWT().then((data) => {
      //Já está logado
      if (data != null)
        this.rootPage = CachorrosPage;
     });
    
    //Páginas do menu
    this.pages = [
      { title: 'Cachorros', component: CachorrosPage },
      { title: 'Veterinários', component: VeterinariosPage }
    ];
  }
  
  initializeApp() {
    
    this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();  
    });
  }

  /** Muda de página **/
  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logout():void {
    this.nav.setRoot(LoginPage);
    this.usuarioProvider.logout();
  }
}
