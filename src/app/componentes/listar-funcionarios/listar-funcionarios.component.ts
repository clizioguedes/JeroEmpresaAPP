import { Component, OnInit, ViewChild } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { Funcionario } from '../../interfaces/Funcionario';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html',
  styleUrls: [
    './listar-funcionarios.component.css'
  ]
})
export class ListarFuncionariosComponent implements OnInit {

  funcionarios: Funcionario[];

  todosFuncionarios: boolean;
  inativosFuncionarios: boolean;
  ativosFuncionarios: boolean;
  tablePrint = false;

  displayedColumns: string[] = ['matricula', 'nome', 'cpf', 'admissao', 'cargo', 'situacao'];

  dataSource: any;
  dataSourceInativos: any;
  dataSourceAtivos: any;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginatorInativos: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginatorAtivos: MatPaginator;

  constructor(
    private firestoreService: FirestoreService) {
  }

  ngOnInit() {
    this.todosFuncionarios = true;
    this.inativosFuncionarios = false;
    this.ativosFuncionarios = false;
    this.firestoreService.getFuncionarios().subscribe(funcionarios => {
      const ELEMENT_DATA = funcionarios;
      this.dataSource = new MatTableDataSource<Funcionario>(ELEMENT_DATA);
    });
  }

  getFuncionariosInativos() {
    this.todosFuncionarios = false;
    this.inativosFuncionarios = true;
    this.ativosFuncionarios = false;
    this.firestoreService.getFuncionariosInativos().subscribe(funcionariosINATIVOS => {
      const ELEMENT_DATA_INATIVOS = funcionariosINATIVOS;
      this.dataSourceInativos = new MatTableDataSource<Funcionario>(ELEMENT_DATA_INATIVOS);
    });
  }

  getFuncionariosAtivos() {
    this.todosFuncionarios = false;
    this.inativosFuncionarios = false;
    this.ativosFuncionarios = true;
    this.firestoreService.getFuncionariosAtivos().subscribe(funcionariosATIVOS => {
      const ELEMENT_DATA_ATIVOS = funcionariosATIVOS;
      this.dataSourceAtivos = new MatTableDataSource<Funcionario>(ELEMENT_DATA_ATIVOS);
    });
  }

  print() {
    window.print();
  }
}
