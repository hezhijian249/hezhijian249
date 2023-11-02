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
import { UntypedFormGroup } from "@angular/forms";

@Directive({
  selector: '[hDynamicComponent]'
})
export class DynamicComponentDirective implements OnInit {

  @Input()
  config: BaseField | undefined;

  @Input()
  formGroup: UntypedFormGroup | undefined;

  @Output()
  click: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  modelChange: EventEmitter<any | any[]> = new EventEmitter<any | any[]>();

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

    // 表单的数据改变事件
    if (this.component.modelChange instanceof EventEmitter) {
      this.component.modelChange.subscribe((data: any | any[]) => {
        this.modelChange.emit(data);
      })
    }
  }
}
