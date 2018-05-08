import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { Observable } from 'rxjs/Observable';
import { Dependente } from '../../interfaces/funcionario';

@Component({
  selector: 'app-listar-dependentes',
  templateUrl: './listar-dependentes.component.html',
  styleUrls: ['./listar-dependentes.component.css']
})
export class ListarDependentesComponent implements OnInit {

  dependentes: Dependente[];

  constructor( private firestoreService: FirestoreService ) { }

  ngOnInit() {
    this.firestoreService.getDependentes().subscribe( dependentes => {
      this.dependentes = dependentes;
    });
  }

  deleteDependente(event, dependente: Dependente){
    this.firestoreService.deleteDependente(dependente);
    console.log('Dependente Deletado');
  }

}
