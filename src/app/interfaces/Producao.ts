export interface OrdemDeProducao {
    id?: string;
    dataCadastro?: any;
    ultimaEdicao?: any;
    fornecedor?: string;
    nf?: string;
    numero?: number;
    referencia?: string;
    item?: string;
    quantidade?: number;
    tempo?: number;
    valor?: number;
    entrega?: any;
    status?: string;
    producao?: number;
    producaoTemp?: number;
    observacao?: string;
    ultimaProducao?: number;
    ultimaProducaoMin?: number;
    ultimaFaturaDiaria?: number;
}

export interface ProducaoDiaria {
    idProducaoDiaria?: string;
    dataCadastro: any;
    data?: any;
    quantidadeDePessoal?: number;
    producaoDiaria?: number;
    minutosDiarios?: number;
    minutosPessoal?: number;
    minutosProducao?: number;
    eficiencia?: any;
    faturaDiaria?: number;
    ordens?: OrdemDeProducao[];
}

export interface HistoricoDeProducao {
    idHistoricoDeProducao?: string;
    idOrdemDeProducao: string;
    dataCadastro: any;
    dataProducao: any;
    producao: number;
    faturaDiaria?: number;
}
