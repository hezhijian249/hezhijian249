import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormField } from "../../entity/FormField";
import { createGroup } from "../../utils/formUtils";

@Component({
  selector: 'h-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  private _config: FormField[] = [];

  @Input()
  set config(config: FormField[]) {
    this._config = config || [];
    this.formGroup = createGroup(this.formBuild, this.config);
    this.formGroupChange.emit(this.formGroup);
  }

  get config(): FormField[] {
    return this._config || [];
  }

  formGroup: FormGroup | undefined;

  @Output()
  formGroupInit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  @Output()
  formGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  @Output()
  modelChange: EventEmitter<any | any[]> = new EventEmitter<any | any[]>();

  constructor(private formBuild: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = createGroup(this.formBuild, this.config);
    this.formGroupInit.emit(this.formGroup);
  }

  modelChangeHandle(data: any | any[], field: FormField) {
    this.modelChange.emit({
      config: field,
      value: data
    })
  }

  resolveUndefined(value: any) {
    if (value === undefined) {
      return null;
    }
    return value;
  }

}
