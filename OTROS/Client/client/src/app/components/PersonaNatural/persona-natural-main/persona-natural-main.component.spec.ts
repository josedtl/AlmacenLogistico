import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaNaturalMainComponent } from './persona-natural-main.component';

describe('PersonaNaturalMainComponent', () => {
  let component: PersonaNaturalMainComponent;
  let fixture: ComponentFixture<PersonaNaturalMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaNaturalMainComponent]
    });
    fixture = TestBed.createComponent(PersonaNaturalMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
