import { ComponentLibrary } from "./componentLibrary";

export interface ComponentType {
  /**
   * 组件分类名称
   */
  name: string;

  components: ComponentLibrary[];
}
