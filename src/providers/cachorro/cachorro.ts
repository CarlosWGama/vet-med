import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servidor } from '../Servidor';
import { Storage } from '@ionic/storage/dist/storage';

@Injectable()
export class CachorroProvider extends Servidor {

  constructor(public http: HttpClient, storage: Storage) {
    super();
    this.storage = storage;
  }

  /**
   * Cadastra novos animais e retorna a lista atualizada
   * @param cachorro 
   */
  public cadastrar(cachorro: {"nome":string, "raca":string, "nascimento":string}): Promise<any> {
    return this.getHeaders().then((headers:any) => {  
      return this.http.post(this.link+"cachorros", cachorro, {headers: headers}).toPromise();
    });
  }

  /**
   * Busca todos os animais daquele usuário
   */
  public buscar(): Promise<any> {
    return this.getHeaders().then((headers: any) => {
      return this.http.get(this.link+'cachorros', {headers: headers}).toPromise();
    });
  }

  /**
   * Atualiza animal e retorna a lista atualizada
   * @param cachorro
   */
  public atualizar(cachorro: {id: number, nome:string, raca:string, nascimento:string}): Promise<any> {
    return this.getHeaders().then((headers:any) => {  
      return this.http.put(this.link+"cachorros/"+cachorro.id, cachorro, {headers: headers}).toPromise();
    });
  }

  /**
   * Deleta animal e retorna a lista atualizada
   * @param id
   */
  public deletar(id: number): Promise<any> {
    return this.getHeaders().then((headers:any) => {  
      return this.http.delete(this.link+"cachorros/"+id, {headers: headers}).toPromise();
    });
  }

}
