import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProducoesDiariasComponent } from './listar-producoes-diarias.component';

describe('ListarProducoesDiariasComponent', () => {
  let component: ListarProducoesDiariasComponent;
  let fixture: ComponentFixture<ListarProducoesDiariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProducoesDiariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProducoesDiariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
