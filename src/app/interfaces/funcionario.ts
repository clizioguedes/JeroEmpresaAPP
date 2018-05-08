export interface Funcionario {
    id?: string;
    dataRegistro;
    // Dados Pessoais
    nome: string;
    dataNascimento;
    nomePai?: string;
    nomeMae: string;
    sexo: string;
    estadoCivil: string;
    naturalidade?: string;
    identidade: string;
    dataExpedicao;
    orgaoEmissor: string;
    cpf: string;
    tituloEleitor: string;
    zonaEleitoral?: string;
    seccaoEleitoral?: string;
    nis?: string;
    sus?: string;
    // Contato
    endereco: string;
    numero: string;
    bairro: string;
    cidade: string;
    celular?: string;
    email?: string;
    // Dados Funcionário / Bancários
    matricula: number;
    dataAdmissao;
    setor: string;
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
