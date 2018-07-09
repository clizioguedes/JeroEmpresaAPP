import { Component } from '@angular/core';
import { FirestoreService } from '../serviços/firestore.service';
import { Funcionario } from '../interfaces/funcionario';
import { OrdemDeProducao } from '../interfaces/ordem-de-producao';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  funcionarios: Funcionario[];
  ordens: OrdemDeProducao[];

  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
  constructor(
    private firestoreService: FirestoreService ) {
   }

ngOnInit() {
  this.firestoreService.getFuncionariosDashboard().subscribe( funcionarios => {
    this.funcionarios = funcionarios;
  });

  this.firestoreService.getOrdensDashboard().subscribe( ordens => {
    this.ordens = ordens;
  });
}

}