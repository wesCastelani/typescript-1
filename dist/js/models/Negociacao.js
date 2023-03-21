export class Negociacao {
    //Sempre definir tipos de cada campo criado e evitar o tipo ANY
    //private _data: Date;
    //private _quantidade: number;
    //private _valor: number;
    //Se no meu construtor eu explicitar o private o TS define sozinho que isso é uma entidade da classe (:
    //Definidno como public e readonly eu não preciso usar getters
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
