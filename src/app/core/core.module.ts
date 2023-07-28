import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { CheckImageService } from '../shared/services/check-image.service';

@NgModule({
  providers:[
    AuthService,
    CheckImageService
  ]
})
export class CoreModule { }
