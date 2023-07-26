import { Component, Input,ElementRef,AfterContentInit,AfterViewInit,ChangeDetectorRef , ContentChildren,QueryList, AfterContentChecked, OnInit, ContentChild, ViewChild } from '@angular/core';
import { CardHeadingComponent } from './card-heading/card-heading.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

// explain differecne between passing a component as a prop 
// in react and passing a component as a prop in angular

export class CardComponent {
  @Input() title: string="";
}
