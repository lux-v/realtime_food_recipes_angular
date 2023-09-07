import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css', '../../../shared/shared.styles.css']
})
export class SearchRecipeComponent {
  @Input() filteredRecipes!: any;
  @Output() searchRecipe = new EventEmitter<any>();


  handleSearchInput = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue === "") {
      this.searchRecipe.emit(this.filteredRecipes)
    }

    const searchRecipeChanged = this.filteredRecipes.filter(
      (recipes) =>
        recipes.name.toLowerCase().includes(searchValue) ||
        recipes.description.toLowerCase().includes(searchValue)
    );

    this.searchRecipe.emit(searchRecipeChanged);
  };

}
