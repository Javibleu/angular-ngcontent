import { Component } from '@angular/core';
import { RaceService } from '../race.service';


@Component({
  selector: 'app-injection-dependency',
  template: ` <h1>PonyRacer</h1>
              <p>{{list()}}</p>
              <div class="container flex">
                <pre class="p-3"><code class="rounded-xl" [appHighlight]="code"></code></pre>
                <pre class="p-3"><code class="rounded-xl" [appHighlight]="js"></code></pre>
              </div>
              `,
  styleUrls: ['./injection-dependency.component.css']
})
export class InjectionDependencyComponent {

  code: string = `<h1>PonyRacer</h1>
    <div class="card-body">
    <h5 class="card-title">
      <ng-content select="[title]"></ng-content>
    </h5>
    <h6 class="card-subtitle mb-2 text-muted">
      <ng-content select="[subtitle]"></ng-content>
    </h6>
    <p class="card-text" appHighlight="red">
      <ng-content select="[content]"></ng-content>
    </p>
    <a href="#" class="card-link"><ng-content select="[link1]"></ng-content></a>
    <a href="#" class="card-link"><ng-content select="[link2]"></ng-content></a>
  </div>
<p>{{list()}}</p>
<a>link</a>`

js: string = `var foo = 'foo';

function list(){return raceService.list()}
`

  constructor(private raceService: RaceService) { }
    
   list(): string[] {
     return this.raceService.list();
   }
    


}
