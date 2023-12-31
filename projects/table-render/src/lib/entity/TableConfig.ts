/**
 * 表格配置
 */
export interface TableConfig {
  data: any[];
  total: number;
  pageIndex: number;
  pageSize: number;

  /**
   * 在前端对数据进行分页
   */
  frontPagination?: boolean;

  showSizeChanger?: boolean;

  /**
   * 虚拟滚动
   */
  scroll?: {
    x?: string | null;
    y?: string | null;
  }
}
