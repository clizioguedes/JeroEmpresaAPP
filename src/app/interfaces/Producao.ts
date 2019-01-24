export interface OrdemDeProducao {
    id?: string;
    dataCadastro?: Date;
    ultimaEdicao?: Date;
    fornecedor?: string;
    nf?: string;
    numero?: number;
    referencia?: string;
    item?: string;
    quantidade?: number;
    tempo?: number;
    valor?: number;
    entrega?: Date;
    status?: string;
    producao?: number;
    observacao?: string;
    ultimaProducao?: number;
}

export interface ProducaoDiaria {
    id?: string;
    dataCadastro?: Date;
    data?: Date;
    minutosDiarios?: number;
    quantidadeDePessoal?: number;
    minutosPessoal?: number;
    producaoDiaria?: number;
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
