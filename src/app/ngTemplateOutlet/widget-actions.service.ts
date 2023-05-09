import { Injectable } from '@angular/core';
import { WidgetStateService } from './widget-state.service';

@Injectable({
  providedIn: 'root'
})
export class WidgetActionsService {

  constructor(private state: WidgetStateService) { }

  reload() {
    this.state.lastUpdateAt = new Date();
    console.log('Reloads widget data...');
  }
  copyData() {
    console.log('Copy widget data into clipboard...');
  }
}
