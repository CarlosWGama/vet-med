import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servidor } from '../Servidor';
import { Storage } from '@ionic/storage';
import { Consulta } from '../../models/Consulta';

@Injectable()
export class ConsultaProvider extends Servidor {

  constructor(public http: HttpClient, storage: Storage) {
    super();
    this.storage = storage;
  }

    /**
   * Cadastra uma nova consulta e retorna a lista atualizada
   * @param animal 
   */
  public cadastrar(consulta: Consulta): Promise<any> {
    return this.getHeaders().then((headers:any) => {  
      return this.http.post(this.link+"consultas", consulta, {headers: headers}).toPromise();
    });
  }

  /**
   * Cadastra uma nova consulta e retorna a lista atualizada
   * @param animal 
   */
  public atualizar(consulta: Consulta): Promise<any> {
    return this.getHeaders().then((headers:any) => {  
      return this.http.put(this.link+"consultas", consulta, {headers: headers}).toPromise();
    });
  }

  /**
   * Busca todos as consultas daquele usuário
   */
  public buscar(animalID: number): Promise<any> {
    return this.getHeaders().then((headers: any) => {
      return this.http.get(this.link+'consultas/'+animalID, {headers: headers}).toPromise();
    });
  }

  /**
   * Deleta a consulta e retorna a lista atualizada
   * @param id
   */
  public deletar(id: number): Promise<any> {
    return this.getHeaders().then((headers:any) => {  
      return this.http.delete(this.link+"consultas/"+id, {headers: headers}).toPromise();
    });
  }

}
