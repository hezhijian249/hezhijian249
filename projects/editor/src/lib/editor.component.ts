import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'h-editor',
  template: `
    <div *ngIf="formGroup && key" class="h-editor">
      <form [formGroup]="formGroup">
        <h-codemirror [formControlName]="key" [options]="options"></h-codemirror>
      </form>
      <h-preview [value]="formGroup.value[key]"></h-preview>
    </div>

  `,
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @Input()
  formGroup: FormGroup | undefined;

  @Input()
  options: any;

  @Input()
  key: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
