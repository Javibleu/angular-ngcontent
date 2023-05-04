import { Injectable } from '@angular/core';

import hljs from 'highlight.js'
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  constructor() {

    const languages = [
      { name: 'typescript', func: typescript },
      { name: 'scss', func: scss },
      { name: 'xml', func: xml }
    ]
     languages.map((language) =>
        this.registerLanguage(language.name, language.func)
      );
   }


   registerLanguage(name: string, language: any) {
    hljs.registerLanguage(name, language);
  }

  listLanguages(): string[] {
    return hljs.listLanguages();
  }

  highlightAuto(value: string, languageSubset: string[]) {
    return hljs.highlightAuto(value, languageSubset);
  }




}

