import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//guard
import { AuthorizedGuard } from '../../core/authorized.guard';
//components
import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesResolverService } from './recipe-detail/recipe-detail.resolver';


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
    resolve: [RecipesResolverService]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]


})
export class RecipeRoutingModule { }
