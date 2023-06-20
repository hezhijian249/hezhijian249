import { ModuleWithProviders, NgModule } from '@angular/core';
import { EditorComponent } from './editor.component';
import { CodemirrorComponent } from './components/codemirror/codemirror.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from './details/details.component';
import { MonacoEditorComponent } from './components/monaco-editor/monaco-editor.component';
import { NGX_MONACO_EDITOR_CONFIG, NgxMonacoEditorConfig } from "./components/monaco-editor/config";


@NgModule({
  declarations: [
    EditorComponent,
    CodemirrorComponent,
    PreviewComponent,
    DetailsComponent,
    MonacoEditorComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    EditorComponent,
    CodemirrorComponent,
    PreviewComponent,
    MonacoEditorComponent
  ]
})
export class EditorModule {
  public static forRoot(config: NgxMonacoEditorConfig = {}): ModuleWithProviders<EditorModule> {
    return {
      ngModule: EditorModule,
      providers: [
        { provide: NGX_MONACO_EDITOR_CONFIG, useValue: config }
      ]
    };
  }
}
