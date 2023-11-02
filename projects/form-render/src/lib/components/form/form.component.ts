import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
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

  formGroup: UntypedFormGroup | undefined;

  @Output()
  formGroupInit: EventEmitter<UntypedFormGroup> = new EventEmitter<UntypedFormGroup>();

  @Output()
  formGroupChange: EventEmitter<UntypedFormGroup> = new EventEmitter<UntypedFormGroup>();

  @Output()
  modelChange: EventEmitter<any | any[]> = new EventEmitter<any | any[]>();

  constructor(private formBuild: UntypedFormBuilder) {
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
