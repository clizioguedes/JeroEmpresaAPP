import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../../serviços/firestore.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-ordem-de-producao',
  templateUrl: './add-ordem-de-producao.component.html',
  styleUrls: ['./add-ordem-de-producao.component.css']
})
export class AddOrdemDeProducaoComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { }

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
      producao: [ 0 ],
      observacao: ['', Validators.required]
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
    await this.firestoreService.addOrdem(formValue);
    this.snackBar.open('Ordem de Produção Cadastrada', 'Ok', {
      duration: 2000
    });
    this.router.navigate(['listar-ordens-de-producao']);
  }
}
