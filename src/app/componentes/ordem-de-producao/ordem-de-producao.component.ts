import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { OrdemDeProducao } from '../../interfaces/ordem-de-producao';

@Component({
  selector: 'app-ordem-de-producao',
  templateUrl: './ordem-de-producao.component.html',
  styleUrls: ['./ordem-de-producao.component.css']
})
export class OrdemDeProducaoComponent implements OnInit {

  id: any;
  ordemDeProducao: OrdemDeProducao;

  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.firestoreService.getOrdem(this.id).subscribe(ordemDeProducao => {
      this.ordemDeProducao = ordemDeProducao;
    });
  }

  ngOnInit() { }

}
