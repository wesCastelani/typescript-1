import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T>{


    //Protected indica q somente a classe suas filhas podem usar
    protected elemento: HTMLElement;


    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement
        } else {
            throw Error("Seletor não existe!")
        }
    }

    protected abstract template(model: T): string;

    @logarTempoDeExecucao()
    public update(model: T): void {
        let template = this.template(model)

        this.elemento.innerHTML = template;
    }
}