import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.clear();
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private clear():void{
    this.el.nativeElement.style.backgroundColor = null;
  }
}
