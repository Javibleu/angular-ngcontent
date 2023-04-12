import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  template: `
    <button (click)="upMargin()">{{this.margin}}</button>
    <span>{{margin}}</span>
    <button (click)="downMargin()">{{label}}</button>
  `
})
export class CustomButtonComponent {

  margin = 5;

  @HostBinding('style.border')
  borders = 'solid 1px red'

  @HostBinding('style.padding')
    get getPadding () {
      return `${this.margin}px`
    }

  label = 'Click me!'


  upMargin(){
    this.margin ++ ;
  }

  downMargin(){
    this.margin -- ;
  }

}
