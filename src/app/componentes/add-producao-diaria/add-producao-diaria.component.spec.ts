import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProducaoDiariaComponent } from './add-producao-diaria.component';

describe('AddProducaoDiariaComponent', () => {
  let component: AddProducaoDiariaComponent;
  let fixture: ComponentFixture<AddProducaoDiariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProducaoDiariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProducaoDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
