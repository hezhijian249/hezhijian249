import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormField } from "../../entity/FormField";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'h-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input()
  config: FormField | undefined;

  @Input()
  formGroup: FormGroup | undefined;

  @Output()
  modelChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * 输入改变
   * @param data
   */
  modelChangeHandle(data: any) {
    this.modelChange.emit(data);
  }

}
