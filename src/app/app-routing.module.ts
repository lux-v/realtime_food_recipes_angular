import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//guard
import { AuthorizedGuard } from './login/authorized.guard';
//components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorpageComponent,} from './errorpage/errorpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { NotAuthorizedGuard } from './login/not-authorized.guard';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
    
  },
  {
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthorizedGuard],

  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent,
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthorizedGuard],
    // children:[
    //   {
    //     path:":id",
    //     component:RecipeComponent,
    //     canActivate:[AuthorizedGuard]        
    //   }
    // ]
  },
  {
    path: 'recipes/:id',
    component: RecipeComponent,
    canActivate: [AuthorizedGuard],

  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () =>
      import('./login/login.module').then((mod) => mod.LoginModule),
    canActivate:[NotAuthorizedGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    loadChildren: () =>
      import('./signup/signup.module').then((mod) => mod.SignupModule),
    canActivate:[NotAuthorizedGuard]
  },

  { path: '**', component: ErrorpageComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule {}

