import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../servi\u00E7os/firestore.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-ordem-de-producao',
  templateUrl: './editar-ordem-de-producao.component.html',
  styleUrls: ['./editar-ordem-de-producao.component.css']
})
export class EditarOrdemDeProducaoComponent implements OnInit {

  id: string;
  editForm: FormGroup;
  submitted = false;
  fornecedor: any;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {
    this.id = this.route.snapshot.params['id'];
    this.firestoreService.getOrdem(this.id).subscribe(ordem => {
      this.fornecedor = ordem.fornecedor;
      this.editForm = this.formBuilder.group({
        ultimaEdicao: [new Date(), Validators.required],
        fornecedor: [this.fornecedor, Validators.required],
        nf: [ordem.nf, Validators.required],
        numero: [ordem.numero, Validators.required],
        referencia: [ordem.referencia, Validators.required],
        item: [ordem.item],
        quantidade: [ordem.quantidade],
        tempo: [ordem.tempo, Validators.required],
        valor: [ordem.valor, Validators.required],
        entrega: [ordem.entrega, Validators.required],
        status: [ordem.status, Validators.required],
        producao: [ordem.producao, Validators.required],
        producaoTemp: [ordem.producaoTemp, Validators.required],
        observacao: [ordem.observacao, Validators.required],
        ultimaProducao: [ordem.ultimaProducao, Validators.required],
        ultimaProducaoMin: [ordem.ultimaProducaoMin, Validators.required],
        ultimaFaturaDiaria: [ordem.ultimaFaturaDiaria, Validators.required],
      });
    });
  }

  ngOnInit() {

  }

  get f() { return this.editForm.controls; }

  updateOrdemDeProducao() {
    this.submitted = true;
    const ordemDeProducao = this.editForm.value;
    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
    this.firestoreService.updateOrdem(ordemDeProducao);
    this.router.navigate(['ordem-de-producao/' + this.id]);
  }
}
