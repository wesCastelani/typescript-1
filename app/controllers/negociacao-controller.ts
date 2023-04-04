import { DiasDaSemana } from "../enums/DiasDaSemana.js";
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
    public adiciona(): void {
        //Cria uma negociação a partir dos .value dos elementos HTML
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQtd.value,
            this.inputValor.value
        );
        //Verifica se é um dia util antes de adicionar
        if (!this.verificaDiaUtil(negociacao.data)) {
            this.mensagemView
                .update('Apenas negociações em dias úteis são aceitas')
            return;
        }
        this.negocicoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }



    //Limpa meu formulario apos a criação de uma negociacão
    private limparFormulario(): void {
        //Limpa os valores dos elementos do DOM
        this.inputData.value = '';
        this.inputQtd.value = '';
        this.inputValor.value = '';

        //Volta o foco para o campo de data
        this.inputData.focus();
    }

    private verificaDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negocicoes)
        this.mensagemView.update("Negociação adicionada com sucesso!")
    }
}