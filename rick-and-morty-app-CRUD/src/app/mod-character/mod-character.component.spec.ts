import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCharacterComponent } from './mod-character.component';

describe('ModCharacterComponent', () => {
  let component: ModCharacterComponent;
  let fixture: ComponentFixture<ModCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModCharacterComponent]
    });
    fixture = TestBed.createComponent(ModCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
