import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Funcionario, Dependente, Falta } from '../interfaces/Funcionario';
import { OrdemDeProducao, ProducaoDiaria } from '../interfaces/Producao';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  // -------------------------- FUNCIONARIOS -------------------------

  funcionariosCol: AngularFirestoreCollection < Funcionario > ;
  funcionarios: Observable < Funcionario[] > ;

  funcionarioDoc: AngularFirestoreDocument < Funcionario > ;
  funcionario: Observable < Funcionario > ;

  dependentesCol: AngularFirestoreCollection < Dependente > ;
  dependentes: Observable < Dependente[] > ;

  dependenteDoc: AngularFirestoreDocument < Dependente > ;
  dependente: Observable < Dependente > ;

  faltasCol: AngularFirestoreCollection < Falta > ;
  faltas: Observable < Falta[] > ;

  faltaDoc: AngularFirestoreDocument < Falta > ;
  falta: Observable < Falta > ;

  // -------------------------- ORDENS DE PRODUÇÃO -------------------------

  ordensDeProducaoCol: AngularFirestoreCollection < OrdemDeProducao > ;
  ordensDeProducao: Observable < OrdemDeProducao[] > ;

  ordemDeProducaoDoc: AngularFirestoreDocument < OrdemDeProducao > ;
  ordemDeProducao: Observable < OrdemDeProducao > ;

  producoesDiariasCol: AngularFirestoreCollection < ProducaoDiaria > ;
  producoesDiarias: Observable < ProducaoDiaria[] > ;

  producaoDiariaDoc: AngularFirestoreDocument < ProducaoDiaria > ;
  producaoDiaria: Observable < ProducaoDiaria > ;

  constructor( private afs: AngularFirestore ) { }

