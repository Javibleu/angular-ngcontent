import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { NgTemplateOutletRoutingModule } from './ng-template-outlet-routing.module';



@NgModule({
  declarations: [
    NgTemplateOutletComponent
  ],
  imports: [
    CommonModule,
    NgTemplateOutletRoutingModule
  ]
})
export class NgTemplateOutletModule { }
