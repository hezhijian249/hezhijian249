import { NzButtonShape, NzButtonSize, NzButtonType } from "ng-zorro-antd/button/button.component";

/**
 * 按钮参数
 */
export interface Button {
  /**
   * 按钮的key值，可以用于区分不同按钮
   */
  key?: string;
  /**
   * 按钮名字
   */
  name: string;
  /**
   * 按钮禁用状态
   */
  disabled?: boolean;
  /**
   * 加载状态
   */
  loading?: boolean;
  /**
   * 设置按钮形状，可选值为 circle, round 或者不设
   */
  shape?: NzButtonShape;
  /**
   * 设置按钮大小，可选值为 small, large 或者不设
   */
  size?: NzButtonSize;
  /**
   * 设置按钮类型，可选值为 primary, dashed, text, link 或者不设
   */
  type?: NzButtonType;
  /**
   * 将按钮宽度调整为其父宽度的选项
   */
  block?: boolean;
  /**
   * 设置危险按钮
   */
  danger?: boolean;

}
