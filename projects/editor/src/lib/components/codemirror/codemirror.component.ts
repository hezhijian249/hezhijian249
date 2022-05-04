import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Input,
  KeyValueDiffer,
  KeyValueDiffers,
  NgZone,
  OnInit,
  ViewChild
} from '@angular/core';
import { Editor, EditorChange, EditorFromTextArea, fromTextArea } from "codemirror";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'h-codemirror',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodemirrorComponent),
      multi: true
    }
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodemirrorComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @Input()
  className: string = '';

  @Input()
  name: string = 'codemirror';
  @Input()
  autoFocus: boolean = false;

  @ViewChild('ref', { static: true })
  ref: ElementRef | undefined;

  @Input()
  preserveScrollPosition: boolean = false;

  value: any;

  disabled: boolean = false;

  codeMirror: EditorFromTextArea | undefined;


  private _options: { [key: string]: any } | undefined;

  private _differ: KeyValueDiffer<string, any> | undefined;

  private onChange: (value: string) => void = () => {
    // 空函数
  }

  private onTouched: (value: string) => void = () => {
    // 空函数
  }

  @Input()
  set options(value: { [key: string]: any }) {
    this._options = value;
    if (!this._differ && value) {
      this._differ = this.differs.find(value).create();
    }
  }


  isFocused: boolean = false;

  constructor(private ngZone: NgZone, private differs: KeyValueDiffers) {
  }

  writeValue(value: any): void {
    if (value === null || value === undefined) {
      return;
    }
    if (!this.codeMirror) {
      this.value = value;
      return;
    }
    const currentValue = this.codeMirror.getValue();
    if (currentValue !== value && normalizeLineEndings(currentValue) !== normalizeLineEndings(value)) {
      this.value = value;
      if (this.preserveScrollPosition) {
        const prevScrollPosition = this.codeMirror.getScrollInfo();
        this.codeMirror.setValue(this.value);
        this.codeMirror.scrollTo(
          prevScrollPosition.left,
          prevScrollPosition.top,
        );
      } else {
        this.codeMirror.setValue(value);
      }
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.setOptionIfChanged('readOnly', this.disabled);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!this.ref) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this.codeMirror = fromTextArea(this.ref?.nativeElement, this._options);
      this.codeMirror.setValue(this.value);
      this.codeMirror.on('scroll', this.scrollChanged.bind(this))
      this.codeMirror.on('change', (editor: Editor, change: EditorChange) => {
        this.ngZone.run(() => {
          this.value = editor.getValue();
          this.onChange(this.value);
        })
      })
    })
  }

  /**
   * 改变codemirror的options
   * @param optionsName options的key值
   * @param value 对应的value值
   */
  setOptionIfChanged(optionsName: string, value: any) {
    if (!this.codeMirror) {
      return;
    }
    this.codeMirror.setOption(optionsName as any, value);
  }

  scrollChanged(editor: Editor) {

  }

}


function normalizeLineEndings(str: string): string {
  if (!str) {
    return str;
  }
  return str.replace(/\r\n|\r/g, '\n');
}
