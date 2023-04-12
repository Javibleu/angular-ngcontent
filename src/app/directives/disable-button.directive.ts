import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDisableButton]'
})
export class DisableButtonDirective {
  @Input('appDisableButton') disabledState!: boolean;

  @HostBinding('disabled')
  get isDisabled() {
    return this.disabledState;
  }
}

/**
 * El decorador @HostBinding se utiliza para vincular la propiedad 
 * disabled del botón a la función isDisabled, que devuelve el estado actual
 *  de la propiedad disabledState.
 */