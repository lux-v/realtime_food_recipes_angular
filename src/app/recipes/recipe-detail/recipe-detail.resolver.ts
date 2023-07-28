import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { RecipesService } from '../recipes.service';


@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<any> {
  constructor(
    private recipesService: RecipesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipe =  this.recipesService.getRecipeById(route.params['id'])

    return recipe;
  }
}
