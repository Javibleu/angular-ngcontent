import { Component } from '@angular/core';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-injection-dependency',
  template: `<h1>PonyRacer</h1>
              <p>{{list()}}</p>`,
  styleUrls: ['./injection-dependency.component.css']
})
export class InjectionDependencyComponent {

  constructor(private raceService: RaceService) {
  }
    
   list(): string[] {
     return this.raceService.list();
   }
    


}
