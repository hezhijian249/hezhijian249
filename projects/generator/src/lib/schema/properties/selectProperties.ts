import { FormFieldEnum } from "form-render";
import { SelectField } from "form-render/lib/entity/SelectField";

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
  },
  {
    type: 'string',
    component: FormFieldEnum.INPUT,
    label: '请求地址',
    key: 'url',
    labelSpan: 6
  },
  {
    type: 'string',
    component: FormFieldEnum.SELECT,
    label: '请求方式',
    key: 'method',
    options: [
      { label: 'POST', value: 'post' },
      { label: 'GET', value: 'get' }
    ],
    labelSpan: 6
  } as SelectField,
  {
    type: 'string',
    component: FormFieldEnum.SELECT,
    label: '实时加载',
    key: 'liveLoading',
    options: [
      { label: '是', value: true },
      { label: '否', value: false }
    ],
    labelSpan: 6,
    tooltipTitle: '每次打开下拉框重新加载数据'
  } as SelectField,
  {
    type: 'string',
    component: FormFieldEnum.INPUT,
    label: 'label映射',
    key: 'labelKey',
    labelSpan: 6,
    tooltipTitle: 'label取值字段'
  },
  {
    type: 'string',
    component: FormFieldEnum.INPUT,
    label: 'value映射',
    key: 'valueKey',
    labelSpan: 6,
    tooltipTitle: 'value取值字段'
  },
]
