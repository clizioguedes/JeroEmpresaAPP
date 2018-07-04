import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { OrdemDeProducao } from '../../interfaces/ordem-de-producao';

@Component({
  selector: 'app-listar-ordens-de-producao',
  templateUrl: './listar-ordens-de-producao.component.html',
  styleUrls: ['./listar-ordens-de-producao.component.css']
})
export class ListarOrdensDeProducaoComponent implements OnInit {

  ordens: OrdemDeProducao[];

  constructor(
    private firestoreService: FirestoreService ) {
   }

   ngOnInit() {
    this.firestoreService.getOrdens().subscribe( ordens => {
      this.ordens = ordens;
    });
  }

}
