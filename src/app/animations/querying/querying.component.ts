import { Component } from '@angular/core';
import { Hero } from '../models/Hero';
import { animateMe, queryElements } from '../animation-files/query';

@Component({
  selector: 'app-querying',
  templateUrl: './querying.component.html',
  styleUrls: ['./querying.component.css'],
  animations: [queryElements, animateMe]
})
export class QueryingComponent {
 show:boolean = true;
 disabled:boolean = false;
 hero: Hero = {name: 'Javier', id: 2};

 buttonDisabled:boolean = false;

 disableToggle(){
  this.buttonDisabled = true;
 }

 enableToggle(){
  this.buttonDisabled = false;
 }


}
