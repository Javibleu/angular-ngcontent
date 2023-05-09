import { Component } from "@angular/core";



@Component({
    selector: 'app-weather-widget-parent',
    template: `
    <app-weather-widget
    [headerTemplate]="altWidgetHeader"
    [contentTemplate]="altWidgetContent"
    ></app-weather-widget>

    <ng-template #altWidgetHeader>
      <div class="text-xl">Today's weather</div>
    </ng-template>

    <ng-template #altWidgetContent let-state>
      <div>
        <span>🌡 {{state.data.temperature}}°C</span> - 
        <span>{{state.data.skyCondition === 'sunny' ? '☀️' : '☁️'}}</span> - 
        <span>🌬️ {{state.data.windspeed}}m/s</span>
      </div>
    </ng-template>
    
    <ng-template #altAction>
      <app-weather-custom-action></app-weather-custom-action>
    </ng-template>
                
                `
})
export class WeatherWidgetParentComponent{

}