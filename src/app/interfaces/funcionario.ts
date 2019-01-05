export interface Funcionario {
    id: string;
    dataCadastro: any;
    // Dados Pessoais
    nome: string;
    nascimento: any;
    nomePai?: string;
    nomeMae: string;
    sexo: string;
    estadoCivil: string;
    naturalidade?: string;
    identidade: string;
    expedicao: any;
    orgaoEmissor: string;
    cpf: string;
    tituloEleitor: string;
    zonaEleitoral?: string;
    seccaoEleitoral?: string;
    nis?: string;
    sus?: string;
    // Endereço
    endereco: string;
    numero: string;
    bairro: string;
    cidade: string;
    // Contato
    celular?: string;
    email?: string;
    // Dados Funcionário / Bancários
    matricula: number;
    admissao: any;
    demissao: any;
    setor: string;
    cbo?: string;
    cargo: string;
    banco?: string;
    agencia?: string;
    conta?: string;
    situacao?: string;
    observacao?: string;
    ultimaEdicao?: any;
}

export interface Dependente {
    idDependente?: string;
    dataRegistro: any;
    nome: string;
    nascimento: string;
    cpf: string;
    tipo: string;
}

export interface Falta {
    idFalta?: string;
    tipo?: string;
    periodo: string;
    dataRegistro: any;
    dataFalta: any;
    observacao: string;
}
