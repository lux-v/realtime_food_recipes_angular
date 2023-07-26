import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//components
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CardHeadingComponent } from './components/card/card-heading/card-heading.component';
import { CardContentComponent } from './components/card/card-content/card-content.component';
import { CardBottomComponent } from './components/card/card-bottom/card-bottom.component';


@NgModule({
  imports: [CommonModule, NgOptimizedImage, ReactiveFormsModule],
  declarations: [
    ButtonComponent, 
    CardComponent, CardHeadingComponent, CardContentComponent, CardBottomComponent
  ],
  exports: [
    ButtonComponent, 
    CardComponent
  ],
})
export class SharedModule {}
