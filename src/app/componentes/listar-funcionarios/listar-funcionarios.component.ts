import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Observable } from 'rxjs/Observable';
import { Funcionario } from '../../interfaces/Funcionario';

@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html',
  styleUrls: ['./listar-funcionarios.component.css']
})
export class ListarFuncionariosComponent implements OnInit {

  funcionarios: Funcionario[];

  constructor(
    private funcionarioService: FirestoreService ) {
   }
  
  ngOnInit() {
    this.funcionarioService.getFuncionarios().subscribe( funcionarios => {
      this.funcionarios = funcionarios;
    });
  }

}
