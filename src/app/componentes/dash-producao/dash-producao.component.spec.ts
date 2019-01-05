import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProducaoComponent } from './dash-producao.component';

describe('DashProducaoComponent', () => {
  let component: DashProducaoComponent;
  let fixture: ComponentFixture<DashProducaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashProducaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
