import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao extends Imprimivel {

    //Sempre definir tipos de cada campo criado e evitar o tipo ANY

    //private _data: Date;
    //private _quantidade: number;
    //private _valor: number;

    //Se no meu construtor eu explicitar o private o TS define sozinho que isso é uma entidade da classe (:
    //Definidno como public e readonly eu não preciso usar getters
    constructor(private _data: Date, public readonly _quantidade: number, public readonly _valor: number) { super() }


    get volume(): number {
        return this._quantidade * this._valor
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    //Utiliza metodo estatico para nao precisar criar um novo objeto para utilizar o metodo
    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        //Converter a string do input para um Date
        //Expressão para substituir - por ,
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));

        //Convertendo os strings para valores numericos;
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);


        return new Negociacao(date, quantidade, valor)
    }

    public toText(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this._quantidade},
            Valor: ${this._valor}
        `
    }
}