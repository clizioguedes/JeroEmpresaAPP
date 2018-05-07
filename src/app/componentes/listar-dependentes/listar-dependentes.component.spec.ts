import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDependentesComponent } from './listar-dependentes.component';

describe('ListarDependentesComponent', () => {
  let component: ListarDependentesComponent;
  let fixture: ComponentFixture<ListarDependentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDependentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDependentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
