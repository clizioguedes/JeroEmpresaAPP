import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducaoDiariaComponent } from './producao-diaria.component';

describe('ProducaoDiariaComponent', () => {
  let component: ProducaoDiariaComponent;
  let fixture: ComponentFixture<ProducaoDiariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducaoDiariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducaoDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
