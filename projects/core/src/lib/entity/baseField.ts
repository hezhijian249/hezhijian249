import { FormFieldEnum } from "../../../../form-render/src/lib/enum/FormFieldEnum";

export interface BaseField {
  /**
   * 自动类型
   */
  type: string;
  /**
   * 组件
   */
  component: FormFieldEnum | any;

  input?: any;

  output?: any;
}
