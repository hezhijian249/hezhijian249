import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormGroup } from "@angular/forms";
import { SelectField } from "../../entity/SelectField";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'h-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input()
  config: SelectField | undefined;

  @Input()
  formGroup: UntypedFormGroup | undefined;

  @Output()
  modelChange: EventEmitter<any[] | any> = new EventEmitter<any[] | any>();

  /**
   * 是否请求成功
   * @private
   */
  private requestSuccess: boolean = false;

  maxMultipleCount: number = Infinity;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.initOptions();
  }

  initOptions() {
    if (this.config && this.config?.url) {
      switch (this.config?.method) {
        case 'post':
          this.config.loading = true;
          this.http.post<any[]>(this.config?.url, this.config?.data).subscribe(res => {
            this.config!.options = res;
            this.requestSuccess = true;
          }, (err) => {
            console.error(err);
          }, () => {
            this.config!.loading = false;
          })
          break;
        case 'get':
          let url = this.config.url;
          let param = ''
          if (this.config.data) {
            Object.keys(this.config.data).forEach(key => {
              param = `${param}${key}=${this.config?.data[key]}`
            })
            if (url.indexOf('?') > -1) {
              url = `${url}&${param}`
            } else {
              url = `${url}?${param}`
            }
          }
          this.config.loading = true;
          this.http.get<any[]>(url).subscribe(res => {
            this.config!.options = res;
            this.requestSuccess = true;
          }, (err) => {
            console.error(err);
          }, () => {
            this.config!.loading = false;
          })
          break;
      }
    }
  }

  /**
   * 选择改变
   * @param data 多选为数组
   */
  modelChangeHandle(data: any[] | any) {
    this.modelChange.emit(data)
  }

  /**
   * 下拉菜单打开状态变化回调
   * @param open true: 打开; false: 关闭
   */
  openChange(open: boolean) {
    if (open && this.config?.liveLoading) {
      this.initOptions();
    }
  }

  getOptionValueByKey(option: any, key: string | undefined, defaultKye: string) {
    let result = ''
    debugger
    if (typeof key === 'string' && option[key] !== undefined) {
      result = option[key];
    } else {
      result = option[defaultKye];
    }
    return result;
  }

}
