import { Injectable } from '@angular/core';
import {  AngularFirestore} from '@angular/fire/compat/firestore';

import { BehaviorSubject, Observable, throwError, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



@Injectable()
export class RecipesService {

  private recipeSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public recipe$: Observable<any> = this.recipeSubject.asObservable();

  private recipesSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public recipes$: Observable<any> = this.recipesSubject.asObservable();

  constructor(
    public afs: AngularFirestore, // Inject Firestore service

  ) { }

  get recipe() {
    return this.recipeSubject.value;
  }

  async getRecipeOwnerUserData(userId: string) {
    return await this.afs.collection("users").doc(userId).get().toPromise().then((res) => {
      if (res.exists) {
        return res.data();
      } else {
        throw new Error("User not found");
      }
    })
    .catch((error) => {
      console.log("Error getting user data: ", error);
      throw error;
    });
  }


  getAllRecipesData = async () => {
    return this.afs.collection("recipes").get().toPromise().then((res) => {
      let allRecipes = []; 
      if (res.size > 0) {
        res.docs.forEach((recipe:any) => {
          allRecipes.push({ id: recipe.id, ...recipe.data() });
        });
      }
    
      this.recipesSubject.next(allRecipes);
      return allRecipes;
    })
    .catch((error) => {
      console.log("Error getting recipes data: ", error);
      throw error;
    });
  };




  getRecipeById(recipeId: string): Observable<any> {
    return from(this.afs.collection("recipes").doc(recipeId).get()).pipe(
      tap((res: any) => {
        if (res.exists) {
          const recipe = { id: res.id, ...res.data() };
          this.recipeSubject.next(recipe);
        } else {
          throw new Error("Recipe not found");
        }
      }),
      catchError((error) => {
        console.log("Error getting recipe by id: ", error);
        return throwError(error);
      })
    );
  }
  
}
