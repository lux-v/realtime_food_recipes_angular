import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, take } from 'rxjs';
//services
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })

export class NotAuthorizedGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> 
  {
    return this.authService.isLoggedInSubject.pipe(
      take(1),
      map(isLoggedIn => {
        console.log("non-authorized guard",isLoggedIn)
        if (!isLoggedIn) {
          return true;
        }
        return this.router.createUrlTree(['/dashboard']);
      }
      )
    );
  }
}
