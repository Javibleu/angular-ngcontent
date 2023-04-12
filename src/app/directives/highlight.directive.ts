import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor!: string;

  @HostBinding('class')
  get classList() {
    return `highlight ${this.highlightColor}`;
  }
}

/**
 * El decorador @HostBinding se utiliza para vincular 
 * la propiedad class del elemento anfitrión a la función classList, 
 * que devuelve una cadena con las clases CSS que se aplicarán al 
 * elemento anfitrión.
 */