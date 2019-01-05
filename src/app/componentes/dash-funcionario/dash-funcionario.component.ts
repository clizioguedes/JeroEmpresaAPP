import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { Funcionario } from 'src/app/interfaces/Funcionario';

@Component({
  selector: 'app-dash-funcionario',
  templateUrl: './dash-funcionario.component.html',
  styleUrls: ['./dash-funcionario.component.css']
})
export class DashFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[];
  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getFuncionariosDashboard().subscribe(funcionarios => {
      this.funcionarios = funcionarios;
    });
  }
}
