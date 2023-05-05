import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import { AnimationsRoutingModule } from './animations-routing.module';
import { OpenCloseComponent } from './open-close/open-close.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AnimationsComponent,
    OpenCloseComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AnimationsRoutingModule,
  ]
})
export class AnimationsModule { }
