import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseHover]'
})
export class MouseHoverDirective {
  //
  // @HostBinding('class.hover') isHover = false;
  // @HostListener('mouseover') mouseHover() {
  //   this.isHover = !this.isHover;
  // }
}
