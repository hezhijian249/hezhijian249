import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseColumn } from "../../../entity/BaseColumn";

@Component({
  selector: 'h-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input()
  config: BaseColumn | undefined;

  @Output()
  click: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  get showValue(): string | number | boolean {
    if (this.config?.formatter instanceof Function) {
      return this.config.formatter(this.config.value, this.config.row);
    }
    return this.config?.value === undefined ? '-' : this.config.value;
  }

  clickHandle() {
    this.click.emit();
  }

  /**
   * 计算cell的class名称
   * @param data
   */
  computerClass(data: string | Record<string, boolean> | Function | Array<string> | undefined) {
    if (!data) {
      return ''
    }
    if (data instanceof Function) {
      return data(this.config?.value, this.config?.row)
    }
    return data
  }
}
