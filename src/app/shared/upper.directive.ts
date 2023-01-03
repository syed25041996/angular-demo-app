import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngUpper]'
})
export class UpperDirective {

  constructor(private el : ElementRef) {
      this.el.nativeElement.style.textTransform = "uppercase"
   }

}
