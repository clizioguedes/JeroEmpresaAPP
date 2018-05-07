import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirestoreService } from '../../services/firestore.service';
import { Funcionario } from '../../interfaces/Funcionario';
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
    dataNascimento: null,
    dataRegistro: null,
    nomePai: null,
    nomeMae: null,
    sexo: null,
    estadoCivil: null,
    naturalidade: null,
    identidade: null,
    dataExpedicao: null,
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
    dataAdmissao: null,
    setor: null,
    cargo: null,
    banco: null,
    agencia: null,
    conta: null,
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
    private funcionarioService: FirestoreService,
    private router: Router,
    public snackBar: MatSnackBar,
  ) {}

  addFuncionario(messagem: string) {
    this.funcionario.dataRegistro = new Date().toLocaleString();
    this.funcionario.dataNascimento = new Date(this.funcionario.dataNascimento).toLocaleDateString();
    this.funcionario.dataExpedicao = new Date(this.funcionario.dataExpedicao).toLocaleDateString();
    this.funcionario.dataAdmissao = new Date(this.funcionario.dataAdmissao).toLocaleDateString();
    this.funcionarioService.addFuncionario(this.funcionario);
    // SnackBar
    this.snackBar.open('Funcionario Cadastrado', 'Ok', {
      duration: 2000,
    });

    // Rota
    this.router.navigate(['listar-funcionarios']);
    this.funcionario = null;
  }

  ngOnInit() { }

}