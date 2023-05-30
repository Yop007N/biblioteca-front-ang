import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAutorComponent } from './consultar-autor.component';

describe('ConsultarAutorComponent', () => {
  let component: ConsultarAutorComponent;
  let fixture: ComponentFixture<ConsultarAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
