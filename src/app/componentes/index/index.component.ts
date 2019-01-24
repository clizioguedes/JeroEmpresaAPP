import { Component, OnInit, ViewChild } from '@angular/core';
import { ProducaoDiaria } from 'src/app/interfaces/Producao';
import { FirestoreService } from 'src/app/serviços/firestore.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  displayedColumnsPD: string[] = ['data', 'producaoDiaria', 'eficiencia', 'faturaDiaria'];
  dataSourcePD: any;

  displayedColumnsOP: string[] = ['referencia', 'quantidade', 'producao', 'entrega', 'status'];
  dataSourceOP: any;

  constructor(private firestore: FirestoreService) {
  }

  ngOnInit() {

    this.firestore.getOrdensDashboard().subscribe(ordens => {
      const ELEMENT_DATA_OP = ordens;
      this.dataSourceOP = new MatTableDataSource<ProducaoDiaria>(ELEMENT_DATA_OP);
    });

    this.firestore.getProducoesDiariasDashboard().subscribe(pds => {
      const ELEMENT_DATA_PD = pds;
      this.dataSourcePD = new MatTableDataSource<ProducaoDiaria>(ELEMENT_DATA_PD);
    });
  }
}
