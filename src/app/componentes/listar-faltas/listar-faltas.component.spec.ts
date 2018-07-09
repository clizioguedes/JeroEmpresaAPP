import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFaltasComponent } from './listar-faltas.component';

describe('ListarFaltasComponent', () => {
  let component: ListarFaltasComponent;
  let fixture: ComponentFixture<ListarFaltasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarFaltasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
