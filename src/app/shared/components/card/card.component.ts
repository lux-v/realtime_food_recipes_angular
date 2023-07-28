import { Component, Input,} from '@angular/core';

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
