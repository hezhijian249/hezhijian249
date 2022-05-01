import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormField } from "../../entity/FormField";

@Component({
  selector: 'h-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input()
  config: FormField[] = [];

  formGroup: FormGroup | undefined;

  @Output()
  formGroupInit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private formBuild: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.createGroup();
    this.formGroupInit.emit(this.formGroup);
  }

  createGroup(): FormGroup {
    const group = this.formBuild.group({});
    this.config.forEach((field: FormField) => {
      group.addControl(field.key, this.formBuild.control(''))
    })
    return group;
  }

  resolveUndefined(value: any) {
    if (value === undefined) {
      return null;
    }
    return value;
  }

}
