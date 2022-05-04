import { NgModule } from '@angular/core';
import { EditorComponent } from './editor.component';
import { CodemirrorComponent } from './components/codemirror/codemirror.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";



@NgModule({
  declarations: [
    EditorComponent,
    CodemirrorComponent,
    PreviewComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    EditorComponent,
    CodemirrorComponent
  ]
})
export class EditorModule { }
