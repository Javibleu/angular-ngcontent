import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import { AnimationsRoutingModule } from './animations-routing.module';
import { OpenCloseComponent } from './open-close/open-close.component';
import { HomeComponent } from './home/home.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';
import { AutoCalculationComponent } from './auto-calculation/auto-calculation.component';
import { FilterComponent } from './filter/filter.component';

import { QueryingComponent } from './querying/querying.component';
import { GroupComponent } from './group/group.component';


@NgModule({
  declarations: [
    AnimationsComponent,
    AutoCalculationComponent,
    EnterLeaveComponent,
    FilterComponent,
    HomeComponent,
    OpenCloseComponent,
    QueryingComponent,
    StatusSliderComponent,
    GroupComponent
  ],
  imports: [
    CommonModule,
    AnimationsRoutingModule,
  ]
})
export class AnimationsModule { }
