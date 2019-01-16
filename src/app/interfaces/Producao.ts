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
    ultimaPpm?: number;
    ultimaFatura?: number;
}

export interface ProducaoDiaria {
    id?: string;
    dataCadastro?: any;
    data?: any;
    quantidadeDePessoal?: number;
    producaoDiaria?: number;
    minutosDiarios?: number;
    minutosPessoal?: number;
    minutosProducao?: number;
    eficiencia?: any;
    faturaDiaria?: number;
    ordensPD?: (OrdemPD)[];
}

export interface OrdemPD {
    idOrdem: string;
    referencia?: string;
    tempo?: number;
    valor?: number;
    producao?: number;
    ppm?: number;
    fatura?: number;
}
