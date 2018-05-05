import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrdemDeProducaoComponent } from './listar-ordem-de-producao.component';

describe('ListarOrdemDeProducaoComponent', () => {
  let component: ListarOrdemDeProducaoComponent;
  let fixture: ComponentFixture<ListarOrdemDeProducaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarOrdemDeProducaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOrdemDeProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
