import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetColorComponent } from './preset-color.component';

describe('PresetColorComponent', () => {
  let component: PresetColorComponent;
  let fixture: ComponentFixture<PresetColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresetColorComponent]
    });
    fixture = TestBed.createComponent(PresetColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
