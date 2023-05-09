import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject,  startWith, switchMap, timer } from 'rxjs';



@Component({
  selector: 'app-ng-template-outlet',
  template: `
           <app-progress-bar [value]= "value" [formatter]="myFormatter" [max]="100"></app-progress-bar>
           
           <ng-template #myFormatter let-p>value {{p}}</ng-template>
  `

})
export class ProgressBarParentComponent implements OnInit, OnDestroy {
  
  reset$ = new Subject<number>();
  timer$: any;
  value: number = 0;
  
  ngOnInit(){
  this.initialize(); 
  this.timer$.subscribe((val: number) => this.value = val);
  }
  ngOnDestroy(): void {
    
  }

 initialize(){
  this.timer$ = this.reset$.pipe(
    startWith(void 0),
    switchMap(() => timer(1000, 1000))
  );
 }

 resetTimer(): void{
  this.reset$.next(0);
 }

}
