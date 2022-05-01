import { FormField } from "./FormField";
import { NzTreeNode, NzTreeNodeOptions } from "ng-zorro-antd/tree";

export interface TreeSelectFormField extends FormField {
  /**
   * 下拉树节点
   */
  treeSelectNodes?: (NzTreeNode | NzTreeNodeOptions)[];
}
