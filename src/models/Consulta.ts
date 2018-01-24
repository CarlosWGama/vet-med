import { Veterinario } from './Veterinario';
import { Remedio } from './Remedio';
import { Animal } from './Animal';

export class Consulta {

    public id: number;
    public causa: string;
    public veterinario: Veterinario;
    public data_retorno: string;
    public data_consulta: string;
    public remedios: Remedio[] = [];
    public ativa: boolean = false;

    constructor(public animal?: Animal) {
    }
}