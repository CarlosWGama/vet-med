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

  /**
   * Loga um usuário existente
   * @param email 
   * @param senha 
   */
  public login(email:string, senha:string): Promise<any> {
    return this.http.post(
				this.link+'login', 
				{email:email, senha:senha},
				{headers: {"Content-Type": "application/json"}}
		).toPromise();
  }

  /**
   * Permite cadastrar um novo usuário
   * @param email 
   * @param senha 
   */
  public cadastrar(email:string, senha:string): Promise<any> {
    return this.http.post(
				this.link+'usuario', 
				{email:email, senha:senha},
				{headers: {"Content-Type": "application/json"}}
		).toPromise();
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
