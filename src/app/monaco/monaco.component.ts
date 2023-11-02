import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import * as monaco from 'monaco-editor'

@Component({
  selector: 'app-monaco',
  templateUrl: './monaco.component.html',
  styleUrls: ['./monaco.component.scss']
})
export class MonacoComponent implements OnInit {

  editorOptions = {
    language: "javascript",
    roundedSelection: false,
    scrollBeyondLastLine: false,
    readOnly: false
  };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';

  constructor() {
  }

  ngOnInit(): void {
  }


}
