import { Component } from '@angular/core';
import {Location} from '@angular/common';
//services
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-commingsoon',
  templateUrl: './commingsoon.component.html',
  styleUrls: ['../../app/landing/landing.component.css'],
  styles: [`:host { display: flex; }`]
})
export class CommingsoonComponent {

  title = 'Error 404 - page not found';
  isLoggedIn = this.authService.isLoggedIn;

  constructor(
    private _location: Location,
    private authService: AuthService
    ) { }
  

  backClicked() {
    this._location.back();
  }
}
