import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioBasicoMainComponent } from './servicio-basico-main.component';

describe('ServicioBasicoMainComponent', () => {
  let component: ServicioBasicoMainComponent;
  let fixture: ComponentFixture<ServicioBasicoMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicioBasicoMainComponent]
    });
    fixture = TestBed.createComponent(ServicioBasicoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
