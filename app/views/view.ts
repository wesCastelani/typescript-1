export abstract class View<T>{


    //Protected indica q somente a classe suas filhas podem usar
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    protected abstract template(model: T): string;


    public update(model: T): void {
        const template = this.template(model)
        this.elemento.innerHTML = template;
    }
}