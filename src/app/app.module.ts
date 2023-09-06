import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';
//environment
import { environment } from 'src/environments/environment';
//routing
import { AppRoutingModule } from './app-routing.module';
// modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
//svg
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
//components
import { AppComponent } from './app.component';
import { ErrorpageComponent } from './features/errorpage/errorpage.component'
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LandingComponent } from './features/landing/landing.component';
import { CommingsoonComponent } from './features/commingsoon/commingsoon.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { HowItWorksComponent } from './features/how-it-works/how-it-works.component';
import { RecipesModule } from './features/recipes/recipes.module';
import { AccountSettingsComponent } from './features/account-settings/account-settings.component';
import { PasswordResetComponent } from './features/password-reset/password-reset.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RecipesModule,
    BrowserModule,
    CoreModule,
    AngularSvgIconModule.forRoot(),
    HttpClientModule,


    AppRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    AppComponent,
    ErrorpageComponent,
    DashboardComponent,
    LandingComponent,
    CommingsoonComponent,
    AboutUsComponent,
    HowItWorksComponent,
    AccountSettingsComponent,
    PasswordResetComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
