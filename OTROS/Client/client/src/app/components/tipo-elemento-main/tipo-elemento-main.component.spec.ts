import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoElementoMainComponent } from './tipo-elemento-main.component';

describe('TipoElementoMainComponent', () => {
  let component: TipoElementoMainComponent;
  let fixture: ComponentFixture<TipoElementoMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoElementoMainComponent]
    });
    fixture = TestBed.createComponent(TipoElementoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
