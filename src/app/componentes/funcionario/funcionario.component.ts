import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from '../../interfaces/funcionario';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  id: any;
  funcionario: Funcionario;

  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.firestoreService.getFuncionario(this.id).subscribe(funcionario => {
      this.funcionario = funcionario;
    });
  }

  ngOnInit() { }

}