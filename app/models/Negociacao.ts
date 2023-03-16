export class Negociacao {

    //Sempre definir tipos de cada campo criado e evitar o tipo ANY
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    //Definir tb os tipos de retorno de cada metodo para evitar erros
    get data(): Date {
        return this._data
    }

    get quantidade(): number {
        return this._quantidade
    }

    get valor(): number {
        return this._valor
    }

    get volume(): number {
        return this._quantidade * this._valor
    }
}