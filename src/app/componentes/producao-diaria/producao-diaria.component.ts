import { Component, OnInit } from '@angular/core';
import { ProducaoDiaria } from 'src/app/interfaces/Producao';
import { FirestoreService } from 'src/app/serviços/firestore.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producao-diaria',
  templateUrl: './producao-diaria.component.html',
  styleUrls: ['./producao-diaria.component.css']
})
export class ProducaoDiariaComponent implements OnInit {

  idProducaoDiaria: any;
  producaoDiaria: ProducaoDiaria;

  constructor(private firestoreService: FirestoreService, private router: Router, private route: ActivatedRoute) {
    this.idProducaoDiaria = this.route.snapshot.params['id'];

    this.firestoreService.getProducaoDiaria(this.idProducaoDiaria).subscribe(producaoDiaria => {
      this.producaoDiaria = producaoDiaria;
    });
  }

  ngOnInit() {
  }

  deleteProducaoDiaria() {
    // Deletar Ordem
    this.firestoreService.deleteProducaoDiaria();
    // Rota
    this.router.navigate(['listar-producoes-diarias']);
  }
}
