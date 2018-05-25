import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Funcionario } from '../../interfaces/funcionario';
import { getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  id: any;
  funcionario: any;

  constructor(
    private funcionarioService: FirestoreService,
    private router: Router,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.funcionarioService.getFuncionario(this.id).subscribe(funcionario => {
      this.funcionario = funcionario;
    });
  }

  ngOnInit() { }

}