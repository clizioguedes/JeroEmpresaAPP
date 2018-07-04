import { Component, OnInit } from '@angular/core';
import { OrdemDeProducao } from '../../interfaces/ordem-de-producao';
import { FirestoreService } from '../../servi\u00E7os/firestore.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-editar-ordem-de-producao',
  templateUrl: './editar-ordem-de-producao.component.html',
  styleUrls: ['./editar-ordem-de-producao.component.css']
})
export class EditarOrdemDeProducaoComponent implements OnInit {

  id;
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
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firestoreService.getOrdem(this.id).subscribe(ordemDeProducao => {
      this.ordemDeProducao.fornecedor = ordemDeProducao.fornecedor;
      this.ordemDeProducao.numero = ordemDeProducao.numero;
      this.ordemDeProducao.nf = ordemDeProducao.nf;
      this.ordemDeProducao.referencia = ordemDeProducao.referencia;
      this.ordemDeProducao.item = ordemDeProducao.item;
      this.ordemDeProducao.quantidade = ordemDeProducao.quantidade;
      this.ordemDeProducao.tempo = ordemDeProducao.tempo;
      this.ordemDeProducao.valor = ordemDeProducao.valor;
      this.ordemDeProducao.entrega = ordemDeProducao.entrega;
      this.ordemDeProducao.status = ordemDeProducao.status;
    });
  }

  updateOrdemDeProducao() {
    this.ordemDeProducao.dataCadastro = new Date().toLocaleString();
    this.ordemDeProducao.entrega = new Date(this.ordemDeProducao.entrega).toLocaleDateString();
    this.firestoreService.updateOrdem(this.ordemDeProducao);
    // Rota
    this.router.navigate(['ordem-de-producao/' + this.id]);
  }
}
