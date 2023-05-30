import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarLibroComponent } from './consultar-libro.component';

describe('ConsultarLibroComponent', () => {
  let component: ConsultarLibroComponent;
  let fixture: ComponentFixture<ConsultarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
