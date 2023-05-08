import { Component , Input, OnChanges, TemplateRef} from '@angular/core';


interface ProgressContext {
  percentage: number;
}


@Component({
  selector: 'app-ng-template-outlet',
  template: `
            <div class="w-80 text-xs text-center bg-gray-200 rounded-sm h-4.5 dark:bg-gray-700 dark:text-white">
              <div
              class="bg-blue-600 h-4.5 rounded-sm"
              role="progress-bar"
              [style.width.%]="percentage"
              [attr.aria-valuenow]= "value"
              [attr.aria-valuemin]= "min"
              [attr.aria-valuemax]= "max"
              >
              <span *ngIf="formatter; else noFormatter "></span>
              <ng-template #noFormatter>{{percentage | number }}% </ng-template>

              </div>
          </div>
  `,
  styleUrls: ['./ng-template-outlet.component.css']
})
export class NgTemplateOutletComponent implements OnChanges {
  @Input() min = 0;
  @Input() max = 100;
  @Input() value = 56;
  @Input() formatter?: TemplateRef<NgTemplateOutletComponent>
  formatterContext: ProgressContext = { percentage: 0 };

  percentage = 20;

  ngOnChanges(){
    this.percentage = (100 * (this.value - this.min)/(this.max - this.min));
    this.formatterContext = { percentage: this.percentage }
  }
}
