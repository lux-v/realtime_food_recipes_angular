import {Component,OnInit} from '@angular/core';
//services
import { AuthService } from 'src/app/core/auth.service';
import { CheckImageService } from 'src/app/shared/services/check-image.service';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  user = null;
  userImgSrc = '../../../assets/img/profile.svg'


  isHeaderProfileHover = false;
  
  constructor(
    public authService: AuthService,
    public checkImageService: CheckImageService,

    //this should be DIRECTIVE!!!!
    public sidebarService: SidebarService,
  ) {}


  ngOnInit(): void {
    this.authService.userData$.subscribe((user) => {
    if(user){
      this.user = user;
      this.checkImageService.checkImage(user.photoURL, "../../../assets/img/profile.svg").then((res) => {
        this.userImgSrc = res;
      })

    }
    else
      this.user = null;
    });
  }

  handleHamburgerClick = () => {
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
