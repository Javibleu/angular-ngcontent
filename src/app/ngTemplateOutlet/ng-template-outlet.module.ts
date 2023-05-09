import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarParentComponent } from './progress-bar/progress-bar-parent.component';
import { NgTemplateOutletRoutingModule } from './ng-template-outlet-routing.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { NgTemplateOutletComponent } from './ng-template-outlet.component';
import { HomeComponent } from './home/home.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { WeatherWidgetParentComponent } from './weather-widget/weather-widget-parent.component';
import { WeatherCustomActionComponent } from './weather-widget/weather-custom-action.component';



@NgModule({
  declarations: [
    NgTemplateOutletComponent,
    ProgressBarParentComponent,
    ProgressBarComponent,
    HomeComponent,
    WeatherWidgetComponent,
    WeatherWidgetParentComponent,
    WeatherCustomActionComponent,
  ],
  imports: [
    CommonModule,
    NgTemplateOutletRoutingModule
  ]
})
export class NgTemplateOutletModule { }
