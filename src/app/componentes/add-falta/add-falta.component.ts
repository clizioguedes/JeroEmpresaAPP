import { Component, OnInit } from '@angular/core';
import { Falta } from '../../interfaces/Funcionario';
import { FirestoreService } from '../../serviços/firestore.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-falta',
  templateUrl: './add-falta.component.html',
  styleUrls: ['./add-falta.component.css']
})
export class AddFaltaComponent implements OnInit {

  falta: Falta = {
    tipo: null,
    dataRegistro: null,
    dataFalta: null,
    periodo: null,
    observacao: null
  };

  tipos = [
    'Atestado',
    'Falta',
  ];

  periodos = [
    'Manhã',
    'Tarde',
    'Dia todo',
  ];

  constructor(
    private firestoreService: FirestoreService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  addFalta() {
    if (this.falta.dataFalta != null && this.falta.observacao != null) {
      this.falta.dataRegistro = new Date().toLocaleString();
      this.firestoreService.addFalta(this.falta);
      console.log('Ausência Cadastrada');
      console.log('Data de Registro da Ausência foi: ' + this.falta.dataRegistro);
      this.falta.tipo = null;
      this.falta.dataFalta = null;
      this.falta.observacao = null;
      this.falta.periodo = null;
      // SnackBar
      this.snackBar.open('Ausência Cadastrada', 'OK', {
        duration: 2000,
      });
    } else {
      alert('Há campos obrigatórios não preenchidos!');
    }
  }
}
