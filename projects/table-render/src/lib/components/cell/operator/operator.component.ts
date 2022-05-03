import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OperatorColumn } from "../../../entity/OperatorColumn";
import { Button } from "core/lib/entity/Button";

@Component({
  selector: 'h-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {

  @Input()
  config: OperatorColumn | undefined;

  @Output()
  click: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  clickHandle(button: Button) {
    this.click.emit({
      operator: button
    });
  }

}
