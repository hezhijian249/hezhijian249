import { ModuleWithProviders, NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { DynamicComponentDirective } from './directive/dynamic-component.directive';
import { ButtonComponent } from './component/button/button.component';
import { NzButtonModule } from "ng-zorro-antd/button";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    CoreComponent,
    DynamicComponentDirective,
    ButtonComponent
  ],
  imports: [
    NzButtonModule,
    CommonModule
  ],
  exports: [
    CoreComponent,
    DynamicComponentDirective,
    ButtonComponent
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule
    }
  }
}
