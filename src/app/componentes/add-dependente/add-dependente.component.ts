import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { Dependente } from '../../interfaces/Funcionario';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-dependente',
  templateUrl: './add-dependente.component.html',
  styleUrls: ['./add-dependente.component.css']
})
export class AddDependenteComponent implements OnInit {

  dependente: Dependente = {
    nome: null,
    nascimento: null,
    cpf: null,
    tipo: null,
    dataRegistro: null
  };

  tiposDep = [
    { value: 'Cônjuge'},
    { value: 'Companheiro'},
    { value: 'Filho(a)'},
    { value: 'Irmão/neto/bisneto'},
    { value: 'Pais, avós e bisavós'},
    { value: 'Ex-cônjuge'},
    { value: 'Agregado/Outros'}
  ];

  constructor( private firestoreService: FirestoreService, public snackBar: MatSnackBar ) { }

  ngOnInit() {
  }

  addDependente() {
    if ( this.dependente.nome != null && this.dependente.nascimento != null && this.dependente.tipo != null ) {
      this.dependente.dataRegistro = new Date().toLocaleString();
      this.dependente.nascimento = new Date(this.dependente.nascimento).toLocaleDateString();
      this.firestoreService.addDependente(this.dependente);
      // NULL
      this.dependente.nome = null;
      this.dependente.nascimento = null;
      this.dependente.tipo = null;
      this.dependente.cpf = null;
      console.log('Dependente Cadastrado');
      // SnackBar
      this.snackBar.open('Dependente Cadastrado', 'OK', {
        duration: 2000,
      });

    } else {
      alert('Ainda há campos obrigatórios não preenchidos!');
    }
  }
}
