import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//guard
import { NotAuthorizedGuard } from './core/not-authorized.guard';
import { AuthorizedGuard } from './core/authorized.guard';
//components
import { ErrorpageComponent, } from './features/errorpage/errorpage.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LandingComponent } from './features/landing/landing.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { HowItWorksComponent } from './features/how-it-works/how-it-works.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
    canActivate: [NotAuthorizedGuard]
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
    loadChildren: () =>
      import('./features/recipes/recipes.module').then((mod) => mod.RecipesModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((mod) => mod.LoginModule),
    canActivate: [NotAuthorizedGuard]
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./features/signup/signup.module').then((mod) => mod.SignupModule),
    canActivate: [NotAuthorizedGuard]
  },

  { path: '**', component: ErrorpageComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})


export class AppRoutingModule { }

