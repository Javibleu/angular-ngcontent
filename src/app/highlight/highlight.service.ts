import { Injectable } from '@angular/core';

import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import js from 'highlight.js/lib/languages/javascript'

export class HighlightService {

  languages = [
    { name: 'typescript', func: typescript },
    { name: 'scss', func: scss },
    { name: 'xml', func: xml },
    { name: 'javascript', func: js }
  ]

  constructor() {
    this.registerLanguages();
  }


  registerLanguages(){
    this.languages.map((lang)=>{
      hljs.registerLanguage(lang.name, lang.func);
    })
  }

  listLanguages(): string[] {
    return hljs.listLanguages();
  }

  highlightAuto(value: string, languageSubset: string[]) {
    return hljs.highlightAuto(value, languageSubset);
  }
}

