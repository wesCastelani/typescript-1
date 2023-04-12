import { domInjector } from "../decorators/dom-injector";
import { Inspecionar } from "../decorators/inspecionar.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/DiasDaSemana";
import { Negociacao } from "../models/Negociacao";
import { Negociacoes } from "../models/negociacoes";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view";
import { NegociacoesView } from "../views/negociacoes-view";

export class NegociacaoController {
    //Seleciona os elementos no DOM via querySelector pelo ID via decorator
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQtd: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;

    private negocicoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView')
    private negociacaoService = new NegociacoesService();


    constructor() {
        this.negociacoesView.update(this.negocicoes);
    }

    //Adiciona uma nova negociação
    @Inspecionar
    @logarTempoDeExecucao()
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

    importaDados(): void {
        this.negociacaoService.obterNegociacoes()
            .then(negociacoes => {
                for (let negociacao of negociacoes) {
                    this.negocicoes.adiciona(negociacao)
                }
                this.negociacoesView.update(this.negocicoes)
            });
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