import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// APP
import { AppComponent } from './app.component';
// Serviços
import { FirestoreService } from './serviços/firestore.service';
// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
// Modulos Variados
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxMaskModule } from 'ngx-mask';
import { LayoutModule } from '@angular/cdk/layout';
// Angularfire
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
// Produção Diaria
import { ListarProducoesDiariasComponent } from './componentes/listar-producoes-diarias/listar-producoes-diarias.component';
import { AddProducaoDiariaComponent } from './componentes/add-producao-diaria/add-producao-diaria.component';
import { ProducaoDiariaComponent } from './componentes/producao-diaria/producao-diaria.component';

import { DashFuncionarioComponent } from './componentes/dash-funcionario/dash-funcionario.component';
import { DashProducaoComponent } from './componentes/dash-producao/dash-producao.component';
import { NavbarProducaoComponent } from './componentes/navbar-producao/navbar-producao.component';
import { NavbarFuncionarioComponent } from './componentes/navbar-funcionario/navbar-funcionario.component';
import { IndexComponent } from './componentes/index/index.component';
import { DialogComponent } from './componentes/dialog/dialog.component';

// Rotas
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'index', component: IndexComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard-producao', component: DashProducaoComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard-funcionario', component: DashFuncionarioComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  // Ordens de Produção
  { path: 'ordem-de-producao/:id', component: OrdemDeProducaoComponent, canActivate: [AuthGuardService] },
  { path: 'add-ordem-de-producao', component: AddOrdemDeProducaoComponent, canActivate: [AuthGuardService] },
  { path: 'listar-ordens-de-producao', component: ListarOrdensDeProducaoComponent, canActivate: [AuthGuardService] },
  { path: 'editar-ordem-de-producao/:id', component: EditarOrdemDeProducaoComponent, canActivate: [AuthGuardService] },
  // Funcionários
  { path: 'funcionario/:id', component: FuncionarioComponent, canActivate: [AuthGuardService] },
  { path: 'add-funcionario', component: AddFuncionarioComponent, canActivate: [AuthGuardService] },
  { path: 'listar-funcionarios', component: ListarFuncionariosComponent, canActivate: [AuthGuardService] },
  { path: 'editar-funcionario/:id', component: EditarFuncionarioComponent, canActivate: [AuthGuardService] },
  // Produção Diaria
  { path: 'producao-diaria/:id', component: ProducaoDiariaComponent, canActivate: [AuthGuardService] },
  { path: 'add-producao-diaria', component: AddProducaoDiariaComponent, canActivate: [AuthGuardService] },
  { path: 'listar-producoes-diarias', component: ListarProducoesDiariasComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  declarations: [
    AppComponent,
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
    AddProducaoDiariaComponent,
    DashFuncionarioComponent,
    DashProducaoComponent,
    NavbarProducaoComponent,
    NavbarFuncionarioComponent,
    IndexComponent,
    LoginComponent,
    DialogComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    MatTabsModule, MatCardModule, MatGridListModule, LayoutModule, MatCheckboxModule, MatPaginatorModule, MatDialogModule,
  ],

  providers: [FirestoreService, { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, AfService, AuthGuardService],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(@Optional() @SkipSelf() parentModule: AppModule, private afs: AngularFirestore) {
    afs.firestore.settings({ timestampsInSnapshots: true });
  }
}
