 import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label
      [for]="htmlFor"
      [class]="labelClass"
      style="margin-bottom: 0;"
    >
      <ng-content></ng-content>
    </label>
  `,
  styles: []
})
export class LabelComponent {
  @Input() htmlFor = '';
  @Input() class = '';
  get labelClass() {
    return `text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${this.class}`;
  }
}
