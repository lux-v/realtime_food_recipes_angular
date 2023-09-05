import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularRecipeComponent } from './most-popular-recipe.component';

describe('MostPopularRecipeComponent', () => {
  let component: MostPopularRecipeComponent;
  let fixture: ComponentFixture<MostPopularRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostPopularRecipeComponent]
    });
    fixture = TestBed.createComponent(MostPopularRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
