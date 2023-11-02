import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormField } from "form-render/lib/entity/FormField";
import { FormGroup } from "@angular/forms";
import { schema } from "../../schema";

@Component({
  selector: 'h-properties-panel',
  templateUrl: './properties-panel.component.html',
  styleUrls: ['./properties-panel.component.scss']
})
export class PropertiesPanelComponent implements OnInit {

  private _selectComponent?: FormField;

  formGroup: FormGroup | undefined;

  schema: any = schema

  formFields: FormField[] = []

  panels = [
    {
      active: true,
      name: '表单配置项'
    }
  ];

  @Input()
  get selectComponent(): FormField | undefined {
    return this._selectComponent;
  }

  set selectComponent(selectComponent: FormField | undefined) {
    this._selectComponent = selectComponent;
    this.formFields = this.schema[selectComponent?.component] || [];
    if (this.selectComponent) {
      this.formGroup?.patchValue(this.selectComponent)
    }
  }

  @Output()
  modelChange: EventEmitter<any | any[]> = new EventEmitter<any | any[]>();

  constructor() {
  }

  ngOnInit(): void {
  }

  formGroupChange(formGroup: FormGroup) {
    this.formGroup = formGroup;
    if (this.selectComponent) {
      this.formGroup.patchValue(this.selectComponent)
    }
  }

  modelChangeHandle(data: any) {
    this.modelChange.emit(data);
  }

}
