import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// APP
import { AppComponent } from './app.component';
// Serviços
import { FirestoreService } from './serviços/firestore.service';
// Angular Material
import {
  MatTableModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
  MatFormFieldModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatMenuModule,
  MatListModule, MatDividerModule, MatRadioModule, MatSelectModule, MatSnackBarModule,
  MatProgressBarModule, MatTabsModule, MatCardModule, MatGridListModule, MatCheckboxModule, MatPaginatorModule, MatDialogModule
} from '@angular/material';
// Modulos Variados
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxMaskModule } from 'ngx-mask';
import { LayoutModule } from '@angular/cdk/layout';
// Angularfire2
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
// Componentes do Módulo de RH
import { ListarFuncionariosComponent } from './componentes/listar-funcionarios/listar-funcionarios.component';
import { AddFuncionarioComponent } from './componentes/add-funcionario/add-funcionario.component';
import { FuncionarioComponent } from './componentes/funcionario/funcionario.component';
import { EditarFuncionarioComponent } from './componentes/editar-funcionario/editar-funcionario.component';
import { ListarDependentesComponent } from './componentes/listar-dependentes/listar-dependentes.component';
import { AddDependenteComponent } from './componentes/add-dependente/add-dependente.component';
import { ListarFaltasComponent } from './componentes/listar-faltas/listar-faltas.component';
import { AddFaltaComponent } from './componentes/add-falta/add-falta.component';
// Componentes do Módulo de Ordem de Produção
import { EditarOrdemDeProducaoComponent } from './componentes/editar-ordem-de-producao/editar-ordem-de-producao.component';
import { ListarOrdensDeProducaoComponent } from './componentes/listar-ordens-de-producao/listar-ordens-de-producao.component';
import { AddOrdemDeProducaoComponent } from './componentes/add-ordem-de-producao/add-ordem-de-producao.component';
import { OrdemDeProducaoComponent } from './componentes/ordem-de-producao/ordem-de-producao.component';
// Login
import { LoginComponent } from './login/login.component';
import { AfService } from './serviços/af.service';
import { AuthGuardService } from './serviços/auth-guard.service';
// Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
// Produção Diaria
import { ListarProducoesDiariasComponent } from './componentes/listar-producoes-diarias/listar-producoes-diarias.component';
import { EditarProducaoDiariaComponent } from './componentes/editar-producao-diaria/editar-producao-diaria.component';
import { AddProducaoDiariaComponent } from './componentes/add-producao-diaria/add-producao-diaria.component';
import { ProducaoDiariaComponent } from './componentes/producao-diaria/producao-diaria.component';
import { DashFuncionarioComponent } from './componentes/dash-funcionario/dash-funcionario.component';
import { DashProducaoComponent } from './componentes/dash-producao/dash-producao.component';

// Rotas
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,   },
  { path: 'dashboard-producao', component: DashProducaoComponent,   },
  { path: 'dashboard-funcionario', component: DashFuncionarioComponent,   },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // Ordens de Produção
  { path: 'ordem-de-producao/:id', component: OrdemDeProducaoComponent,   },
  { path: 'add-ordem-de-producao', component: AddOrdemDeProducaoComponent,   },
  { path: 'listar-ordens-de-producao', component: ListarOrdensDeProducaoComponent,   },
  { path: 'editar-ordem-de-producao/:id', component: EditarOrdemDeProducaoComponent,   },
  // Funcionários
  { path: 'funcionario/:id', component: FuncionarioComponent,   },
  { path: 'add-funcionario', component: AddFuncionarioComponent,   },
  { path: 'listar-funcionarios', component: ListarFuncionariosComponent,   },
  { path: 'editar-funcionario/:id', component: EditarFuncionarioComponent,   },
  // Produção Diaria
  { path: 'producao-diaria/:id', component: ProducaoDiariaComponent,   },
  { path: 'add-producao-diaria', component: AddProducaoDiariaComponent,   },
  { path: 'listar-producoes-diarias', component: ListarProducoesDiariasComponent,   },
  { path: 'editar-producao-diaria/:id', component: EditarProducaoDiariaComponent,   }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    // Funcionários
    ListarFuncionariosComponent,
    AddFuncionarioComponent,
    FuncionarioComponent,
    EditarFuncionarioComponent,
    ListarDependentesComponent,
    AddDependenteComponent,
    ListarFaltasComponent,
    AddFaltaComponent,
    // Ordens de Produção
    ListarOrdensDeProducaoComponent,
    AddOrdemDeProducaoComponent,
    OrdemDeProducaoComponent,
    EditarOrdemDeProducaoComponent,
    LoginComponent,
    ProducaoDiariaComponent,
    ListarProducoesDiariasComponent,
    EditarProducaoDiariaComponent,
    AddProducaoDiariaComponent,
    DashFuncionarioComponent,
    DashProducaoComponent,
  ],

  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxDatatableModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    MatTableModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
    MatFormFieldModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatMenuModule, MatListModule,
    MatDividerModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatProgressBarModule,
    MatTabsModule, MatCardModule, MatGridListModule, LayoutModule, MatCheckboxModule, MatPaginatorModule, MatDialogModule
  ],

  providers: [FirestoreService, { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, AfService, AuthGuardService],
  entryComponents: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(@Optional() @SkipSelf() parentModule: AppModule, private afs: AngularFirestore) {
    afs.firestore.settings({ timestampsInSnapshots: true });
  }
}
