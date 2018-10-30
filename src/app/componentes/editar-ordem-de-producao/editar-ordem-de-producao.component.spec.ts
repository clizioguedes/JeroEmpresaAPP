import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrdemDeProducaoComponent } from './editar-ordem-de-producao.component';

describe('EditarOrdemDeProducaoComponent', () => {
  let component: EditarOrdemDeProducaoComponent;
  let fixture: ComponentFixture<EditarOrdemDeProducaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarOrdemDeProducaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarOrdemDeProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
