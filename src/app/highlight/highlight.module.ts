import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 3rd Party Modules
import { HighlightService } from './highlight.service';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [HighlightService],
  exports: [HighlightDirective],
})
export class HighlightModule { }
