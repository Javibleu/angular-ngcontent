import { Directive, HostBinding, Input, NgZone, OnChanges, SimpleChanges } from '@angular/core';
import { HighlightService } from './highlight.service';


@Directive({
  selector: '[appHighlight]',
  host: {
    // '[class.hljs]': 'true',
    // '[innerHTML]': 'highlightedCode'
  }
})
export class HighlightDirective implements OnChanges{
  highlightedCode!: string;
  
  @Input('appHighlight') code!:string;
  @Input() languages!: string[];

  @HostBinding('class.hljs')
  get ishljs(){
    return true;
  }

  @HostBinding('innerHTML')
  get getHighlightedCode(){
    return this.highlightedCode;
  }

  constructor(private highlightService: HighlightService, private zone: NgZone) {
   }

   ngOnChanges(changes: SimpleChanges){
    const codeValue = changes['code'];
    if (codeValue && codeValue.currentValue !== codeValue.previousValue)  {
      this.highlightElement(this.code, this.languages)
    } 
   }

   highlightElement(code: string, languages: string[]) {
    this.zone.runOutsideAngular(() => {
      const res = this.highlightService.highlightAuto(code, languages);
      this.highlightedCode = `${res.language}\n ${res.value}`;
    });
  }

}
