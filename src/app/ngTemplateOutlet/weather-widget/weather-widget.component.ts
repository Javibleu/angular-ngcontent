import { Component, Injector, Input, TemplateRef, inject } from '@angular/core';
import { WidgetStateService } from '../widget-state.service';
import { WidgetActionsService } from '../widget-actions.service';

@Component({
  selector: 'app-weather-widget',
  styleUrls: ['./weather-widget-component.css'],
  template: `

      
      <div class="widget-header">
        <ng-container [ngTemplateOutlet]="headerTemplate || defaultWidgetHeader"></ng-container>
        <ng-template #defaultWidgetHeader>
          <div class="widget-title">Weather Forecast</div>
          <div class="widget-sub-title">Current weather in your location</div>
        </ng-template>
      </div>
      <div class="widget-content">
        <ng-container
          [ngTemplateOutlet]="contentTemplate || defaultWidgetContent"
          [ngTemplateOutletContext]="{ $implicit: state }"></ng-container>
        <ng-template #defaultWidgetContent>
          <div class="sky-condition">{{ state.data.skyCondition === 'sunny' ? '☀️' : '☁️' }}</div>
          <div class="temperature">{{state.data.temperature}}°C</div>
        </ng-template>
      </div>
      <div class="widget-actions">
        <ng-container
          [ngTemplateOutlet]="actionTemplate || defaultWidgetAction"
          [ngTemplateOutletInjector]="injector"></ng-container>
        <ng-template #defaultWidgetAction>
          <button (click)="actions.reload()">Reload</button>
          <button (click)="actions.copyData()">Copy Info</button>
        </ng-template>
      </div>

  `,
  providers: [WidgetActionsService, WidgetStateService]
})
export class WeatherWidgetComponent {
@Input()
headerTemplate!:TemplateRef<any>

@Input()
contentTemplate!:TemplateRef<any>

@Input()
actionTemplate!:TemplateRef<{ $implicit: WidgetStateService }>


state = inject(WidgetStateService);
actions = inject(WidgetActionsService);
injector = inject(Injector);



}
