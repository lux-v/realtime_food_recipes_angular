import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//guard
import { AuthGuard } from './login/auth.guard';
//components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorpageComponent,} from './errorpage/errorpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { NoAuthGuard } from './login/noauth.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
    
  },
  {
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard],

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
    path: 'login',
    component: LoginComponent,
    loadChildren: () =>
      import('./login/login.module').then((mod) => mod.LoginModule),
    canActivate:[NoAuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    loadChildren: () =>
      import('./signup/signup.module').then((mod) => mod.SignupModule),
    canActivate:[NoAuthGuard]
  },

  { path: '**', component: ErrorpageComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule {}

