import { Component, OnInit } from '@angular/core';
//services
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  constructor(private authService: AuthService) { }

  isLoggedIn = this.authService.isLoggedIn;

}
