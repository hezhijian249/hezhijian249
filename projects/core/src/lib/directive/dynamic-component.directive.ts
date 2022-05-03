import {
  ComponentFactoryResolver,
  Directive,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewContainerRef
} from '@angular/core';
import { BaseField } from "../entity/baseField";
import { DynamicComponentService } from "../service/dynamic-component.service";
import { FormGroup } from "@angular/forms";

@Directive({
  selector: '[hDynamicComponent]'
})
export class DynamicComponentDirective implements OnInit {

  @Input()
  config: BaseField | undefined;

  @Input()
  formGroup: FormGroup | undefined;

  @Output()
  click: EventEmitter<any> = new EventEmitter<any>();

  component: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              private dynamicComponentService: DynamicComponentService) {
  }

  ngOnInit(): void {
    const component = this.dynamicComponentService.getComponent(this.config?.component);
    if (!component) {
      return;
    }
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.component = this.viewContainerRef.createComponent(factory).instance;
    this.component.config = this.config;
    this.component.formGroup = this.formGroup;

    // 监听点击事件
    if (this.component.click instanceof EventEmitter) {
      this.component.click.subscribe((data: any) => {
        this.click.emit(data);
      })
    }
  }
}
