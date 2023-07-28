import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.css' ],
  styles: [`:host { width: 100%}`]
})
export class LayoutComponent {
  @Input() title?: string;
  @Input() elements?: Component[];
  @Input() isCentered?: boolean;

}
