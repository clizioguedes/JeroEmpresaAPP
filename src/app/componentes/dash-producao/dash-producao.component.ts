import { Component, OnInit } from '@angular/core';
import { OrdemDeProducao, ProducaoDiaria } from 'src/app/interfaces/Producao';
import { FirestoreService } from '../../serviços/firestore.service';

@Component({
  selector: 'app-dash-producao',
  templateUrl: './dash-producao.component.html',
  styleUrls: ['./dash-producao.component.css']
})
export class DashProducaoComponent implements OnInit {

  ordens: OrdemDeProducao[];
  producoesDiarias: ProducaoDiaria[];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getOrdensDashboard().subscribe(ordens => {
      this.ordens = ordens;
    });

    this.firestoreService.getProducoesDiariasDashboard().subscribe(producoesDiarias => {
      this.producoesDiarias = producoesDiarias;
    });
  }
}
