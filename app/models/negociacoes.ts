import { Negociacao } from "./Negociacao.js";

export class Negociacoes {
    //Definir nos <> o tipo que a lista deve receber
    private negociacoes: Array<Negociacao> = [];

    //Adiciona uma negociacao na minha lista de negociacoes
    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    //Lista as negociacoes contidas na lista em uma lista de somente leitura
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}