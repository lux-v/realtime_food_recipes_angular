import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'] // You can create a CSS file to style the breadcrumbs
})
export class BreadcrumbsComponent {
  breadcrumbs: { label: string; url: string }[] = [];


  pathNames= this._location.path().split('/').filter(x=>x);

  constructor(
     private _location: Location,
      private router: Router,
     ) {}
     
   formatRouteNameForDisplay = (path) => {
    const splitByDash = path.split('-');

    //! If route has only one word then just capitalize that word
    if (splitByDash.length === 1) {
      return this.capitalizeFirstWord(path);
    }

    //! If route has multiple words eg. "add-new-student" then route is split into seperate words
    //! and first of those words is capitalized and other words are just concatenated to the first word
    let finalRouteName;
    splitByDash.forEach((word, index) => {
      if (index === 0) {
        finalRouteName = this.capitalizeFirstWord(word);
        word = '';
      }
      finalRouteName += ` ${word}`;
    });

    return finalRouteName;
  };

   capitalizeFirstWord = (path) => {
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

   checkIfRouteIsNotLast = (index) => {
    if (index + 1 !== this.pathNames.length) {
      return true;
    }

    return false;
  };

  navigateTo = (path) => {
    this.router.navigate([path]);
  }

  navigateBreadcrumb = (index) => {
    const path = this.pathNames.slice(0, index + 1).join('/');
    this.navigateTo(path);
  }

}
