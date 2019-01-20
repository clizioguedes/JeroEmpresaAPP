import { Component, OnInit, ViewChild } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { ProducaoDiaria } from 'src/app/interfaces/Producao';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-listar-producoes-diarias',
  templateUrl: './listar-producoes-diarias.component.html',
  styleUrls: ['./listar-producoes-diarias.component.css']
})
export class ListarProducoesDiariasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'data', 'quantidadeDePessoal', 'producaoDiaria', 'eficiencia', 'faturaDiaria'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private firestore: FirestoreService) {
    this.firestore.getProducoesDiarias().subscribe(pds => {
      const ELEMENT_DATA = pds;
      this.dataSource = new MatTableDataSource<ProducaoDiaria>(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit() {

  }
}
