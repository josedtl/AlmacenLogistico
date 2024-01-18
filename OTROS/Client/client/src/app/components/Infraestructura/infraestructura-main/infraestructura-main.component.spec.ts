import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraestructuraMainComponent } from './infraestructura-main.component';

describe('InfraestructuraMainComponent', () => {
  let component: InfraestructuraMainComponent;
  let fixture: ComponentFixture<InfraestructuraMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfraestructuraMainComponent]
    });
    fixture = TestBed.createComponent(InfraestructuraMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
