export function Escape(target: any, PropertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        let retorno = metodoOriginal.apply(this, args)
        if (typeof retorno == 'string') {
            console.log(`@escape em açao na classe ${this.constructor.name} para o metodo ${PropertyKey}`)
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    }

    return descriptor;
}