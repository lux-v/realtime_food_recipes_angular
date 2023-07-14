import { Component } from '@angular/core';
import { Router } from '@angular/router';
//services
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['../../app/landing/landing.component.css'],
  styles: [`:host { display: flex; }`]
})
export class ErrorpageComponent {

  title = 'Error 404 - page not found';
  isLoggedIn = this.authService.isLoggedIn;

  constructor(
    private router : Router,
    private authService: AuthService
    ) { }
  

  navigate(path: string) {
    this.router.navigate([path]);
  }
  
}
