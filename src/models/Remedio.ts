

export class Remedio {

    constructor(public remedio: string, public dosagem:string, public duracao?:number, 
        public inicio?: string, public fim?: string) {
        this.formateFim();
    }

    public formateFim(): void {
       if (this.duracao != null && this.inicio != "") {
            let data = new Date(this.inicio);
            let dataFim = new Date(data.getTime() + this.duracao*24*60*60*1000);
            this.fim = dataFim.toISOString().slice(0, 10);
        }
    }   

}