import { BaseField } from "core/lib/entity/baseField";
import { NzSizeLDSType } from "ng-zorro-antd/core/types";

export interface FormField extends BaseField {
  id?: string | number;
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

  /**
   * ≥1600px, 标签长度，所占栅兰
   */
  labelXXl?: number;

  /**
   * 控件大小, 'large' | 'small' | 'default'
   */
  size?: NzSizeLDSType;

  /**
   * 是否隐藏边框
   */
  borderless?: boolean;

  /**
   * 配置提示信息
   */
  tooltipTitle?: string;
}
