import { Component ,HostBinding,Input} from '@angular/core';
//services
import { AuthService } from 'src/app/core/auth.service';
import { SidebarService } from '../sidebar/sidebar.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input() title: string;
  @Input() elements: Component[];
  @Input() isCentered: boolean;
  // https://indepth.dev/posts/1469/techniques-to-style-component-host-element-in-angular

  constructor(
    public authService: AuthService,
    public sidebarService: SidebarService
  ) {}

  @HostBinding('attr.isLoggedIn') get isLoggedIn() {
    return this.authService.isLoggedInSubject.value;
  }

  @HostBinding('attr.isSidebarOpen') get isSidebarOpen() { return this.sidebarService.isSidebarOpen;}

  
  get showHeading() {
    return this.title || this.elements;
  }

}
