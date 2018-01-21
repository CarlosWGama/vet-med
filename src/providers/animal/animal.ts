import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servidor } from '../Servidor';
import { Storage } from '@ionic/storage/dist/storage';

@Injectable()
export class AnimalProvider extends Servidor {

  constructor(public http: HttpClient, storage: Storage) {
    super();
    this.storage = storage;
  }

  /**
   * Cadastra novos animais e retorna a lista atualizada
   * @param animal 
   */
  public cadastrar(animal: {"nome":string, "raca":string, "nascimento":string}): Promise<any> {
    return this.getHeaders().then((headers:any) => {  
      return this.http.post(this.link+"animals", animal, {headers: headers}).toPromise();
    });
  }

  /**
   * Busca todos os animais daquele usuário
   */
  public buscar(): Promise<any> {
    return this.getHeaders().then((headers: any) => {
      return this.http.get(this.link+'animals', {headers: headers}).toPromise();
    });
  }

  /**
   * Atualiza animal e retorna a lista atualizada
   * @param animal
   */
  public atualizar(animal: {id: number, nome:string, raca:string, nascimento:string}): Promise<any> {
    return this.getHeaders().then((headers:any) => {  
      return this.http.put(this.link+"animals/"+animal.id, animal, {headers: headers}).toPromise();
    });
  }

  /**
   * Deleta animal e retorna a lista atualizada
   * @param id
   */
  public deletar(id: number): Promise<any> {
    return this.getHeaders().then((headers:any) => {  
      return this.http.delete(this.link+"animals/"+id, {headers: headers}).toPromise();
    });
  }

}
