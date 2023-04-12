import { Negociacao } from "../models/Negociacao"

export class NegociacoesService {
    public obterNegociacoes(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: NegociacoesDoDia[]) => {
                return dados.map(dado => {
                    return new Negociacao(new Date(),
                        dado.vezes,
                        dado.montante
                    )
                })
            })
    }
}