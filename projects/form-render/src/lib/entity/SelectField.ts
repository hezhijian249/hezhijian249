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
}
