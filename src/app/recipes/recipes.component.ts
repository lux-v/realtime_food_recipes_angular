import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../shared/components/button/button.component';
import { AuthService } from '../shared/services/auth.service';
import { RecipesService } from '../shared/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css', '../shared/shared.styles.css']
})
export class RecipesComponent implements OnInit {
  
  recipes = null;
  filteredRecipes = null;
  searchRecipe = null;
  userData = this.authService.userData;
    
  constructor(
    private authService: AuthService,
    private recipeService: RecipesService,
    private router : Router,
   ) {  }

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

  async ngOnInit(): Promise<void> {
    await this.fetchRecipes();
  }



   handleSearchInput = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue === "") {
      this.searchRecipe=this.filteredRecipes
    }
    this.searchRecipe=
      this.filteredRecipes.filter(
        (recipes) =>
          recipes.name.toLowerCase().includes(searchValue) ||
          recipes.description.toLowerCase().includes(searchValue)
      )
  };

  navigate= (id) => {
    this.router.navigate([`/recipes/${id}`]);
  }
}
