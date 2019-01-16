import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFuncionarioComponent } from './navbar-funcionario.component';

describe('NavbarFuncionarioComponent', () => {
  let component: NavbarFuncionarioComponent;
  let fixture: ComponentFixture<NavbarFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
