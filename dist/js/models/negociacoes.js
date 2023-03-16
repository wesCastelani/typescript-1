export class Negociacoes {
    constructor() {
        //Definir nos <> o tipo que a lista deve receber
        this.negociacoes = [];
    }
    //Adiciona uma negociacao na minha lista de negociacoes
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //Lista as negociacoes contidas na lista em uma lista de somente leitura
    lista() {
        return this.negociacoes;
    }
}
