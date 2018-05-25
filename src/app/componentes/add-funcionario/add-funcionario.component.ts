import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirestoreService } from '../../serviços/firestore.service';
import { Funcionario } from '../../interfaces/funcionario';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-funcionario',
  templateUrl: './add-funcionario.component.html',
  styleUrls: ['./add-funcionario.component.css']
})
export class AddFuncionarioComponent implements OnInit {

  funcionario: Funcionario = {
    // Dados Pessoais e Sociais
    nome: null,
    nascimento: null,
    dataRegistro: null,
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
    public snackBar: MatSnackBar,
  ) {}

  addFuncionario(messagem: string) {
    this.funcionario.dataRegistro = new Date().toLocaleString();
    this.funcionario.nascimento = new Date(this.funcionario.nascimento).toLocaleDateString();
    this.funcionario.expedicao = new Date(this.funcionario.expedicao).toLocaleDateString();
    this.funcionario.admissao = new Date(this.funcionario.admissao).toLocaleDateString();
    if(this.funcionario.demissao != null) {
    this.funcionario.demissao = new Date(this.funcionario.demissao).toLocaleDateString();
    }
    this.firestoreService.addFuncionario(this.funcionario);
    // SnackBar
    this.snackBar.open('Funcionario Cadastrado', 'Ok', {
      duration: 2000
    });

    // Rota
    this.router.navigate(['listar-funcionarios']);
    this.funcionario = null;
  }

  ngOnInit() { }
}
