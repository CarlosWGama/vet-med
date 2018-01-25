import { Storage } from '@ionic/storage';

export class Servidor {

    protected link = 'http://vet.carloswgama.com.br/api/';
    protected storage: Storage;

    public getHeaders(): Promise<{"Authorization": string}> {
        return this.storage.get("jwt").then((jwt) => {
            let headers = {
                'Authorization': jwt,
                'Content-Type': 'application/json'
            };
            return headers;
        });
    }
}