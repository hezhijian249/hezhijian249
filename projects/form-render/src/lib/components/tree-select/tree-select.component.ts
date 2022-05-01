import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { TreeSelectFormField } from "../../entity/TreeSelectFormField";

@Component({
  selector: 'h-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss']
})
export class TreeSelectComponent implements OnInit {

  @Input()
  config: TreeSelectFormField | undefined;

  @Input()
  formGroup: FormGroup | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
