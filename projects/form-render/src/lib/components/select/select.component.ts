import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { SelectField } from "../../entity/SelectField";

@Component({
  selector: 'h-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input()
  config: SelectField | undefined;

  @Input()
  formGroup: FormGroup | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
