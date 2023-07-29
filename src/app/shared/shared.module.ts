import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
//svg
import { AngularSvgIconModule } from 'angular-svg-icon';
//components
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CardHeadingComponent } from './components/card/card-heading/card-heading.component';
import { CardContentComponent } from './components/card/card-content/card-content.component';
import { CardBottomComponent } from './components/card/card-bottom/card-bottom.component';
import { ChipComponent } from './components/chip/chip.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { ContentComponent } from './components/layout/content/content.component';


@NgModule({
  imports: [
    CommonModule, 
    NgOptimizedImage, 
    ReactiveFormsModule,
    // routerLink did not work without RouterModule
    // but it didn't throw any error
    // it threw an error only when I wrapped the routerLink in a square bracket [] 
    RouterModule,
    AngularSvgIconModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    ButtonComponent, 
    CardComponent, 
    CardHeadingComponent, 
    CardContentComponent, 
    CardBottomComponent, 
    ChipComponent,
    BreadcrumbsComponent,
    LoadingSpinnerComponent
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    ButtonComponent, 
    CardComponent,
    CardHeadingComponent, 
    CardContentComponent, 
    CardBottomComponent, 
    ChipComponent,
    BreadcrumbsComponent,
    LoadingSpinnerComponent
  ],

})
export class SharedModule {}
