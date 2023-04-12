import { Directive } from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms'

@Directive({
  selector: '[appEmailValidator][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }
  ]
})
export class EmailValidatorDirective implements Validator{

  validate(control: AbstractControl){
    const email = control.value;
    if(!email || !email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)){
      return {invalidEmail: true}
    }
    return null;
  }

}
