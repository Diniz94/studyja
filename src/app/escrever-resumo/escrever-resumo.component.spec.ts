import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscreverResumoComponent } from './escrever-resumo.component';

describe('EscreverResumoComponent', () => {
  let component: EscreverResumoComponent;
  let fixture: ComponentFixture<EscreverResumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscreverResumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscreverResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});