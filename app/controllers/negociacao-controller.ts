import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQtd: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negocicoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    //Seleciona os elementos no DOM via querySelector pelo ID
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQtd = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negocicoes);
    }

    //Adiciona uma nova negociação 
    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negocicoes.adiciona(negociacao);
        this.negociacoesView.update(this.negocicoes)
        this.mensagemView.update("Negociação adicionada com sucesso!")
        console.log(this.negocicoes.lista());
        this.limparFormulario();
    }

    //Cria uma negociação a partir dos .value dos elementos HTML
    criaNegociacao(): Negociacao {
        //Converter a string do input para um Date
        //Expressão para substituir - por ,
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));

        //Convertendo os strings para valores numericos;
        const quantidade = parseInt(this.inputQtd.value);
        const valor = parseFloat(this.inputValor.value);


        return new Negociacao(date, quantidade, valor)
    }

    //Limpa meu formulario apos a criação de uma negociacão
    limparFormulario(): void {
        //Limpa os valores dos elementos do DOM
        this.inputData.value = '';
        this.inputQtd.value = '';
        this.inputValor.value = '';

        //Volta o foco para o campo de data
        this.inputData.focus();
    }
}