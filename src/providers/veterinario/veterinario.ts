import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servidor } from '../Servidor';
import { Storage } from '@ionic/storage';

@Injectable()
export class VeterinarioProvider extends Servidor{

  constructor(public http: HttpClient, storage: Storage) {
    super();
    this.storage = storage;
  }

  /** Cadastrar um novo Veterinário
   * @param veterinario
   * @return Promise Veterinarios[]
   */
  cadastrar(veterinario: {nome:string, clinica: string, telefone: string}): Promise<any> {
    return this.getHeaders().then((headers) => {
      return this.http.post(this.link+"veterinarios", veterinario, {headers: headers}).toPromise();
    });
  }

  /** Atualiza um Veterinário
   * @param veterinario
   * @return Promise Veterinarios[]
   */
  editar(veterinario: {id: number, nome:string, clinica: string, telefone: string}): Promise<any> {
    return this.getHeaders().then((headers) => {
      return this.http.put(this.link+"veterinarios/"+veterinario.id, veterinario, {headers: headers}).toPromise();
    });
  }

  /** Deleta um Veterinário
   * @param veterinario
   * @return Promise Veterinarios[]
   */
  deletar(id: number): Promise<any> {
    return this.getHeaders().then((headers) => {
      return this.http.delete(this.link+"veterinarios/"+id, {headers: headers}).toPromise();
    });
  }

  /** Atualiza um Veterinário
   * @param veterinario
   * @return Promise Veterinarios[]
   */
  buscar(): Promise<any> {
    return this.getHeaders().then((headers) => {
      return this.http.get(this.link+"veterinarios", {headers: headers}).toPromise();
    });
  }

}
