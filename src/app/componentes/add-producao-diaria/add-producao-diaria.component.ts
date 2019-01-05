import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { Router } from '@angular/router';
import { OrdemDeProducao } from '../../interfaces/Producao';
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

  data: Date;
  quantidadeDePessoal: number;
  minutosPessoal: number;
  eficiencia: any;

  day: any;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder) {

    this.firestoreService.getOrdensEmProcesso().subscribe(ordens => {
      this.ordens = ordens;
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

    this.eficiencia = (Math.floor((this.somaTotalProducaoMin / this.minutosPessoal) * 100));
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      dataCadastro: [new Date().toLocaleDateString()],
      data: [this.data, Validators.required],
      quantidadeDePessoal: ['', Validators.required],
      producaoDiaria: [this.somaTotalProducao, Validators.required], //
      minutosDiarios: ['', Validators.required],
      minutosPessoal: [this.f.minutosPessoal * this.quantidadeDePessoal, Validators.required],
      minutosProducao: [this.somaTotalProducaoMin, Validators.required],
      eficiencia: [this.eficiencia, Validators.required],
      faturaDiaria: [this.somaTotalFaturaDiaria, Validators.required],
      ordens: [this.ordens, Validators.required],
    });
  }

  get f() { return this.registerForm.controls; }

  async onSubmit() {
    this.submitted = true;
    const formValue = this.registerForm.value;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    await this.firestoreService.addProducaoDiaria(formValue);
    this.snackBar.open('Ordem de Produção Cadastrada', 'Ok', {
      duration: 2000
    });
    this.router.navigate(['listar-ordens-de-producao']);
  }
}
