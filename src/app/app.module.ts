import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AnimalProvider } from '../providers/animal/animal';


import { MyApp } from './app.component';

import { AnimaisPageModule } from '../pages/animais/animais.module';
import { VeterinariosPageModule } from '../pages/veterinarios/veterinarios.module';
import { LoginPageModule } from '../pages/login/login.module';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { VeterinarioProvider } from '../providers/veterinario/veterinario';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AnimaisPageModule,
    VeterinariosPageModule,
    LoginPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AnimalProvider,
    UsuarioProvider,
    VeterinarioProvider
  ]
})
export class AppModule {}
