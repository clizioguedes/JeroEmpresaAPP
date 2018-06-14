import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { Funcionario } from '../../interfaces/funcionario';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  id;
  funcionario: Funcionario = {
    // Dados Pessoais e Sociais
    nome: null,
    nascimento: null,
    dataCadastro: null,
    nomePai: null,
    nomeMae: null,
    sexo: null,
    estadoCivil: null,
    naturalidade: null,
    identidade: null,
    expedicao: null,
    orgaoEmissor: null,
    cpf: null,
    tituloEleitor: null,
    zonaEleitoral: null,
    seccaoEleitoral: null,
    nis: null,
    sus: null,
    // Endereço e Contato
    endereco: null,
    numero: null,
    bairro: null,
    cidade: null,
    celular: null,
    email: null,
    // Dados Funcionais e Dados Bancários
    matricula: null,
    admissao: null,
    demissao: null,
    setor: null,
    cargo: null,
    cbo: null,
    banco: null,
    agencia: null,
    conta: null,
    operacao: null,
    situacao: null
};

  sexos = [
    'Masculino',
    'Feminino'
  ];

  estadosCivis = [
    'Solteiro',
    'Casado',
    'Divorciado',
    'Viúvo',
    'Separado'
  ];

  setores = [
    'Administração',
    'Produção'
  ];

  bancos = [
    'BB',
    'Bradesco',
    'Caixa Econômica'
  ];
  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firestoreService.getFuncionario(this.id).subscribe( funcionario => {
      this.funcionario.agencia = funcionario.agencia;
      this.funcionario.bairro = funcionario.bairro;
      this.funcionario.banco = funcionario.banco;
      this.funcionario.cargo = funcionario.cargo;
      this.funcionario.cbo = funcionario.cbo;
      this.funcionario.celular = funcionario.celular;
      this.funcionario.cidade = funcionario.cidade;
      this.funcionario.conta = funcionario.conta;
      this.funcionario.cpf = funcionario.cpf;
      this.funcionario.dataCadastro = funcionario.dataCadastro;
      this.funcionario.nascimento = funcionario.nascimento;
      this.funcionario.expedicao = funcionario.expedicao;
      this.funcionario.admissao = funcionario.admissao;
      this.funcionario.demissao = funcionario.demissao;
      this.funcionario.email = funcionario.email;
      this.funcionario.endereco = funcionario.endereco;
      this.funcionario.estadoCivil = funcionario.estadoCivil;
      this.funcionario.identidade = funcionario.identidade;
      this.funcionario.matricula = funcionario.matricula;
      this.funcionario.naturalidade = funcionario.naturalidade;
      this.funcionario.nis = funcionario.nis;
      this.funcionario.nome = funcionario.nome;
      this.funcionario.nomeMae = funcionario.nomeMae;
      this.funcionario.nomePai = funcionario.nomePai;
      this.funcionario.numero = funcionario.numero;
      this.funcionario.operacao = funcionario.operacao;
      this.funcionario.orgaoEmissor = funcionario.orgaoEmissor;
      this.funcionario.seccaoEleitoral = funcionario.seccaoEleitoral;
      this.funcionario.setor = funcionario.setor;
      this.funcionario.sexo = funcionario.sexo;
      this.funcionario.situacao = funcionario.situacao;
      this.funcionario.sus = funcionario.sus;
      this.funcionario.tituloEleitor = funcionario.tituloEleitor;
      this.funcionario.zonaEleitoral = funcionario.zonaEleitoral;
    });
  }

  updateFuncionario(funcionario: Funcionario) {
    if(this.funcionario.situacao === "Inativo") {
      this.funcionario.demissao = new Date(this.funcionario.demissao).toLocaleDateString();
      } else {
        funcionario.demissao = null;
      }
    this.firestoreService.updateFuncionario(this.funcionario);
      // Rota
    this.router.navigate(['funcionario/' + this.id]);
  }
}
