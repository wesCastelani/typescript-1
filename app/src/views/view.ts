import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T>{


    //Protected indica q somente a classe suas filhas podem usar
    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement
        } else {
            throw Error("Seletor não existe!")
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T): string;

    @logarTempoDeExecucao()
    public update(model: T): void {
        let template = this.template(model)

        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this.elemento.innerHTML = template;
        const t2 = performance.now();

    }
}