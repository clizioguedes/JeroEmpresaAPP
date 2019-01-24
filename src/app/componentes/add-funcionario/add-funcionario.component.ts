import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../../serviços/firestore.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-funcionario',
  templateUrl: './add-funcionario.component.html',
  styleUrls: ['./add-funcionario.component.css']
})
export class AddFuncionarioComponent implements OnInit {

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
      dataCadastro: [new Date(), Validators.required],
      nome: ['', Validators.required],
      nascimento: ['', Validators.required],
      nomePai: ['', Validators.required],
      nomeMae: ['', Validators.required],
      sexo: [''],
      estadoCivil: [''],
      naturalidade: ['', Validators.required],
      identidade: ['', Validators.required],
      expedicao: ['', Validators.required],
      orgaoEmissor: ['', Validators.required],
      cpf: ['', Validators.required],
      tituloEleitor: ['', Validators.required],
      zonaEleitoral: ['', Validators.required],
      seccaoEleitoral: ['', Validators.required],
      nis: [''],
      sus: [''],
      endereco: [''],
      numero: [''],
      bairro: [''],
      cidade: [''],
      celular: [''],
      email: ['', Validators.email],
      matricula: ['', Validators.required],
      admissao: ['', Validators.required],
      demissao: [''],
      setor: [''],
      cargo: [''],
      cbo: [''],
      banco: [''],
      agencia: [''],
      conta: [''],
      operacao: [''],
      situacao: ['', Validators.required],
      observacao: ['']
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
    await this.firestoreService.addFuncionario(formValue);
    this.snackBar.open('Funcionario Cadastrado', 'Ok', {
      duration: 2000
    });
    console.log('OK');
    this.router.navigate(['listar-funcionarios']);
  }
}
