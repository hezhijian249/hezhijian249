import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormRenderComponent } from './form-render.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { TreeSelectComponent } from './components/tree-select/tree-select.component';
import { NzFormModule } from "ng-zorro-antd/form";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NzInputModule } from "ng-zorro-antd/input";
import { CoreModule, DynamicComponentService } from "core";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTreeSelectModule } from "ng-zorro-antd/tree-select";

const Nz_Module = [
  NzFormModule,
  NzInputModule,
  NzSelectModule,
  NzTreeSelectModule
]

const DYNAMIC_COMPONENT = [
  { name: 'InputComponent', component: InputComponent },
  { name: 'SelectComponent', component: SelectComponent },
  { name: 'TreeSelectComponent', component: TreeSelectComponent }
]


@NgModule({
  declarations: [
    FormRenderComponent,
    FormComponent,
    InputComponent,
    SelectComponent,
    TreeSelectComponent
  ],
  imports: [
    ...Nz_Module,
    ReactiveFormsModule,
    CommonModule,
    CoreModule
  ],
  exports: [
    FormRenderComponent,
    FormComponent
  ]
})
export class FormRenderModule {

  constructor(@Optional() @SkipSelf() parentModule: FormRenderModule, private dynamicComponentService: DynamicComponentService) {
    this.dynamicComponentService.registerComponent(DYNAMIC_COMPONENT);
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import Core modules in the AppModule only.');
    }
  }

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: FormRenderModule,
      providers: []
    }
  }
}
