import { Component, OnInit } from '@angular/core';
import { ProducaoDiaria } from 'src/app/interfaces/Producao';

@Component({
  selector: 'app-editar-producao-diaria',
  templateUrl: './editar-producao-diaria.component.html',
  styleUrls: ['./editar-producao-diaria.component.css']
})
export class EditarProducaoDiariaComponent implements OnInit {

  id;

  producaoDiaria: ProducaoDiaria = {
    idProducaoDiaria: null,
    dataProducaoDiaria: null,
    quantidadeDePessoal: null, // Quantidade de funcionarios Envolvidos nessa PD
    producaoDiaria: null, // Total de Peças produzidas nessa PD
    minutosDiarios: null, // Quantidade de minutos que cada funcionario tem no dia 540 padrão e 480 nas sextas feiras
    minutosPessoal: null, // Total de Minutos disponivel para a PD - MP = MD
    minutosProducao: null, // Peças Produzidas * Tempo Padrão
    eficiencia: null, // minutosTrabalhados / minutosPessoal;
    ultimaProducao: null,
    faturaDiaria: null,
    dataCadastro: null,
  };

  constructor() { }

  ngOnInit() {
  }
}
