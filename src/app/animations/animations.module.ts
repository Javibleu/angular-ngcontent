import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import { AnimationsRoutingModule } from './animations-routing.module';
import { OpenCloseComponent } from './open-close/open-close.component';

@NgModule({
  declarations: [
    AnimationsComponent,
    OpenCloseComponent
  ],
  imports: [
    CommonModule,
    AnimationsRoutingModule,
  ]
})
export class AnimationsModule { }
