import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { CheckImageService } from '../../shared/services/check-image.service';
import { RecipeLikeService } from '../recipe-like.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe-detail.component.html',
  styleUrls: [ './recipe-detail.component.css','../recipe-card/recipe-card.component.css' ]
})
export class RecipeDetailComponent implements OnInit {
  @ViewChild('componentRef', { static: false }) componentRef: ElementRef;

  recipeId: string;
  recipe: any;
  recipeOwnerDetails: any;
  commentSectionRef: ElementRef;
  isLikedByUser: boolean;
  recipeLikes: number;
  isRecipeOwner: boolean;
  isMobileDevice: boolean;
  profileImgSrc: string;
  recipeDate: string;

  recipeNameList = [];  
  imageSrc:string;

  constructor(
    private recipeService: RecipesService,
    private recipeLikeService:RecipeLikeService,
    private router: Router,

    private route: ActivatedRoute,
    private authService: AuthService,
    private checkImageService: CheckImageService,

  ) {
    this.recipeId = this.route.snapshot.params['id'];
   }

   ngOnInit() {
    this.fetchRecipe();
  }

  async fetchRecipe() {
    const recipeData = this.recipeService.recipe; 

    // ---------------------------------------
    // here I can show the way with resolver and without resolver 

    // this.recipeService.recipe$.subscribe(async(recipeData) => {
    //   if(recipeData){
        const recipeOwnerDetails = await this.recipeService.getRecipeOwnerUserData(recipeData?.createdBy);

        this.recipeOwnerDetails = recipeOwnerDetails;
        this.checkIsRecipeOwner()
        this.profileImgSrc = await this.checkImage(this.recipeOwnerDetails?.photoURL, '../../assets/img/profile.svg');  

        this.formatRecipeDate(recipeData);
                
        this.recipeLikeService.init(recipeData, this.authService.userData);
        this.isLikedByUser = this.recipeLikeService.getIsLikedByUser();

        this.recipeLikes = this.recipeLikeService.getRecipeLikes();

        if(recipeData.id !== this.recipeId){
          this.recipe = null;
        }else{
          this.recipe = recipeData;
          this.recipeNameList = this.recipe.name.split(' ');
          this.imageSrc = await this.checkImage(recipeData.imgUrl,  '../../assets/img/recipe-image-placeholder.png');
        }

      // }
    // });
  }

  handleEditClick() {
    this.router.navigateByUrl(`/recipes/${this.recipeId}/update`); // Replace '/update' with the route path you defined in the routes array
  }


  async handleFavoriteClick(e) {
    e.stopPropagation();

    await this.recipeLikeService.handleLikeRecipe(this.recipe, this.authService.userData, this.isLikedByUser);
    this.isLikedByUser = this.recipeLikeService.getIsLikedByUser();
    this.recipeLikes = this.recipeLikeService.getRecipeLikes();
  }

  private async checkImage(url: string, placeholderUrl: string) {
    let image:string;
    
     await this.checkImageService.checkImage(url, placeholderUrl).then((src) => {
      image =  src;
    });

    return image;
  }


  checkIsLikedByUser() {
    // Implement your logic to check if the recipe is liked by the user
    // and set the value to this.isLikedByUser and this.recipeLikes
  }

  checkIsRecipeOwner() {
    this.isRecipeOwner =
      this.authService.userData?.uid === this.recipe?.createdBy || this.authService.userData?.isAdmin;
  }

  checkIsMobileDevice() {
    this.isMobileDevice =
      localStorage.getItem('isMobileDevice') === 'true';
  }


  formatRecipeDate(recipeData) {
    if (recipeData?.createdAt === undefined && recipeData?.updatedAt === undefined) {
      this.recipeDate = null;
    } else {
      const timestamp = recipeData?.updatedAt ? recipeData.updatedAt : recipeData?.createdAt;
      const date = new Date(timestamp.seconds * 1000);
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      this.recipeDate = `${day} ${month} ${year}`;
    }
  }

  scrollToRef(ref: ElementRef) {
    if (this.isMobileDevice) {
      window.scrollTo(0, ref.nativeElement.offsetTop);
    } else {
      ref.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  handlePrint() {
    // Implement your logic for printing the recipe details using Angular's print functionality
  }


}
