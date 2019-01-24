import { Component, OnInit } from '@angular/core';
import { ProducaoDiaria } from 'src/app/interfaces/Producao';
import { FirestoreService } from 'src/app/serviços/firestore.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-producao-diaria',
  templateUrl: './producao-diaria.component.html',
  styleUrls: ['./producao-diaria.component.css']
})
export class ProducaoDiariaComponent implements OnInit {

  producaoDiaria: ProducaoDiaria;
  ordens: any;

  constructor(private firestoreService: FirestoreService, private router: Router, private route: ActivatedRoute) {
    const idProducaoDiaria = this.route.snapshot.params['id'];
    this.firestoreService.getProducaoDiaria(idProducaoDiaria).subscribe(producaoDiaria => {
      this.producaoDiaria = producaoDiaria;
      this.ordens = this.producaoDiaria.ordensPD;
      if (producaoDiaria.id === idProducaoDiaria) {
        console.log('Já tem');
      } else {
        this.firestoreService.addIdProducaoDiaria(idProducaoDiaria);
        console.log('Adicionado Agora');
      }
    });
  }

  ngOnInit() {
  }

  /*
  deleteProducaoDiaria() {
    for (const i of this.ordens) {
      const idOrdem = i.idOrdem;
      const producaoPd = i.producao;
      this.firestoreService.updateDeleteProducao(idOrdem, producaoPd);
    }
    // Deletar Ordem
    this.firestoreService.deleteProducaoDiaria();
    // Rota
    this.router.navigate(['listar-producoes-diarias']);
  }
  */
}
