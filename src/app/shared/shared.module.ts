import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//components
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CardHeadingComponent } from './components/card/card-heading/card-heading.component';
import { CardContentComponent } from './components/card/card-content/card-content.component';
import { CardBottomComponent } from './components/card/card-bottom/card-bottom.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { ChipComponent } from './components/chip/chip.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';


@NgModule({
  imports: [
    CommonModule, 
    NgOptimizedImage, 
    ReactiveFormsModule
  ],
  declarations: [
    ButtonComponent, 
    CardComponent, 
    CardHeadingComponent, 
    CardContentComponent, 
    CardBottomComponent, 
    RecipeCardComponent, 
    ChipComponent,
    BreadcrumbsComponent,
    LoadingSpinnerComponent
  ],
  exports: [
    ButtonComponent, 
    CardComponent,
    CardHeadingComponent, 
    CardContentComponent, 
    CardBottomComponent, 
    RecipeCardComponent,
    ChipComponent,
    BreadcrumbsComponent,
    LoadingSpinnerComponent
  ],
})
export class SharedModule {}
