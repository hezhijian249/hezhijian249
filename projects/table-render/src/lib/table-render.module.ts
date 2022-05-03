import { NgModule } from '@angular/core';
import { TableRenderComponent } from './table-render.component';
import { TableComponent } from './components/table/table.component';
import { NzTableModule } from "ng-zorro-antd/table";
import { CommonModule } from "@angular/common";
import { CoreModule, DynamicComponentService } from "core";
import { TextComponent } from './components/cell/text/text.component';
import { OperatorComponent } from './components/cell/operator/operator.component';

const NZ_MODULE = [
  NzTableModule
]

const DYNAMIC_COMPONENT = [
  TextComponent,
  OperatorComponent
]

@NgModule({
  declarations: [
    TableRenderComponent,
    TableComponent,
    TextComponent,
    OperatorComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ...NZ_MODULE,
  ],
  exports: [
    TableRenderComponent,
    TableComponent
  ]
})
export class TableRenderModule {

  constructor(private dynamicComponentService: DynamicComponentService) {
    dynamicComponentService.registerComponent(DYNAMIC_COMPONENT)
  }
}
