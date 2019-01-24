import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  aviso = 'Este Item é Obrigatório';

  constructor(
    private router: Router,
    public firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.id = this.route.snapshot.params['id'];
    this.firestoreService.getOrdem(this.id).subscribe(ordem => {
      this.editForm = this.formBuilder.group({
        ultimaEdicao: [new Date(), Validators.required],
        fornecedor: [ordem.fornecedor, Validators.required],
        nf: [ordem.nf, Validators.required],
        numero: [ordem.numero, Validators.required],
        referencia: [ordem.referencia, Validators.required],
        item: [ordem.item],
        quantidade: [ordem.quantidade],
        tempo: [ordem.tempo, Validators.required],
        valor: [ordem.valor, Validators.required],
        entrega: [ordem.entrega],
        status: [ordem.status, Validators.required],
        observacao: [ordem.observacao],
      });
    });
  }
  ngOnInit() {

  }

  get f() { return this.editForm.controls; }

  onSubmit() {
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
