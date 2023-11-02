import { Component } from '@angular/core';
import { FormField } from "../../projects/form-render/src/lib/entity/FormField";
import { SelectField } from "../../projects/form-render/src/lib/entity/SelectField";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormFieldEnum } from "../../projects/form-render/src/lib/enum/FormFieldEnum";
import { TableConfig } from "../../projects/table-render/src/lib/entity/TableConfig";
import { BaseColumn } from "../../projects/table-render/src/lib/entity/BaseColumn";
import { TableColumnEnum } from "../../projects/table-render/src/lib/enum/TableColumnEnum";
import { OperatorColumn } from "../../projects/table-render/src/lib/entity/OperatorColumn";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'low-code';

  inputConfig: FormField = { type: 'string', component: 'InputComponent', key: 'input', label: '输入框', labelSpan: 1 }

  inputGroup: FormGroup | undefined;

  config: FormField[] = [
    { type: 'string', component: 'InputComponent', key: 'input', label: '输入框', labelSpan: 1 },
    {
      type: 'array',
      component: 'SelectComponent',
      key: 'select',
      label: '下拉',
      // valueKey: 'a',
      // labelKey: 'b',
      options: [
        {
          value: '下拉框',
          label: '下拉'
        },
        {
          value: '下拉框1',
          label: '下拉1'
        }
      ],
      labelSpan: 1,
      labelXXl: 3,
      allowClear: true,
      mode: 'multiple'
    } as SelectField
  ]

  tableConfig: TableConfig = {
    data: [
      {
        name: '1234',
        age: 10
      },
      {
        name: '123456',
        age: 109
      }
    ],
    total: 19,
    pageIndex: 1,
    pageSize: 10,
    showSizeChanger: true
  }

  column: BaseColumn[] = [
    {
      type: 'string',
      key: 'name',
      title: '名称',
      component: TableColumnEnum.TEXT
    },
    {
      type: 'string',
      key: 'age',
      title: '龄年',
      width: '160px',
      component: TableColumnEnum.OPERATOR,
      operators: [
        {
          key: 'add',
          name: '新增'
        },
        {
          key: 'delete',
          name: '删除'
        }
      ]
    } as OperatorColumn
  ]

  formGroup: FormGroup | undefined;

  constructor(private fb: FormBuilder) {
    this.inputGroup = fb.group({
      input: ''
    })
  }

  formGroupInit(formGroup: FormGroup) {
    this.formGroup = formGroup;
  }

  view() {
    console.log(FormFieldEnum.SELECT)
    console.log(this.formGroup?.value)
  }

  cellClick(data: any) {
    console.log(data)
  }

  pageIndexChange(value: number) {
    console.log('pageIndexChange', value);
  }

  pageSizeChange(value: number) {
    console.log('pageSizeChange', value);
  }

  currentPageDataChange(value: any) {
    console.log('currentPageDataChange', value);
  }

  modelChange(data: any) {
    debugger
  }

}
