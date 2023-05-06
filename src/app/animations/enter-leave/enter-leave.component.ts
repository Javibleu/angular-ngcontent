import { Component } from '@angular/core';
import { flyInOut } from '../animation-files/fly-in-out';
import { stagger20ms } from '../animation-files/stagger';
import { Hero } from '../models/Hero';



@Component({
  selector: 'app-enter-leave',
  templateUrl: './enter-leave.component.html',
  animations: [flyInOut, stagger20ms]
})
export class EnterLeaveComponent {

  heroes:Hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  removeHero(id:number){
    this.heroes = this.heroes.filter(x => x.id != id)
  }

  onAnimationEvent(e:any){
    console.log(e)
  }

  trackByFn(index:any,item:any){
    return item.name
  }
  

}
