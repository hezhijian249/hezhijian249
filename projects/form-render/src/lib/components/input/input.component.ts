import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
