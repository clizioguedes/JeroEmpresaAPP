import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdemDeProducao, ProducaoDiaria } from '../../interfaces/Producao';

@Component({
  selector: 'app-ordem-de-producao',
  templateUrl: './ordem-de-producao.component.html',
  styleUrls: ['./ordem-de-producao.component.css']
})
export class OrdemDeProducaoComponent implements OnInit {

  idOrdem: any;
  ordemDeProducao: OrdemDeProducao;

  // array de producoes para listagem de todas as producoes diarias
  producoes: ProducaoDiaria[];
  // minutos trabalhados pelos funcionarios na semana (na sexta são 8h e nos outros dias da semana 9h)
  minutosPorFuncionario = null;
  // variavel responsavel por armazenar o percentual de eficiencia completo sem formatacao
  eficiencia;
  // variavel responsavel por armazenar o numero de pecas produzidas + o numero de pecas da producao diaria a atual
  producaoAtual = 0;
  // Variavei Responsavel por definir o dia, pois na sexta feira os funcionarios trabalham 8 hrs e de segunda a quinta 9hrs.
  diaAtual = new Date().getDay();

  // interface de producao diaria
  producaoDiaria: ProducaoDiaria = {
    id: null, // ID do documento no firebase
    dataCadastro: null, // Data do Registro dessa PD
    quantidadePessoal: null, // Quantidade de funcionarios Envolvidos nessa PD
    producaoDiaria: null, // Total de Peças produzidas nessa PD
    minutosPessoal: 0, // Total de Minutos disponivel para a PD
    minutosProducao: 0, // Peças Produzidas * Tempo Padrão
    eficiencia: 0, // (minutosTrabalhados / minutosPessoal);
    faturaDiaria: 0, // producaoDiaria * valorPeca
    faturaMensal: 0
  };

  constructor( private firestoreService: FirestoreService, private router: Router, private route: ActivatedRoute) {
    this.idOrdem = this.route.snapshot.params['id'];

    this.firestoreService.getOrdem(this.idOrdem).subscribe(ordemDeProducao => {
      this.ordemDeProducao = ordemDeProducao;
    });
        // Listagem de Producoes diarias
        this.firestoreService.getProducoesDiarias().subscribe( (producoes) => {
          this.producoes = producoes;
        });
    // COMPARANDO PARA SABER SE O DIA QUE ESTA SENDO CADASTRADO É SEXTA
    // PARA AS HORAS DE TRABALHO DIMINUAM PARA 8H == 480MIN
    if (this.diaAtual === 5) {
      this.minutosPorFuncionario = 480;
    } else {
      this.minutosPorFuncionario = 540;
    }
  }

  ngOnInit() {
  }

  deleteOrdem() {
    // Deletar Ordem
    this.firestoreService.deleteOrdem();
    // Rota
    this.router.navigate(['listar-ordens-de-producao']);
  }

  limparCampos() {
    this.producaoDiaria.dataCadastro = null;
    this.producaoDiaria.eficiencia = null;
    this.producaoDiaria.faturaDiaria = null;
    this.producaoDiaria.minutosPessoal = null;
    this.producaoDiaria.minutosProducao = null;
    this.producaoDiaria.producaoDiaria = 0;
    this.producaoDiaria.quantidadePessoal = 0;
  }

  getIdOp() {
    this.producaoDiaria.id = this.route.snapshot.params['id'];
  }

  addProducaoDiaria() {
    // DATA DO CADASTRO DA PRODUCAO DIARIA
    this.producaoDiaria.dataCadastro = new Date().toLocaleString();
    // TOTAL DE MINUTOS DISPONIVEIS POR CADA FUNCIONARIO PARA A PRODUCAO
    this.producaoDiaria.minutosPessoal = this.producaoDiaria.quantidadePessoal * this.minutosPorFuncionario;
    // MINUTOS DE PRODUCAO
    this.producaoDiaria.minutosProducao = this.ordemDeProducao.tempo * this.producaoDiaria.producaoDiaria;
    // EFICIENCIA
    this.eficiencia = (this.producaoDiaria.minutosProducao / this.producaoDiaria.minutosPessoal) * 100;
    // VALOR DA EFICIENCIA FORMATADO
    this.producaoDiaria.eficiencia = parseFloat(this.eficiencia.toFixed(2));
    // FATURA DIARIA DA PRODUCAO
    this.producaoDiaria.faturaDiaria = this.ordemDeProducao.valor * this.producaoDiaria.producaoDiaria;
    this.producaoDiaria.faturaDiaria = parseFloat(this.producaoDiaria.faturaDiaria.toFixed(4));
    // Atualizar valores da produção geral
    this.ordemDeProducao.producao = this.ordemDeProducao.producao + this.producaoDiaria.producaoDiaria;
    this.firestoreService.addProducaoDiaria( this.producaoDiaria, this.ordemDeProducao );
    this.limparCampos();
  }

  deleteProducaoDiaria(event, producaoDiaria: ProducaoDiaria, ordemDeProducao) {
    this.ordemDeProducao.producao = this.ordemDeProducao.producao - producaoDiaria.producaoDiaria;
    this.firestoreService.deleteProducaoDiaria(producaoDiaria, ordemDeProducao);
    this.ordemDeProducao.producao = this.ordemDeProducao.producao - producaoDiaria.producaoDiaria;
  }
}
