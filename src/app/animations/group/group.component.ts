import { Component } from '@angular/core';
import { Hero } from '../models/Hero';
import { flyInOut } from '../animation-files/group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  animations: [flyInOut]
})
export class GroupComponent {


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

  removeHero(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }
}
