import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProducaoDiariaComponent } from './listar-producao-diaria.component';

describe('ListarProducaoDiariaComponent', () => {
  let component: ListarProducaoDiariaComponent;
  let fixture: ComponentFixture<ListarProducaoDiariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProducaoDiariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProducaoDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
