import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//services
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['../../app/landing/landing.component.css'],
  styles: [`:host { display: flex; }`]
})
export class ErrorpageComponent {
  title = 'Error 404 - page not found';
  isLoggedIn:boolean = false;
  

  constructor(
    private router : Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }

}
