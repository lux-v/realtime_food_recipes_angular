import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
})
export class ChipComponent {
  @Input() size: string = 'small';
  @Input() icon: boolean = false;
  @Input() type: string = 'default';
  @Input() style: any; // You can define an interface to represent the style object

  get chipStyles() {
    const sizeMap = {
      'small': { height: '22px', padding: '6px', fontSize: '16px' },
      'medium': { height: '30px', padding: '8px', fontSize: '18px' },
      'large': { height: '38px', padding: '10px', fontSize: '20px' }
    };

    const baseStyles = {
      'display': 'flex',
      'align-items': 'center',
      'border-radius': '10px',
      'user-select': 'none',
      "font-weight": "500",
      "color":"white",
      'background-color': this.type === 'default' ? '#7b8b9a' : '#7b8b9a', // Replace with your theme's secondary colors
      ...sizeMap[this.size],
      ...this.style
    };

    return baseStyles;
  }

  get iconStyles() {
    const sizeMap = {
      'small': { width: '12px', height: '12px' },
      'medium': { width: '14px', height: '14px' },
      'large': { width: '16px', height: '16px' }
    };

    const baseStyles = {
      'width': this.icon ? (sizeMap[this.size].width || '12px') : '0',
      'height': this.icon ? (sizeMap[this.size].height || '12px') : '0',
      'cursor': 'pointer',
      'fill': '#ffffff' 
    };

    return baseStyles;
  }

  onIconClick() {
    // Handle icon click event
  }
}
