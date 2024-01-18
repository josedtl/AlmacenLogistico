import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoMainComponent } from './cargo-main.component';

describe('CargoMainComponent', () => {
  let component: CargoMainComponent;
  let fixture: ComponentFixture<CargoMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargoMainComponent]
    });
    fixture = TestBed.createComponent(CargoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
