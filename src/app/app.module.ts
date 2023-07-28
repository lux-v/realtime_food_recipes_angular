import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';
//environment
import { environment } from 'src/environments/environment';
//routing
import { AppRoutingModule } from './app-routing.module';
//shared module
import { SharedModule } from './shared/shared.module';
//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
//components
import { AppComponent } from './app.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { CommingsoonComponent } from './commingsoon/commingsoon.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { RecipesModule } from './recipes/recipes.module';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RecipesModule,
    BrowserModule,
    CoreModule,
    
    
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
