import { Component, OnInit } from '@angular/core';
import { Falta } from '../../interfaces/funcionario';
import { FirestoreService } from '../../serviços/firestore.service';
import { MatSnackBar } from '@angular/material';
import { FuncionarioComponent } from '../funcionario/funcionario.component';

@Component({
  selector: 'app-listar-faltas',
  templateUrl: './listar-faltas.component.html',
  styleUrls: ['./listar-faltas.component.css']
})
export class ListarFaltasComponent implements OnInit {

  faltas: Falta[];

  allFaltas;
  atestados;
  ausencias;

  constructor(
    private firestoreService: FirestoreService,
    public snackBar: MatSnackBar,) { }

  ngOnInit() {
    this.allFaltas = true;
    this.atestados = false;
    this.ausencias = false;
    this.firestoreService.getAllFaltas().subscribe( faltas => {
      this.faltas = faltas;
    });
  }

  getAtestados() {
    this.allFaltas = false;
    this.atestados = true;
    this.ausencias = false;
    this.firestoreService.getAtestados().subscribe( faltas => {
      this.faltas = faltas;
    });
  }
    getFaltas() {
    this.allFaltas = false;
    this.atestados = false;
    this.ausencias = true;
    this.firestoreService.getFaltas().subscribe( faltas => {
      this.faltas = faltas;
    });
  }

  deleteFalta(event, falta: Falta){
    this.firestoreService.deleteFalta(falta);
    console.log('Falta Deletada');
  }
}
