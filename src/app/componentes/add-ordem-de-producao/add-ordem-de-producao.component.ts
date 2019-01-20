import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
  aviso = 'Este Item é Obrigatório';

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      dataCadastro: new FormControl(new Date(), Validators.required),
      fornecedor: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      nf: new FormControl('', Validators.required),
      referencia: new FormControl('', Validators.required),
      item: new FormControl('', Validators.required),
      quantidade: new FormControl('', Validators.required),
      tempo: new FormControl('', Validators.required),
      valor: new FormControl('', Validators.required),
      entrega: new FormControl(new Date(), Validators.required),
      status: new FormControl('', Validators.required),
      producao: [ 0 ],
      observacao: new FormControl(''),
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    const formValue = this.registerForm.value;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.firestoreService.addOrdem(formValue);
    this.snackBar.open('Ordem de Produção Cadastrada', 'Ok', {
      duration: 2000
    });
    this.router.navigate(['listar-ordens-de-producao']);
  }
}
