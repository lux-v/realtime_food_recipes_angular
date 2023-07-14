import {Component} from '@angular/core';
//services
import { AuthService } from 'src/app/shared/services/auth.service';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isMenuOpen = false;
  user = null;

  
  constructor(
    public authService: AuthService,
    public sidebarService: SidebarService,
  ) {}


  handleHamburgerClick = () => {
    console.log("handleHamburgerClick")
    this.sidebarService.toggleIsSidebarOpen()
    this.isMenuOpen = !this.isMenuOpen;

  };

  logout() {
    this.authService.logout();
  }

  handleMenuClick() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
