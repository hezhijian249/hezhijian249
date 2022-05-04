import { Component, Input, OnInit } from '@angular/core';
import { marked } from "marked";
import highlight from 'highlight.js'
import { HtmlEscape } from "../../utils/html-escape";

@Component({
  selector: 'h-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  private _value: string = '';

  @Input()
  set value(value: string) {
    marked.setOptions({
      highlight: ((code: string, lang: string) => {
        let res;
        debugger
        if (lang) {
          res = highlight.highlight(lang, code, true).value;
        } else {
          res = highlight.highlightAuto(code).value;
        }
        return res;
      })
    })
    this._value = marked(HtmlEscape.htmlEncode( value ));
  }

  get value(): string {
    return this._value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
