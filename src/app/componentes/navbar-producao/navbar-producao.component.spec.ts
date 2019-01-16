import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProducaoComponent } from './navbar-producao.component';

describe('NavbarProducaoComponent', () => {
  let component: NavbarProducaoComponent;
  let fixture: ComponentFixture<NavbarProducaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarProducaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
