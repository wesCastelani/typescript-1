export class Negociacao {

    //Sempre definir tipos de cada campo criado e evitar o tipo ANY

    //private _data: Date;
    //private _quantidade: number;
    //private _valor: number;

    //Se no meu construtor eu explicitar o private o TS define sozinho que isso é uma entidade da classe (:
    //Definidno como public e readonly eu não preciso usar getters
    constructor(private _data: Date, public readonly _quantidade: number, public readonly _valor: number) { }


    get volume(): number {
        return this._quantidade * this._valor
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }
}