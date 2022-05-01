import { ModuleWithProviders, NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { DynamicComponentDirective } from './directive/dynamic-component.directive';


@NgModule({
  declarations: [
    CoreComponent,
    DynamicComponentDirective
  ],
  imports: [],
  exports: [
    CoreComponent,
    DynamicComponentDirective
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule
    }
  }
}
