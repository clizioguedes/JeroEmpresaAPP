import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrdensDeProducaoComponent } from './listar-ordens-de-producao.component';

describe('ListarOrdensDeProducaoComponent', () => {
  let component: ListarOrdensDeProducaoComponent;
  let fixture: ComponentFixture<ListarOrdensDeProducaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarOrdensDeProducaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOrdensDeProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
