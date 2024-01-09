import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAddBorder]',
})
export class AddBorderDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.border = '2px solid black';
  }
}
