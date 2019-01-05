import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { Router } from '@angular/router';
import { ProducaoDiaria, OrdemDeProducao } from '../../interfaces/Producao';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-producao-diaria',
  templateUrl: './add-producao-diaria.component.html',
  styleUrls: ['./add-producao-diaria.component.css']
})

export class AddProducaoDiariaComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  ordens: OrdemDeProducao[];

  somaTotalProducao: any;
  somaTotalProducaoMin: any;
  somaTotalFaturaDiaria: any;

  producaoDiaria: ProducaoDiaria = {
    idProducaoDiaria: null,
    dataCadastro: null,
    dataProducaoDiaria: null,
    minutosDiarios: null,
    quantidadeDePessoal: null,
    minutosPessoal: 0,
    producaoDiaria: null,
    minutosProducao: null,
    faturaDiaria: null,
    eficiencia: null, // (minutosTrabalhados / minutosPessoal);
    ordens: []
  };

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder) {

    this.firestoreService.getOrdens().subscribe(ordens => {
      this.ordens = ordens;
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      dataCadastro: [new Date().toLocaleDateString()],
      fornecedor: ['', Validators.required],
      numero: ['', Validators.required],
      nf: ['', Validators.required],
      referencia: ['', Validators.required],
      item: ['', Validators.required],
      quantidade: ['', Validators.required],
      tempo: ['', Validators.required],
      valor: ['', Validators.required],
      entrega: ['', Validators.required],
      status: ['', Validators.required],
      producao: [0],
      observacao: ['', Validators.required]
    });
  }

  OnChange($event) {
    console.log($event);
  }

  customTrackBy(index: number, ordem: any): any {
    return index;
  }

  somaTotal() {
    this.somaTotalProducao = this.ordens.reduce(function (a, b) {
      return a + b['ultimaProducao'];
    }, 0);
    this.somaTotalProducaoMin = this.ordens.reduce(function (a, b) {
      return a + b['ultimaProducaoMin'];
    }, 0);
    this.somaTotalFaturaDiaria = this.ordens.reduce(function (a, b) {
      return a + b['ultimaFaturaDiaria'];
    }, 0);

    this.somaTotalProducaoMin = parseFloat(this.somaTotalProducaoMin).toFixed(0);
    this.somaTotalFaturaDiaria = parseFloat(this.somaTotalFaturaDiaria).toFixed(0);
  }

  clear() {
    this.producaoDiaria.dataProducaoDiaria = null;
    this.producaoDiaria.minutosDiarios = null;
    this.producaoDiaria.quantidadeDePessoal = null;
    this.producaoDiaria.minutosPessoal = null;
    this.producaoDiaria.producaoDiaria = null;
    this.producaoDiaria.minutosProducao = null;
    this.producaoDiaria.eficiencia = null;
    this.producaoDiaria.faturaDiaria = null;
  }

  addProducaoDiaria() {
    this.producaoDiaria.dataCadastro = new Date().toLocaleString();
    this.producaoDiaria.dataProducaoDiaria = new Date(this.producaoDiaria.dataProducaoDiaria).toLocaleDateString();
    this.producaoDiaria.producaoDiaria = this.somaTotalProducao;
    this.producaoDiaria.minutosPessoal = this.producaoDiaria.quantidadeDePessoal * this.producaoDiaria.minutosDiarios;
    this.producaoDiaria.minutosProducao = this.somaTotalProducaoMin;
    this.producaoDiaria.eficiencia = (Math.floor((this.somaTotalProducaoMin / this.producaoDiaria.minutosPessoal) * 100));
    this.producaoDiaria.faturaDiaria = this.somaTotalFaturaDiaria;
    this.firestoreService.addProducaoDiaria(this.producaoDiaria);
    this.clear();
    this.snackBar.open('Produção Diária', 'Cadastrada', {
      duration: 2000
    });
    // Rota
    this.router.navigate(['listar-producoes-diarias']);
    this.producaoDiaria = null;
  }
}
