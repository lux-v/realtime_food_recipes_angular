import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
//services
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  activeLink = '';
  
  constructor(
    private router: Router,
    public sidebarService: SidebarService
    ) {
      this.router.events.subscribe((res) => {
        const url = this.router.url.split('/')[1]
        this.activeLink = url;
      });
    }
 
  @HostBinding('attr.isSidebarOpen') get isSidebarOpen() { return this.sidebarService.isSidebarOpen;}





}
