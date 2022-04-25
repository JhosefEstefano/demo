import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoJh2Component } from './carrito-jh2.component';

describe('CarritoJh2Component', () => {
  let component: CarritoJh2Component;
  let fixture: ComponentFixture<CarritoJh2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoJh2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoJh2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
