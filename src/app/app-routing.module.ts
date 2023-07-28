import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule,  Routes } from '@angular/router';
//guard
import { NotAuthorizedGuard } from './core/not-authorized.guard';
import { AuthorizedGuard } from './core/authorized.guard';
//components
import { ErrorpageComponent,} from './errorpage/errorpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
    canActivate:[NotAuthorizedGuard]
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
      import('./recipes/recipes.module').then((mod) => mod.RecipesModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((mod) => mod.LoginModule),
    canActivate:[NotAuthorizedGuard]
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((mod) => mod.SignupModule),
    canActivate:[NotAuthorizedGuard]
  },

  { path: '**', component: ErrorpageComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})


export class AppRoutingModule {}

