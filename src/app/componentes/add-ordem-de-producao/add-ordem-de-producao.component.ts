import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { OrdemDeProducao } from '../../interfaces/ordem-de-producao';

@Component({
  selector: 'app-add-ordem-de-producao',
  templateUrl: './add-ordem-de-producao.component.html',
  styleUrls: ['./add-ordem-de-producao.component.css']
})
export class AddOrdemDeProducaoComponent implements OnInit {

  ordemDeProducao: OrdemDeProducao = {
    dataCadastro: null,
    fornecedor: null,
    numero: null,
    nf: null,
    referencia: null,
    item: null,
    quantidade: null,
    tempo: null,
    valor: null,
    entrega: null,
    status: null,
    producao: null,
    observacao: null
  }

  status = [
    'Espera',
    'Processo',
    'Concluída',
    'Enviada'
  ];

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    public snackBar: MatSnackBar
  ) { }

  addOrdem() {
    this.ordemDeProducao.producao = 0;
    this.ordemDeProducao.dataCadastro = new Date().toLocaleString();
    this.ordemDeProducao.entrega = new Date(this.ordemDeProducao.entrega).toLocaleDateString();
    this.firestoreService.addOrdem(this.ordemDeProducao);
    // SnackBar
    this.snackBar.open('Ordem de Produção Cadastrada', 'Ok', {
      duration: 2000
    });
    // Rota
    this.router.navigate(['listar-ordens-de-producao']);
  }

  ngOnInit() {
  }

}
