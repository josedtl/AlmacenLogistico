import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisoMainComponent } from './piso-main.component';

describe('PisoMainComponent', () => {
  let component: PisoMainComponent;
  let fixture: ComponentFixture<PisoMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PisoMainComponent]
    });
    fixture = TestBed.createComponent(PisoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
