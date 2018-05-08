import { Component, OnInit, ViewChild } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { Observable } from 'rxjs/Observable';
import { Funcionario } from '../../interfaces/funcionario';

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
    private funcionarioService: FirestoreService ) {
   }
  
  ngOnInit() {
    this.allFuncionarios = true;
    this.inativeFuncionarios = false;
    this.activeFuncionarios = false;
    this.funcionarioService.getFuncionarios().subscribe( funcionarios => {
      this.funcionarios = funcionarios;
    });
  }

  getFuncionariosInativos() {
    this.allFuncionarios = false;
    this.inativeFuncionarios = true;
    this.activeFuncionarios = false;
    this.funcionarioService.getFuncionariosInativos().subscribe( funcionarios => {
      this.funcionarios = funcionarios;
    });
  }

  getFuncionariosAtivos() {
    this.allFuncionarios = false;
    this.inativeFuncionarios = false;
    this.activeFuncionarios = true;
    this.funcionarioService.getFuncionariosAtivos().subscribe( funcionarios => {
      this.funcionarios = funcionarios;
    });
  }

  print() {
    let printContents, popupWin;

    if(this.allFuncionarios) {
      printContents = document.getElementById('printerAll').innerHTML;
    };
    if (this.activeFuncionarios) {
      printContents = document.getElementById('printerActive').innerHTML;
    };
    if (this.inativeFuncionarios) {
      printContents = document.getElementById('printerInative').innerHTML;
    };
    popupWin = window.open();
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <style>
            
          </style>
        </head>
        <body id="print" onload="window.print();window.close()">
            ${printContents}
        </body>
      </html>`);
    popupWin.document.close();
  }
}
