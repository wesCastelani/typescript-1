import { Negociacao } from "../models/Negociacao.js";
export class NegociacaoController {
    //Seleciona os elementos no DOM via querySelector pelo ID
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQtd = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    //Adiciona uma nova negociação 
    adiciona() {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
    }
    //Cria uma negociação a partir dos .value dos elementos HTML
    criaNegociacao() {
        //Converter a string do input para um Date
        //Expressão para substituir - por ,
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        //Convertendo os strings para valores numericos;
        const quantidade = parseInt(this.inputQtd.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    //Limpa meu formulario apos a criação de uma negociacão
    limparFormulario() {
        //Limpa os valores dos elementos do DOM
        this.inputData.value = '';
        this.inputQtd.value = '';
        this.inputValor.value = '';
        //Volta o foco para o campo de data
        this.inputData.focus();
    }
}