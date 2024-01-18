import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraestructuraSaveComponent } from './infraestructura-save.component';

describe('InfraestructuraSaveComponent', () => {
  let component: InfraestructuraSaveComponent;
  let fixture: ComponentFixture<InfraestructuraSaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfraestructuraSaveComponent]
    });
    fixture = TestBed.createComponent(InfraestructuraSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
