import { Directive, Input, NgZone, OnChanges, SimpleChanges } from '@angular/core';
import { HighlightService } from './highlight.service';


@Directive({
  selector: '[appHighlight]',
  host: {
    '[class.hljs]': 'true',
    '[innerHTML]': 'highlightedCode'
  }
})
export class HighlightDirective implements OnChanges{
  highlightedCode!: string;
  
  @Input('appHighlight') code!:string;
  @Input() languages!: string[];

  constructor(private highlightService: HighlightService, private zone: NgZone) {
   }

   ngOnChanges(changes: SimpleChanges){
    const codeValue = changes['code'];
    console.log(codeValue);
    if (codeValue && codeValue.currentValue !== codeValue.previousValue)  {
      this.highlightElement(this.code, this.languages)
    }
   }

   highlightElement(code: string, languages: string[]) {
    this.zone.runOutsideAngular(() => {
      const res = this.highlightService.highlightAuto(code, languages);
      this.highlightedCode = res.value;
      console.log(this.highlightedCode);
    });
  }

}
