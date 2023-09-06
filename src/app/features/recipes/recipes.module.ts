import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//services
import { RecipesService } from './recipes.service';
import { RecipeLikeService } from './recipe-like.service';
//modules
import { SharedModule } from '../../shared/shared.module';
//components
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipesComponent } from './recipes.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RecipesAddNewComponent } from './recipes-add-new/recipes-add-new.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RecipeRoutingModule,
    AngularSvgIconModule
  ],
  declarations: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeCardComponent,
    RecipesAddNewComponent,
  ],
  providers: [
    RecipesService,
    RecipeLikeService
  ],
})
export class RecipesModule { }
