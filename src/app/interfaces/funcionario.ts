export interface Funcionario {
    id?: string;
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
    operacao?: string;
    agencia?: string;
    conta?: string;
    situacao?: string;
}

export interface Dependente {
    id?: string;
    dataRegistro;
    nome: string;
    nascimento;
    cpf: string;
    tipo: string;
}

export interface Falta {
    id?: string;
    tipo?: string;
    nomeFuncionario?: string;
    periodo: string;
    dataRegistro;
    dataFalta;
    observacao: string;
}
