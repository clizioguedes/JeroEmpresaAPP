import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { Router } from '@angular/router';
import { OrdemDeProducao, ProducaoDiaria, OrdemPD } from '../../interfaces/Producao';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-producao-diaria',
  templateUrl: './add-producao-diaria.component.html',
  styleUrls: ['./add-producao-diaria.component.css']
})

export class AddProducaoDiariaComponent implements OnInit {

  ordens: OrdemDeProducao[];

  pd: ProducaoDiaria = {
    dataCadastro: null,
    data: null,
    minutosDiarios: null,
    quantidadeDePessoal: null,
    minutosPessoal: null,
    producaoDiaria: null,
    minutosProducao: null,
    eficiencia: null,
    faturaDiaria: null,
    ordensPD: []
  };

  ordemPD: OrdemPD = {
    idOrdem: '',
    referencia: '',
    tempo: 0,
    valor: 0,
    producao: 0,
    ppm: 0,
    fatura: 0,
  };

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.firestoreService.getOrdensEmProcesso().subscribe(ordens => {
      this.ordens = ordens;
    });
  }

  ngOnInit() {
  }

  customTrackBy(index: number, ordem: any): any {
    return index;
  }

  onOrdemInPd() {
    for (const item of this.ordens) {
      const idOrdem = item.id;
      const producao: number = item.producao + item.ultimaProducao;
      if (item.producao === null) {
        item.producao = 0;
      }
      this.firestoreService.updateAddProducao(idOrdem, producao);
      this.pd.ordensPD.push(
        {
          idOrdem: item.id,
          referencia: item.referencia,
          tempo: item.tempo,
          valor: item.valor,
          producao: item.ultimaProducao,
          ppm: item.tempo * item.ultimaProducao,
          fatura: item.valor * item.ultimaProducao
        }
      );
    }
    this.pd.producaoDiaria = this.pd.ordensPD.reduce(function (a, b) {
      return a + b['producao'];
    }, 0);

    this.pd.minutosProducao = this.pd.ordensPD.reduce(function (a, b) {
      return a + b['ppm'];
    }, 0);
    this.pd.minutosProducao = Math.round(this.pd.minutosProducao);

    this.pd.faturaDiaria = this.pd.ordensPD.reduce(function (a, b) {
      return a + b['fatura'];
    }, 0);
    this.pd.dataCadastro = new Date();
    this.pd.faturaDiaria = Math.round(this.pd.faturaDiaria);
    this.pd.minutosPessoal = this.pd.minutosDiarios * this.pd.quantidadeDePessoal;
    this.pd.eficiencia = (Math.floor((this.pd.minutosProducao / this.pd.minutosPessoal) * 100));
    console.log(this.pd.ordensPD);
    console.log(this.pd.producaoDiaria);
    console.log(this.pd.minutosProducao);
    console.log(this.pd.faturaDiaria);
    this.firestoreService.addProducaoDiaria(this.pd);
    this.snackBar.open('Ordem de Produção Cadastrada', 'Ok', {
      duration: 2000
    });
    this.router.navigate(['listar-producoes-diarias']);
  }

  offOrdemInPd() {
    this.clearPD();
    alert('Sua produção foi cancelada');
    this.router.navigate(['listar-producoes-diarias']);
    console.log(this.pd.ordensPD);
    console.log(this.pd.producaoDiaria);
    console.log(this.pd.minutosProducao);
    console.log(this.pd.faturaDiaria);
  }

  clearPD() {
    this.pd.data = null,
      this.pd.minutosDiarios = null,
      this.pd.quantidadeDePessoal = null,
      this.pd.minutosPessoal = null;
    this.pd.producaoDiaria = 0;
    this.pd.minutosProducao = 0;
    this.pd.faturaDiaria = 0;
    this.pd.eficiencia = 0;
    this.pd.ordensPD = [];
  }
}
