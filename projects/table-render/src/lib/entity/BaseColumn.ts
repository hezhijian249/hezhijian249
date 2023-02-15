import { BaseField } from "core/lib/entity/baseField";

export interface BaseColumn extends BaseField {
  key: string;

  title: string;

  value?: string | number | boolean;

  /**
   * 行数据
   */
  row?: any;

  formatter?: Function;

  /**
   * 表格的宽度
   */
  width?: string | null;

  /**
   * class样式绑定,格式可看angular官网文档
   */
  class?: string | Record<string, boolean> | Function | Array<string> | undefined;
}
