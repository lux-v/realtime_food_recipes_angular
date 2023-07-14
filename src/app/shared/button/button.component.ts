import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() isSecondary?:boolean=false;
  @Input() isTertiary?:boolean=false;
  @Input() isCancel?:boolean=false;
  @Input() isError?:boolean=false;
  @Input() widthProp?:string;
  @Input() heightProp?:string;
  @Input() disabledProp?:boolean=false;
  @Input() typeProp?:string ="submit";
  @Input() isHiddenProp?:boolean=false;
  @Input() isTransparentProp?:boolean=false;
}
