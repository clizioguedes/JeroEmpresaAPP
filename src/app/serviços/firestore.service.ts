import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { Funcionario, Dependente, Falta } from '../interfaces/Funcionario';
import { OrdemDeProducao, ProducaoDiaria, HistoricoDeProducao } from '../interfaces/Producao';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  count: any;

  // FUNCIONARIOS
  funcionariosCol: AngularFirestoreCollection<Funcionario>;
  funcionarios: Observable<Funcionario[]>;

  funcionarioDoc: AngularFirestoreDocument<Funcionario>;
  funcionario: Observable<Funcionario>;

  dependentesCol: AngularFirestoreCollection<Dependente>;
  dependentes: Observable<Dependente[]>;

  dependenteDoc: AngularFirestoreDocument<Dependente>;
  dependente: Observable<Dependente>;

  faltasCol: AngularFirestoreCollection<Falta>;
  faltas: Observable<Falta[]>;

  faltaDoc: AngularFirestoreDocument<Falta>;
  falta: Observable<Falta>;

  // ORDENS DE PRODUÇÃO

  ordensDeProducaoCol: AngularFirestoreCollection<OrdemDeProducao>;
  ordensDeProducao: Observable<OrdemDeProducao[]>;

  ordemDeProducaoDoc: AngularFirestoreDocument<OrdemDeProducao>;
  ordemDeProducao: Observable<OrdemDeProducao>;

  // HISTÓRICO DE PRODUÇÃO

  historicosDeProducaoCol: AngularFirestoreCollection<HistoricoDeProducao>;
  historicosDeProducao: Observable<HistoricoDeProducao[]>;

  historicoDeProducaoDoc: AngularFirestoreDocument<HistoricoDeProducao>;
  historicoDeProducao: Observable<HistoricoDeProducao>;

  // PRODUÇÃO DIARIA

  producoesDiariasCol: AngularFirestoreCollection<ProducaoDiaria>;
  producoesDiarias: Observable<ProducaoDiaria[]>;

  producaoDiariaDoc: AngularFirestoreDocument<ProducaoDiaria>;
  producaoDiaria: Observable<ProducaoDiaria>;

  constructor(public afs: AngularFirestore) { }

  // METODOS PARA FUNCIONÁRIOS

  getFuncionarios() {
    this.funcionariosCol = this.afs.collection('funcionarios');
    this.funcionarios = this.funcionariosCol
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Funcionario;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.funcionarios;
  }

  getFuncionariosDashboard() {
    this.funcionariosCol = this.afs.collection('funcionarios', ref => ref.where('situacao', '==', 'Ativo').limit(15).orderBy('nome'));
    this.funcionarios = this.funcionariosCol
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Funcionario;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.funcionarios;
  }

  getFuncionariosInativos() {
    this.funcionariosCol = this.afs.collection('funcionarios', ref => ref.where('situacao', '==', 'Inativo'));
    this.funcionarios = this.funcionariosCol
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Funcionario;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.funcionarios;
  }

  getFuncionariosAtivos() {
    this.funcionariosCol = this.afs.collection('funcionarios', ref => ref.where('situacao', '==', 'Ativo'));
    this.funcionarios = this.funcionariosCol
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Funcionario;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.funcionarios;
  }

  getFuncionario(funcionarioId) {
    this.funcionarioDoc = this.afs.doc('/funcionarios/' + funcionarioId);
    this.funcionario = this.funcionarioDoc.valueChanges();
    return this.funcionario;
  }

  addFuncionario(funcionario: Funcionario) {
    this.afs.collection<Funcionario>('funcionarios').add(funcionario);
  }

  updateFuncionario(funcionario: Funcionario) {
    this.funcionarioDoc.update(funcionario);
  }

  addIdFuncionario(id: any) {
    this.funcionarioDoc.update({ id: id });
    console.log('ID foi Adicionado com Sucesso');
  }

  // METODOS DEPENDENTES

  getDependentes() {
    this.dependentesCol = this.funcionarioDoc.collection('dependentes');
    this.dependentes = this.dependentesCol
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Dependente;
          data.idDependente = a.payload.doc.id;
          return data;
        });
      });
    return this.dependentes;
  }

  addDependente(dependente: Dependente) {
    this.funcionarioDoc.collection<Dependente>('dependentes').add(dependente);
  }

  deleteDependente(dependente: Dependente) {
    this.dependenteDoc = this.funcionarioDoc.collection<Dependente>('dependentes').doc(`${dependente.idDependente}`);
    this.dependenteDoc.delete();
  }

  // METODOS PARA FALTAS

  getAllFaltas() {
    this.faltasCol = this.funcionarioDoc.collection('faltas');
    this.faltas = this.faltasCol
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Falta;
          data.idFalta = a.payload.doc.id;
          return data;
        });
      });
    return this.faltas;
  }

  getAtestados() {
    this.faltasCol = this.funcionarioDoc.collection('faltas', ref => ref.where('tipo', '==', 'Atestado'));
    this.faltas = this.faltasCol
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Falta;
          data.idFalta = a.payload.doc.id;
          return data;
        });
      });
    return this.faltas;
  }

  getFaltas() {
    this.faltasCol = this.funcionarioDoc.collection('faltas', ref => ref.where('tipo', '==', 'Falta'));
    this.faltas = this.faltasCol
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Falta;
          data.idFalta = a.payload.doc.id;
          return data;
        });
      });
    return this.faltas;
  }

  addFalta(falta: Falta) {
    this.funcionarioDoc.collection<Falta>('faltas').add(falta);
  }

  deleteFalta(falta: Falta) {
    this.faltaDoc = this.funcionarioDoc.collection<Falta>('faltas').doc(`${falta.idFalta}`);
    this.faltaDoc.delete();
  }

  // METODOS PARA ORDENS DE PRODUÇÃO

  getOrdens() {
    this.ordensDeProducaoCol = this.afs.collection('ordens' /*, ref => ref.where('situacao', '==', 'Inativo')*/);
    this.ordensDeProducao = this.ordensDeProducaoCol
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as OrdemDeProducao;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.ordensDeProducao;
  }

  getOrdensEmProcesso() {
    this.ordensDeProducaoCol = this.afs.collection('ordens', ref => ref.where('status', '==', 'Processo'));
    this.ordensDeProducao = this.ordensDeProducaoCol
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as OrdemDeProducao;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.ordensDeProducao;
  }

  getOrdensDashboard() {
    this.ordensDeProducaoCol = this.afs.collection('ordens', ref => ref.limit(5).orderBy('dataCadastro', 'asc'));
    this.ordensDeProducao = this.ordensDeProducaoCol
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as OrdemDeProducao;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.ordensDeProducao;
  }

  getOrdem(ordemId: string) {
    this.ordemDeProducaoDoc = this.afs.doc('/ordens/' + ordemId);
    this.ordemDeProducao = this.ordemDeProducaoDoc.valueChanges();
    return this.ordemDeProducao;
  }

  addOrdem(ordemDeProducao: OrdemDeProducao) {
    this.afs.collection<OrdemDeProducao>('ordens').add(ordemDeProducao);
  }

  updateOrdem(ordemDeProducao: OrdemDeProducao) {
    this.ordemDeProducaoDoc.update(ordemDeProducao);
  }

  deleteOrdem() {
    this.ordemDeProducaoDoc.delete();
  }

  addIdOrdemDeProducao(id: any) {
    this.ordemDeProducaoDoc.update({ id: id });
    console.log('ID foi Adicionado com Sucesso');
  }

  // METODOS PARA PRODUÇÕES DIARIAS

  getProducoesDiarias() {
    this.producoesDiariasCol = this.afs.collection('producoes-diarias', ref => ref.orderBy('data', 'desc').limit(15));
    this.producoesDiarias = this.producoesDiariasCol
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as ProducaoDiaria;
          data.idProducaoDiaria = a.payload.doc.id;
          return data;
        });
      });
    return this.producoesDiarias;
  }

  getProducoesDiariasDashboard() {
    this.producoesDiariasCol = this.afs.collection('producoes-diarias', ref => ref.orderBy('data', 'desc').limit(15));
    this.producoesDiarias = this.producoesDiariasCol
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as ProducaoDiaria;
          data.idProducaoDiaria = a.payload.doc.id;
          return data;
        });
      });
    return this.producoesDiarias;
  }

  getProducaoDiaria(producaoDiariaId) {
    this.producaoDiariaDoc = this.afs.doc('/producoes-diarias/' + producaoDiariaId);
    this.producaoDiaria = this.producaoDiariaDoc.valueChanges();
    return this.producaoDiaria;
  }

  addProducaoDiaria(producaoDiaria: ProducaoDiaria) {
    this.afs.collection<ProducaoDiaria>('producoes-diarias').add(producaoDiaria);
  }

  deleteProducaoDiaria() {
    this.producaoDiariaDoc.delete();
  }

  // METODOS PARA PRODUÇÕES DIARIAS
  getHistoricosDeProducao() {
    this.historicosDeProducaoCol = this.ordemDeProducaoDoc.collection('historicos-de-producao', ref => ref.orderBy('dataProducao'));
    this.historicosDeProducao = this.historicosDeProducaoCol
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as HistoricoDeProducao;
          data.idHistoricoDeProducao = a.payload.doc.id;
          return data;
        });
      });
    return this.historicosDeProducao;
  }

  getHistoricoDeProducao(historicoDeProducaoId) {
    this.historicoDeProducaoDoc = this.ordemDeProducaoDoc.collection('historicos-de-producao')
      .doc('/historicos-de-producao/' + historicoDeProducaoId);
    this.historicoDeProducao = this.historicoDeProducaoDoc.valueChanges();
    return this.historicoDeProducao;
  }

  addHistoricoDeProducao(historicoDeProducao: HistoricoDeProducao, ordemDeProducao: OrdemDeProducao) {
    this.ordemDeProducaoDoc.collection<ProducaoDiaria>('historicos-de-producao').add(historicoDeProducao);
    this.updateOrdem(ordemDeProducao);
  }

  deleteHistoricoDeProducao(historicoDeProducao: HistoricoDeProducao) {
    this.historicoDeProducaoDoc = this.ordemDeProducaoDoc.collection<ProducaoDiaria>('historicos-de-producao')
      .doc(`${historicoDeProducao.idHistoricoDeProducao}`);
    this.historicoDeProducaoDoc.delete();
  }
}
