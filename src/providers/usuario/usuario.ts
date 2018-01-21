import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servidor } from '../Servidor';
import { Storage } from '@ionic/storage/dist/storage';

@Injectable()
export class UsuarioProvider extends Servidor {

  constructor(public http: HttpClient, storage: Storage) {
    super();
    this.storage = storage;
  }

  public login(usuarioEmail:string, usaurioSenha:string): Promise<any> {
    return this.http.post(this.link+'login', {email:usuarioEmail, senha:usaurioSenha}).toPromise();
  }

  public setJWT(token: string): void {
      this.storage.set("jwt", token);
  }

  public getJWT(): Promise<string> {
      return this.storage.get("jwt");
  }

  public logout(): void {
    this.storage.remove("jwt");
  }

 

}
