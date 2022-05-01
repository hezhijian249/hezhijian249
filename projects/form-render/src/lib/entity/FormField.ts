import { BaseField } from "core/lib/entity/baseField";

export interface FormField extends BaseField {
  /**
   * 标签名称
   */
  label: string;

  /**
   * key值
   */
  key: string;

  /**
   * 输入框提示信息
   */
  placeholder?: string;

  /**
   * 标签长度，所占栅兰
   */
  labelSpan?: string | number | null;
}
