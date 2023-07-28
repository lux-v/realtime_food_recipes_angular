import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

// THIS SHOULD BE DIRECTIVE!!!!
export class SidebarService {
  
  isSidebarOpen: boolean = false;
  isSidebarOpenSubject = new BehaviorSubject<boolean>(false);
  isSidebarOpen$ = this.isSidebarOpenSubject.asObservable();
  
  constructor() { }

  toggleIsSidebarOpen() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.isSidebarOpenSubject.next(!this.isSidebarOpenSubject.value);
  }
}
