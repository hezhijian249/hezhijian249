import { Component, Input, OnInit } from '@angular/core';
import { Button } from "../../entity/Button";

@Component({
  selector: 'h-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  config: Button | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
