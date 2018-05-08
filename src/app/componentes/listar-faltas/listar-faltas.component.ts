import { Component, OnInit } from '@angular/core';
import { Falta } from '../../interfaces/Funcionario';
import { FirestoreService } from '../../services/firestore.service';
import { MatSnackBar } from '@angular/material';
import { FuncionarioComponent } from '../funcionario/funcionario.component';

@Component({
  selector: 'app-listar-faltas',
  templateUrl: './listar-faltas.component.html',
  styleUrls: ['./listar-faltas.component.css']
})
export class ListarFaltasComponent implements OnInit {

  faltas: Falta[];

  constructor(
    private firestoreService: FirestoreService,
    public snackBar: MatSnackBar,) { }

  ngOnInit() {
    this.firestoreService.getFaltas().subscribe( faltas => {
      this.faltas = faltas;
    });
  }

  deleteFalta(event, falta: Falta){
    this.firestoreService.deleteFalta(falta);
    console.log('Falta Deletada');
  }
}
