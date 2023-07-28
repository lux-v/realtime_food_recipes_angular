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

  // isLoggedIn:boolean = false;
  
  isLoggedIn = this.authService.isLoggedIn;

  constructor(
    private router : Router,
    private authService: AuthService
    ) { }
  

  navigate(path: string) {
    this.router.navigate([path]);
  }
  // ngOnInit(): void {
  //   this.authService.userData$.subscribe((userData) => {
  //     if(userData){
  //       this.isLoggedIn = true;
  //     }
  //     else{
  //       this.isLoggedIn = false;
  //     }
  //   });
  // }
  
}
