import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isSidebarOpen = false;
  
  constructor() { }

  toggleIsSidebarOpen() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
