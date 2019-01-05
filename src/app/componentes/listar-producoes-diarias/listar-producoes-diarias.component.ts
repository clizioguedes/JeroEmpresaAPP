import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { ProducaoDiaria } from 'src/app/interfaces/Producao';

@Component({
  selector: 'app-listar-producoes-diarias',
  templateUrl: './listar-producoes-diarias.component.html',
  styleUrls: ['./listar-producoes-diarias.component.css']
})
export class ListarProducoesDiariasComponent implements OnInit {

  producoesDiarias: ProducaoDiaria[];

  constructor(private firestoreService: FirestoreService) {
  }

  ngOnInit() {
    this.firestoreService.getProducoesDiarias().subscribe(producoesDiarias => {
      this.producoesDiarias = producoesDiarias;
    });
  }

}
