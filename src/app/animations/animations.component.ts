import { Component, HostBinding } from '@angular/core';
import { slideInAnimation } from './animation-files/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  animations: [
    slideInAnimation,
  ]
})
export class AnimationsComponent {
  @HostBinding('@.disabled')
  animationsDisabled:boolean = false;
  
  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }

}
