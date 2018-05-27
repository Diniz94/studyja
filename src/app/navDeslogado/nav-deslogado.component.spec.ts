import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDeslogadoComponent } from './nav-deslogado.component';

describe('NavDeslogadoComponent', () => {
  let component: NavDeslogadoComponent;
  let fixture: ComponentFixture<NavDeslogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDeslogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDeslogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
