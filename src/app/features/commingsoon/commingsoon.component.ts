import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
//services
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-commingsoon',
  templateUrl: './commingsoon.component.html',
  styleUrls: ['../landing/landing.component.css'],
  styles: [`:host { display: flex; }`]
})
export class CommingsoonComponent {
  @Input() title: string;

  isLoggedIn: boolean = false;

  constructor(
    private _location: Location,
    private authService: AuthService
  ) {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  backClicked() {
    this._location.back();
  }
}
