import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
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
  formGroup: FormGroup | undefined;

  maxMultipleCount: number = Infinity;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    if (this.config && this.config?.url) {
      switch (this.config?.method) {
        case 'post':
          this.config.loading = true;
          this.http.post<any[]>(this.config?.url, this.config?.data).subscribe(res => {
            this.config!.options = res;
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
          }, (err) => {
            console.error(err);
          }, () => {
            this.config!.loading = false;
          })
          break;
      }
    }

  }

}
