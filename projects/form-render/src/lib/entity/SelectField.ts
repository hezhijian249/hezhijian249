import { FormField } from "./FormField";

export interface SelectField extends FormField {
  options: { [value: string]: string }[];

  /**
   * 标签名的key
   */
  labelKey?: string;

  /**
   * 标签值的key
   */
  valueKey?: string;

  /**
   * 请求地址
   */
  url?: string;

  /**
   * 请求方式
   */
  method?: 'post' | 'get';

  /**
   * 请求数据
   */
  data?: any;

  /**
   * 加载状态
   */
  loading?: boolean;

  /**
   * 允许清除
   */
  allowClear?: boolean;

  /**
   * 最多选中多少个标签
   */
  maxMultipleCount?: number;

  /**
   * 最多显示多少个 tag, 默认5个
   */
  maxTagCount?: number;

  /**
   * 设置select 的模式，默认default
   */
  mode?: 'multiple' | 'tags' | 'default'
}
