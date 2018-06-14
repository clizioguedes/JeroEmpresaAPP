export interface OrdemDeProducao {
    id?: string;
    dataCadastro: any;
    fornecedor: string;
    nf: string;
    numero: string;
    referencia: string;
    item: string;
    quantidade: number;
    tempo: number;
    valor: number;
    entrega: any;
    status?: string;
    producao?: number;
    observacao?: string;
}

export interface ProducaoDiaria {
    id?: string; // ID do documento no firebase
    idOrdem?: string; // ID da ordem que essa produção diaria está relacionada 
    dataCadastro?: Date; // Data do Registro dessa PD
    quantidadePessoal?: number; // Quantidade de funcionarios Envolvidos nessa PD
    producaoDiaria?: number; // Total de Peças produzidas nessa PD
    minutosPessoal?: number; // Total de Minutos disponivel para a PD
    minutosProducao?: number; // Peças Produzidas * Tempo Padrão
    eficiencia?: number; // (minutosTrabalhados / minutosPessoal);
    faturaDiaria?: number; // producaoDiaria * valorPeca
}
