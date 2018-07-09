import { Component } from '@angular/core';
import { FirestoreService } from '../serviços/firestore.service';
import { Funcionario } from '../interfaces/Funcionario';
import { OrdemDeProducao } from '../interfaces/Producao';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  funcionarios: Funcionario[];
  ordens: OrdemDeProducao[];

  ordemDeProducao: OrdemDeProducao;

  quantidadeCount;
  quantidadeData;

  view: any[] = [450, 150];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Quantidade';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  chartdata = false;

  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
    constructor(private firestoreService: FirestoreService) {
      this.firestoreService.getFuncionariosDashboard().subscribe( funcionarios => {
        this.funcionarios = funcionarios;
      });

      this.firestoreService.getOrdensDashboard().subscribe( ordens => {
        this.chartdata = true;
        this.ordens = ordens;
      });
  }
}
