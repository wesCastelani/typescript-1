var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/DiasDaSemana";
import { Negociacao } from "../models/Negociacao";
import { Negociacoes } from "../models/negociacoes";
import { MensagemView } from "../views/mensagem-view";
import { NegociacoesView } from "../views/negociacoes-view";
export class NegociacaoController {
    constructor() {
        this.negocicoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQtd = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negocicoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQtd.value, this.inputValor.value);
        if (!this.verificaDiaUtil(negociacao.data)) {
            this.mensagemView
                .update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negocicoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQtd.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    verificaDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    atualizaView() {
        this.negociacoesView.update(this.negocicoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
}
__decorate([
    logarTempoDeExecucao()
], NegociacaoController.prototype, "adiciona", null);
