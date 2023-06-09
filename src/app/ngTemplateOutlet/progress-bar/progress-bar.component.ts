import { Component, Input, OnChanges, TemplateRef } from '@angular/core';

interface ProgressContext {
  $implicit: number;
}

@Component({
  selector: 'app-progress-bar',
  template: `
            <div class="w-80 text-xs text-center bg-gray-700 rounded-sm h-5">
              <div
              class="bg-blue-600 h-5 rounded-sm"
              role="progress-bar"
              [style.width.%]="percentage"
              [attr.aria-valuenow]= "value"
              [attr.aria-valuemin]= "min"
              [attr.aria-valuemax]= "max"
              >
            </div>
            <div class="relative -top-5 text-white">
              <ng-container [ngTemplateOutlet]="formatter || noFormatter"
              [ngTemplateOutletContext]="{$implicit: percentage}"></ng-container>
              <ng-template #noFormatter>{{percentage | number }}% </ng-template>
            </div>
          </div>
  `
})
export class ProgressBarComponent implements OnChanges {
  @Input() min = 0;
  @Input() max = 100;
  @Input() value: number = 0;
  @Input() formatter?: TemplateRef<ProgressBarComponent>
  formatterContext: ProgressContext = { $implicit: 0 };

  public percentage = 20;

  ngOnChanges(){
    this.percentage = (100 * (this.value - this.min)/(this.max - this.min));
    this.formatterContext = { $implicit: this.percentage }
  }
}
