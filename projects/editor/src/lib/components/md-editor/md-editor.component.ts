import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'h-md-editor',
  templateUrl: './md-editor.component.html',
  styleUrls: ['./md-editor.component.scss']
})
export class MdEditorComponent implements OnInit {

  @Input()
  formGroup: FormGroup | undefined;

  @Input()
  options: any;


  @Input()
  key: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
