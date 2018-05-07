import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDependenteComponent } from './add-dependente.component';

describe('AddDependenteComponent', () => {
  let component: AddDependenteComponent;
  let fixture: ComponentFixture<AddDependenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDependenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDependenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
