import { Component, OnInit, ViewChild } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { OrdemDeProducao } from '../../interfaces/Producao';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-ordens-de-producao',
  templateUrl: './listar-ordens-de-producao.component.html',
  styleUrls: ['./listar-ordens-de-producao.component.css']
})
export class ListarOrdensDeProducaoComponent implements OnInit {

  displayedColumns: string[] = ['referencia', 'quantidade', 'producao', 'entrega', 'status'];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private firestoreService: FirestoreService) {
  }

  ngOnInit() {
    this.firestoreService.getOrdens().subscribe(ordens => {
      const ELEMENT_DATA = ordens;
      this.dataSource = new MatTableDataSource<OrdemDeProducao>(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }
}
