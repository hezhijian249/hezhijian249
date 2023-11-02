import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodemirrorExampleComponent } from "./codemirror-example/codemirror-example.component";
import { GeneratorComponent } from "./generator/generator.component";
import { MonacoComponent } from "./monaco/monaco.component";

const routes: Routes = [
  { path: 'codemirror', component: CodemirrorExampleComponent },
  { path: 'generator', component: GeneratorComponent },
  { path: 'monaco', component: MonacoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
