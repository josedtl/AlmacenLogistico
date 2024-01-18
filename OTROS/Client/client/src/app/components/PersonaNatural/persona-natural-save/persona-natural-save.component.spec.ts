import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaNaturalSaveComponent } from './persona-natural-save.component';

describe('PersonaNaturalSaveComponent', () => {
  let component: PersonaNaturalSaveComponent;
  let fixture: ComponentFixture<PersonaNaturalSaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaNaturalSaveComponent]
    });
    fixture = TestBed.createComponent(PersonaNaturalSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
