import { Component, HostBinding, OnInit } from '@angular/core';
import { Hero } from '../models/Hero';
import { filter, slideIn } from '../animation-files/slide-in';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  animations: [ slideIn, filter ]
})
export class FilterComponent implements OnInit{
  @HostBinding('@slideIn')
  public animatePage = true;

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

  localHeroes!:Hero[];

  heroesTotal = -1;

  ngOnInit(){
    this.localHeroes = this.heroes;
  }

  updateCriteria(criteria: string) {
    criteria = criteria ? criteria.trim() : '';
 
    this.localHeroes = this.heroes.filter(hero => hero.name.toLowerCase().includes(criteria.toLowerCase()));
    const newTotal = this.localHeroes.length;
    console.log(this.heroesTotal)
    if (this.heroesTotal !== newTotal) {
      this.heroesTotal = newTotal;
    } else if (!criteria) {
      this.heroesTotal = -1;
    }
  }

}
