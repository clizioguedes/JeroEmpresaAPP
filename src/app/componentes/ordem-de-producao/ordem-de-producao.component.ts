import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdemDeProducao, HistoricoDeProducao } from '../../interfaces/Producao';

@Component({
  selector: 'app-ordem-de-producao',
  templateUrl: './ordem-de-producao.component.html',
  styleUrls: ['./ordem-de-producao.component.css']
})
export class OrdemDeProducaoComponent implements OnInit {

  id: any;
  ordemDeProducao: OrdemDeProducao;

  // minutos trabalhados pelos funcionarios na semana (na sexta são 8h e nos outros dias da semana 9h)
  minutosPorFuncionario = null;
  // Variavei Responsavel por definir o dia, pois na sexta feira os funcionarios trabalham 8 hrs e de segunda a quinta 9hrs.
  diaAtual = new Date().getDay();

  // interface de producao diaria
  historicoProducao: HistoricoDeProducao = {
    idHistoricoDeProducao: null, // ID do documento no firebase
    idOrdemDeProducao: null,
    dataCadastro: null,
    dataProducao: null,
    producao: null,
    faturaDiaria: null
  };

  totalFatura: any;
  totalProducao: any;

  // Variavel que recebe a lista dos historicos
  historicos: HistoricoDeProducao[];

  constructor(private firestoreService: FirestoreService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.firestoreService.getOrdem(this.id).subscribe(ordemDeProducao => {
      this.ordemDeProducao = ordemDeProducao;
      if (this.ordemDeProducao.id == null) {
        this.firestoreService.addIdOrdemDeProducao(this.id);
      }
    });

    // Listagem do Histórico
    this.firestoreService.getHistoricosDeProducao().subscribe((historicos) => {
      this.historicos = historicos;

      this.totalFatura = historicos.reduce(function (a, b) {
        return a + b['faturaDiaria'];
      }, 0);

      this.totalProducao = historicos.reduce(function (a, b) {
        return a + b['producao'];
      }, 0);
    });
  }

  deleteOrdem() {
    // Deletar Ordem
    this.firestoreService.deleteOrdem();
    // Rota
    this.router.navigate(['listar-ordens-de-producao']);
  }

  addHistoricoDeProducao() {
    this.historicoProducao.idOrdemDeProducao = this.id;
    // DATA DO CADASTRO DA PRODUCAO DIARIA
    this.historicoProducao.dataCadastro = new Date().toLocaleString();
    this.historicoProducao.dataProducao = this.historicoProducao.dataProducao.toLocaleDateString();
    // Atualizar valores da produção geral
    this.ordemDeProducao.producao = this.ordemDeProducao.producao + this.historicoProducao.producao;
    this.historicoProducao.faturaDiaria = this.ordemDeProducao.valor * this.historicoProducao.producao;
    this.firestoreService.addHistoricoDeProducao(this.historicoProducao, this.ordemDeProducao);
    this.historicoProducao.producao = null;
  }

  deleteHistorico(event, historico: HistoricoDeProducao) {
    this.ordemDeProducao.producao = this.ordemDeProducao.producao - this.historicoProducao.producao;
    this.firestoreService.updateOrdem(this.ordemDeProducao);
    this.firestoreService.deleteHistoricoDeProducao(historico);
  }
}
