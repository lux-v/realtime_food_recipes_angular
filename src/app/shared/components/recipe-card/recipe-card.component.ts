import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CheckImageService } from '../../services/check-image.service';
import { RecipeLikeService } from '../../services/recipe-like.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe = null;

  userData: any;
  imageSrc: string;
  isLikedByUser: boolean;
  recipeLikes: number;

  constructor(
    private recipeLikeService: RecipeLikeService, 
    private authService: AuthService, 
    private checkImageService: CheckImageService
  ) { 
   this.userData = this.authService.userData;
  }

  ngOnInit() {
    // Initialize the service with recipe and user data
    this.recipeLikeService.init(this.recipe, this.userData);
    this.isLikedByUser = this.recipeLikeService.getIsLikedByUser();
    this.recipeLikes = this.recipeLikeService.getRecipeLikes();
    this.checkImage(this.recipe.imgUrl, '../../../../assets/img/recipe-image-placeholder.png');
  }

  async handleFavoriteClick(e) {
    e.stopPropagation();

    await this.recipeLikeService.handleLikeRecipe(this.recipe, this.userData, this.isLikedByUser);
    this.isLikedByUser = this.recipeLikeService.getIsLikedByUser();
    this.recipeLikes = this.recipeLikeService.getRecipeLikes();
  }

  private checkImage(url: string, placeholderUrl: string): void {
    this.checkImageService.checkImage(url, placeholderUrl).then((src) => {
      this.imageSrc = src;
    });
  }

}
