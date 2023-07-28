import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@firebase/firestore';

@Injectable()
export class RecipeLikeService {
  private isLikedByUser = false;
  private recipeLikes = 0;

  constructor(
    public afs: AngularFirestore, // Inject Firestore service

  ) {}

  init(recipe: any, userData: any) {
    this.isLikedByUser = recipe?.likedBy?.includes(userData.uid) || false;
    this.recipeLikes = recipe?.likedBy?.length || 0;
  }

  getIsLikedByUser(): boolean {
    return this.isLikedByUser;
  }

  getRecipeLikes(): number {
    return this.recipeLikes;
  }

  

async addRemoveLikedBy(userId, recipeId, isLikedByUser) {
  const action = isLikedByUser
    ? this.afs
        .collection("recipes")
        .doc(recipeId)
        .update({ likedBy: arrayRemove(userId) })
    : this.afs
        .collection("recipes")
        .doc(recipeId)
        .update({ likedBy: arrayUnion(userId) });


  action.catch((error) => {
    console.log("Error updating recipe likedBy: ", error);
    throw error;
  });
}

  async handleLikeRecipe(recipe: any, userData: any, isLikedByUser: boolean) {

    try{
      await this.addRemoveLikedBy(userData.uid, recipe.id, isLikedByUser)
      this.isLikedByUser = !isLikedByUser;
      this.recipeLikes = isLikedByUser ? this.recipeLikes - 1 : this.recipeLikes + 1;

    } catch (error) {
      alert(error.message);
    }
  }

}
