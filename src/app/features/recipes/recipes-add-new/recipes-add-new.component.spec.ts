import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesAddNewComponent } from './recipes-add-new.component';

describe('RecipesAddNewComponent', () => {
  let component: RecipesAddNewComponent;
  let fixture: ComponentFixture<RecipesAddNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesAddNewComponent]
    });
    fixture = TestBed.createComponent(RecipesAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
