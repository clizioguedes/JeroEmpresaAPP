import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemDeProducaoComponent } from './ordem-de-producao.component';

describe('OrdemDeProducaoComponent', () => {
  let component: OrdemDeProducaoComponent;
  let fixture: ComponentFixture<OrdemDeProducaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemDeProducaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemDeProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
