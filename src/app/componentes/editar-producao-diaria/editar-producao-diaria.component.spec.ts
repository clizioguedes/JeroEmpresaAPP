import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProducaoDiariaComponent } from './editar-producao-diaria.component';

describe('EditarProducaoDiariaComponent', () => {
  let component: EditarProducaoDiariaComponent;
  let fixture: ComponentFixture<EditarProducaoDiariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarProducaoDiariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProducaoDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