// ---------------------------------- METODOS FUNCIONÁRIOS --------------------------------------

  getFuncionarios() {
    this.funcionariosCol = this.afs.collection('funcionarios', ref => ref.limit(15).orderBy('nome'));
    this.funcionarios = this.funcionariosCol
    .snapshotChanges()
      .map(changes =>  {
        return changes.map(a =>  {
          const data = a.payload.doc.data()as Funcionario;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.funcionarios;
  }

  getFuncionariosDashboard() {
    this.funcionariosCol = this.afs.collection('funcionarios', ref => ref.where('situacao', '==', 'Ativo').limit(10).orderBy('nome'));
    this.funcionarios = this.funcionariosCol
    .snapshotChanges()
      .map(changes =>  {
        return changes.map(a =>  {
          const data = a.payload.doc.data()as Funcionario;
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
      .map(changes =>  {
        return changes.map(a =>  {
          const data = a.payload.doc.data()as Funcionario;
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
      .map(changes =>  {
        return changes.map(a =>  {
          const data = a.payload.doc.data()as Funcionario;
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
    this.afs.collection < Funcionario > ('funcionarios').add(funcionario);
  }

  updateFuncionario( funcionario: Funcionario ) {
    this.funcionarioDoc.update(funcionario);
  }

// --- METODOS DEPENDENTES -- //

  getDependentes() {
    this.dependentesCol = this.funcionarioDoc.collection('dependentes');
    this.dependentes = this.dependentesCol
    .snapshotChanges()
      .map(changes =>  {
        return changes.map(a =>  {
          const data = a.payload.doc.data()as Dependente;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.dependentes;
  }

  addDependente(dependente: Dependente) {
    this.funcionarioDoc.collection < Dependente > ('dependentes').add(dependente);
  }

  deleteDependente(dependente: Dependente) {
    this.dependenteDoc = this.funcionarioDoc.collection < Dependente > ('dependentes').doc(`${dependente.id}`);
    this.dependenteDoc.delete();
  }

  // --- METODOS FALTAS ---

  getAllFaltas() {
    this.faltasCol = this.funcionarioDoc.collection('faltas');
    this.faltas = this.faltasCol
    .snapshotChanges()
      .map(changes =>  {
        return changes.map(a =>  {
          const data = a.payload.doc.data()as Falta;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.faltas;
  }

    getAtestados() {
    this.faltasCol = this.funcionarioDoc.collection('faltas', ref => ref.where('tipo', '==', 'Atestado'));
    this.faltas = this.faltasCol
    .snapshotChanges()
      .map(changes =>  {
        return changes.map(a =>  {
          const data = a.payload.doc.data()as Falta;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.faltas;
  }

    getFaltas() {
    this.faltasCol = this.funcionarioDoc.collection('faltas', ref => ref.where('tipo', '==', 'Falta'));
    this.faltas = this.faltasCol
    .snapshotChanges()
      .map(changes =>  {
        return changes.map(a =>  {
          const data = a.payload.doc.data()as Falta;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.faltas;
  }

  addFalta(falta: Falta) {
    this.funcionarioDoc.collection < Falta > ('faltas').add(falta);
  }

  deleteFalta(falta: Falta) {
    this.faltaDoc = this.funcionarioDoc.collection < Falta > ('faltas').doc(`${falta.id}`);
    this.faltaDoc.delete();
  }

  // ------------------------------------- METODOS ORDENS DE PRODUÇÃO ----------------------------

  getOrdens() {
    this.ordensDeProducaoCol = this.afs.collection('ordens' /*, ref => ref.where('situacao', '==', 'Inativo')*/);
    this.ordensDeProducao = this.ordensDeProducaoCol
    .snapshotChanges()
      .map(changes =>  {
        return changes.map(a =>  {
          const data = a.payload.doc.data()as OrdemDeProducao;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.ordensDeProducao;
  }

  getOrdensDashboard() {
    this.ordensDeProducaoCol = this.afs.collection('ordens', ref => ref.limit(5).orderBy('dataCadastro', 'desc'));
    this.ordensDeProducao = this.ordensDeProducaoCol
    .snapshotChanges()
      .map(changes =>  {
        return changes.map(a =>  {
          const data = a.payload.doc.data()as OrdemDeProducao;
          data.id = a.payload.doc.id;
          return data;
        });
      });
    return this.ordensDeProducao;
  }

  getOrdem(ordemId) {
    this.ordemDeProducaoDoc = this.afs.doc('/ordens/' + ordemId);
    this.ordemDeProducao = this.ordemDeProducaoDoc.valueChanges();
    return this.ordemDeProducao;
  }

  addOrdem( ordemDeProducao: OrdemDeProducao ) {
    this.afs.collection < OrdemDeProducao > ('ordens').add(ordemDeProducao);
  }

  updateOrdem( ordemDeProducao: OrdemDeProducao ) {
    this.ordemDeProducaoDoc.update(ordemDeProducao);
  }

  deleteOrdem() {
    this.ordemDeProducaoDoc.delete();
  }

    // ------------------------------------- METODOS PRODUÇÕES DIARIAS ----------------------------

    getProducoesDiarias() {
      this.producoesDiariasCol = this.ordemDeProducaoDoc.collection('producoes-diarias', ref => ref.orderBy('dataCadastro', 'desc'));
      this.producoesDiarias = this.producoesDiariasCol
      .snapshotChanges()
        .map(changes =>  {
          return changes.map(a =>  {
            const data = a.payload.doc.data() as ProducaoDiaria;
            data.id = a.payload.doc.id;
            return data;
          });
        });
      return this.producoesDiarias;
    }

    getProducaoDiaria(producaoDiariaId) {
      this.producaoDiariaDoc = this.ordemDeProducaoDoc.collection('producoes-diarias').doc('/producoes-diarias/' + producaoDiariaId);
      this.producaoDiaria = this.producaoDiariaDoc.valueChanges();
      return this.producaoDiaria;
    }

    addProducaoDiaria( producaoDiaria: ProducaoDiaria, ordemDeProducao: OrdemDeProducao ) {
      this.ordemDeProducaoDoc.collection < ProducaoDiaria > ('producoes-diarias').add(producaoDiaria);
      this.updateOrdem(ordemDeProducao);
    }

    deleteProducaoDiaria(producaoDiaria: ProducaoDiaria, ordemDeProducao) {
      this.producaoDiariaDoc = this.ordemDeProducaoDoc.collection < ProducaoDiaria > ('producoes-diarias').doc(`${producaoDiaria.id}`);
      this.producaoDiariaDoc.delete();
      this.ordemDeProducaoDoc.update(ordemDeProducao);
    }
}
