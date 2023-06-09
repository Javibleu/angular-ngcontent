import { Component } from '@angular/core';
import { openClose } from '../animation-files/open-close';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  animations: [openClose]
})
export class OpenCloseComponent {

  isOpen: boolean = true;
  
  constructor() {}
  
  toggle(){
    this.isOpen = !this.isOpen;
  }
}
