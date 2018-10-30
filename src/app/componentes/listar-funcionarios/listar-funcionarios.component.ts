import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { Funcionario } from '../../interfaces/Funcionario';

@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html',
  styleUrls: ['./listar-funcionarios.component.css']
})
export class ListarFuncionariosComponent implements OnInit {

  funcionarios: Funcionario[];

  allFuncionarios;
  inativeFuncionarios;
  activeFuncionarios;
  tablePrint = false;

  constructor(
    private firestoreService: FirestoreService ) {
   }

  ngOnInit() {
    this.allFuncionarios = true;
    this.inativeFuncionarios = false;
    this.activeFuncionarios = false;
    this.firestoreService.getFuncionarios().subscribe( funcionarios => {
      this.funcionarios = funcionarios;
    });
  }

  getFuncionariosInativos() {
    this.allFuncionarios = false;
    this.inativeFuncionarios = true;
    this.activeFuncionarios = false;
    this.firestoreService.getFuncionariosInativos().subscribe( funcionarios => {
      this.funcionarios = funcionarios;
    });
  }

  getFuncionariosAtivos() {
    this.allFuncionarios = false;
    this.inativeFuncionarios = false;
    this.activeFuncionarios = true;
    this.firestoreService.getFuncionariosAtivos().subscribe( funcionarios => {
      this.funcionarios = funcionarios;
    });
  }
}
