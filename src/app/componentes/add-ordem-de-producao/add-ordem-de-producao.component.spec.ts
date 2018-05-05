import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrdemDeProducaoComponent } from './add-ordem-de-producao.component';

describe('AddOrdemDeProducaoComponent', () => {
  let component: AddOrdemDeProducaoComponent;
  let fixture: ComponentFixture<AddOrdemDeProducaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrdemDeProducaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrdemDeProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
