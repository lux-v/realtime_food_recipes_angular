import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css', '../../shared/shared.styles.css']
})
export class RecipesComponent implements OnInit {
  recipes = null;
  filteredRecipes = null;
  searchRecipe = null;

  constructor(
    private recipeService: RecipesService,
    private router: Router,
  ) { }

  fetchRecipes = async () => {
    try {
      const recipesData = await this.recipeService.getAllRecipesData();
      this.recipes = recipesData;
      this.filteredRecipes = recipesData;
      this.searchRecipe = recipesData;

    } catch (error) {
      alert(error.message);
    }
  };

  async ngOnInit() {
    await this.fetchRecipes();
  }




  navigate = (id) => {
    this.router.navigate([`/recipes/${id}`]);
  }
}
