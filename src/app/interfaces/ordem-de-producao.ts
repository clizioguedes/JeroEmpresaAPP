export interface OrdemDeProducao {
    id?: string;
    dataCadastro: Date;
    fornecedor: string;
    numeroOrdem: string;
    notaFiscalFornecedor: string;
    referencia: string;
    item: string;
    quantidadePecas: number;
    tempoPadrao: number;
    valorPeca: number;
    dataEntrega: Date;
    status?: string;
    producaoAtual?: number;
    observacoes?: string;
}

export interface ProducaoDiaria {
    id?: string; // ID do documento no firebase
    idOrdem?: string; // ID da ordem que essa produção diaria está relacionada 
    dataProducao?: Date; // Data do Registro dessa PD
    quantidadePessoal?: number; // Quantidade de funcionarios Envolvidos nessa PD
    producaoDiaria?: number; // Total de Peças produzidas nessa PD
    minutosPessoal?: number; // Total de Minutos disponivel para a PD
    minutosProducao?: number; // Peças Produzidas * Tempo Padrão
    eficiencia?: number; // (minutosTrabalhados / minutosPessoal);
    faturaDiaria?: number; // producaoDiaria * ordem.valorPeca
    faturaMensal?: number;
}
