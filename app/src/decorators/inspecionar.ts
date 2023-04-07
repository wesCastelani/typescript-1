

//Se me decorator não precisar de parametros posso usar esse metodo de declaração
export function Inspecionar(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`--- Metodo ${propertyKey}`);
        console.log(`--- Parametros: ${JSON.stringify(args)}`)
        const retorno = metodoOriginal.apply(this, args)
        console.log(`--- retorno: ${JSON.stringify(retorno)}`)
        return retorno;
    }

    return descriptor;
}
