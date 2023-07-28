import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { AuthorizedGuard } from '../login/authorized.guard';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthorizedGuard],
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailComponent,
    canActivate: [AuthorizedGuard],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]


})
export class RecipeRoutingModule { }
