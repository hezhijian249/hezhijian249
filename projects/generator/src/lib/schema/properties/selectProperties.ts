import { FormFieldEnum } from "../../../../../form-render/src/lib/enum/FormFieldEnum";

export const selectProperties = [
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
  }
]
