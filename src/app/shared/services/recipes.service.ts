import { Injectable } from '@angular/core';
import {  AngularFirestore} from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    public afs: AngularFirestore, // Inject Firestore service

  ) { }


  getAllRecipesData = async () => {
    return this.afs.collection("recipes").get().toPromise().then((res) => {
      let recipesList = []; 
      if (res.size > 0) {
        res.docs.forEach((recipe:any) => {
          recipesList.push({ id: recipe.id, ...recipe.data() });
        });
      }

      return recipesList;
    })
    .catch((error) => {
      console.log("Error getting recipes data: ", error);
      throw error;
    });
  };
  
}
