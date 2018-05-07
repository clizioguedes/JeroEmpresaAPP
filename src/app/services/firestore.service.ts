import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument }from 'angularfire2/firestore'; 
import { Observable }from 'rxjs/Observable'; 
import { Funcionario, Dependente, Falta }from '../interfaces/funcionario'; 
import { ActivatedRoute }from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  funcionariosCol:AngularFirestoreCollection < Funcionario > ; 
  funcionarios:Observable < Funcionario[] > ; 

  funcionarioDoc:AngularFirestoreDocument < Funcionario > ; 
  funcionario:Observable < Funcionario > ; 

  dependentesCol:AngularFirestoreCollection < Dependente > ; 
  dependentes:Observable < Dependente[] > ; 

  dependenteDoc:AngularFirestoreDocument < Dependente > ; 
  dependente:Observable < Dependente > ; 

  faltasCol:AngularFirestoreCollection < Falta > ; 
  faltas:Observable < Falta[] > ; 

  faltaDoc:AngularFirestoreDocument < Falta > ; 
  falta:Observable < Falta > ; 

  constructor( private afs:AngularFirestore ) { }

  
// --- FUNCIONÁRIOS ---

  getFuncionarios() {
    this.funcionariosCol = this.afs.collection('funcionarios'); 
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

  addFuncionario(funcionario:Funcionario) {
    this.afs.collection < Funcionario > ('funcionarios').add(funcionario); 
  }

// --- DEPENDENTES -- // 

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

  addDependente(dependente:Dependente) {
    this.funcionarioDoc.collection < Dependente > ('dependentes').add(dependente); 
  }

  deleteDependente(dependente:Dependente) {
    this.dependenteDoc = this.funcionarioDoc.collection < Dependente > ('dependentes').doc(`${dependente.id}`); 
    this.dependenteDoc.delete(); 
  }

  // --- FALTAS ---

  getFaltas() {
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

  addFalta(falta:Falta) {
    this.funcionarioDoc.collection < Falta > ('faltas').add(falta); 
  }

  deleteFalta(falta:Falta) {
    this.faltaDoc = this.funcionarioDoc.collection < Falta > ('faltas').doc(`${falta.id}`); 
    this.faltaDoc.delete(); 
  }
}
