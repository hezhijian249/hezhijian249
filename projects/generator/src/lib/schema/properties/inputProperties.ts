import { FormFieldEnum } from "form-render";
import { FormField } from "form-render/lib/entity/FormField";
import { SelectField } from "form-render/lib/entity/SelectField";

export const inputProperties: FormField[] = [
  {
    type: 'string',
    component: FormFieldEnum.INPUT,
    label: '标签名称',
    key: 'label',
    labelSpan: 6
  },
  {
    type: 'string',
    component: FormFieldEnum.INPUT,
    label: '字段标识',
    key: 'key',
    labelSpan: 6,
    tooltipTitle: '标识唯一，不可重复'
  },
  {
    type: 'string',
    component: FormFieldEnum.INPUT,
    label: '占位提示',
    key: 'placeholder',
    labelSpan: 6
  },
  {
    type: 'string',
    component: FormFieldEnum.SELECT,
    label: '控件大小',
    key: 'size',
    labelSpan: 6,
    options: [
      { value: 'large', label: '大' },
      { value: 'default', label: '默认' },
      { value: 'small', label: '小' }
    ]
  } as SelectField,
  {
    type: 'string',
    component: FormFieldEnum.SELECT,
    label: '隐藏边框',
    key: 'borderless',
    labelSpan: 6,
    options: [
      { value: true, label: '是' },
      { value: false, label: '否' }
    ]
  } as SelectField
]
