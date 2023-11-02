import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-codemirror-example',
  templateUrl: './codemirror-example.component.html',
  styleUrls: ['./codemirror-example.component.scss']
})
export class CodemirrorExampleComponent implements OnInit {

  formGroup: FormGroup;

  options: any = {
    language: "markdown",
    roundedSelection: false,
    scrollBeyondLastLine: false,
    readOnly: false,
    automaticLayout: true
  }

  @ViewChild('ref', { static: true })
  ref: ElementRef | undefined;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formGroup = fb.group({
      markdown: ['']
    })
  }

  ngOnInit(): void {
    this.getMarkdown();
  }

  views() {
    console.log(this.formGroup.value)
  }

  getMarkdown() {
    this.http.get('assets/example.md', { responseType: 'text' }).subscribe(data => {
      this.formGroup.patchValue({
        markdown: data
      });
    })
  }

  tocScrollTo(select: string) {
    const doc: any = document.querySelector(`.toc-${select}`)
    debugger
    if (!doc) {
      return
    }
    // 本案例默认滚动元素是　html ，你可以根据你需要的滚动元素进行设置。
    document.documentElement.scrollTo({
      top: doc.offsetTop,
      behavior: 'smooth' // 让滚动更丝滑
    })
  }

}
