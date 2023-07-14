import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//components
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule, NgOptimizedImage, ReactiveFormsModule],
  declarations: [
    ButtonComponent, 

  ],
  exports: [
    ButtonComponent, 

  ],
})
export class SharedModule {}
