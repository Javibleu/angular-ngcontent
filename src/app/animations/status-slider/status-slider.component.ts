import { Component } from '@angular/core';
import { slideState } from '../animation-files/slide-status';

@Component({
  selector: 'app-status-slider',
  templateUrl: './status-slider.component.html',

  animations: [slideState]
})
export class StatusSliderComponent {

  status: 'active' | 'inactive' = 'inactive';

  toggle(){
    if(this.status =='active'){
      this.status = 'inactive';
    }else{
      this.status = 'active';
    }
  }
}
