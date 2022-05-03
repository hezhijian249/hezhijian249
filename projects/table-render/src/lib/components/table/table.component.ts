import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseColumn } from "../../entity/BaseColumn";
import { TableConfig } from "../../entity/TableConfig";

@Component({
  selector: 'h-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  /**
   *  配置信息
   */
  @Input()
  config: TableConfig | undefined;

  /**
   * 表格列
   */
  @Input()
  columns: BaseColumn[] = []

  @Output()
  cellClick: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  pageSizeChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  pageIndexChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  currentPageDataChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getConfig(column: BaseColumn, data: any): BaseColumn {
    return { ...column, value: data[column.key] };
  }

  clickHandle(data: any, rowData: any, config: BaseColumn) {
    this.cellClick.emit({
      ...data,
      rowData: rowData,
      config: config
    })
  }
}
