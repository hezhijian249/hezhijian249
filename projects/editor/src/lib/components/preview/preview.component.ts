import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import highlight from 'highlight.js'
import { HtmlEscape } from "../../utils/html-escape";
import MarkdownIt from 'markdown-it'
import MarkdownItContainer from 'markdown-it-container'

@Component({
  selector: 'h-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @ViewChild('markdown', { static: true })
  markdownBody: any;

  private _value: string = '';

  private codeMap: any = {};

  private container: any[] = [
    { description: '提示', keywords: 'tip', type: 'normalContainer' },
    { description: '注意', keywords: 'warning', type: 'normalContainer' },
    { description: '警告', keywords: 'danger', type: 'normalContainer' }
  ]

  private md: any = MarkdownIt({
    highlight: ((code: string, lang: string) => {
      let res;
      if (lang && highlight.getLanguage(lang)) {
        res = highlight.highlight(lang, code, true).value;
      } else {
        res = highlight.highlightAuto(code).value;
      }
      // 当前时间加随机数生成唯一的id标识
      const key = `${new Date().getTime() + Math.floor(Math.random() * 10000000)}-copy-code`;
      this.codeMap[key] = code;
      return `<span class="iconfont icon-copy ${key}"></span>${res}`;
    })
  })

  @Output()
  tocMenu: EventEmitter<any> = new EventEmitter<any>();

  /**
   * 复制成功时触发
   */
  @Output()
  copySuccess: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  set value(value: string) {
    this._value = this.md.render(HtmlEscape.htmlEncode(value));
  }

  get value(): string {
    return this._value;
  }

  constructor() {
    this.initContainer();
    this.initHeaderClassName();
    this.initMarkdownItImagesClass()
  }

  ngOnInit(): void {
    this.markdownBody.nativeElement.onclick = (event: any) => {
      const classList: string[] = Object.keys(event.target.classList).map(index => event.target.classList[index])
      const className = classList.find((item: string) => /^\d+-copy-code$/.test(item))
      if (className) {
        if (navigator.clipboard && this.codeMap[className]) {
          navigator.clipboard.writeText(this.codeMap[className]).then(() => {
            this.copySuccess.emit();
          })
        }
      }
    }
  }

  initContainer() {
    this.container.forEach(item => {
      this.md.use(MarkdownItContainer, item.keywords, this.setMarkdownItContainerOptions(item))
    })
  }

  initMarkdownItImagesClass() {
    this.md.renderer.rules.image = (tokens: any, idx: number) => {
      const token = tokens[idx]
      const srcIndex = token.attrIndex('src')
      const url = token.attrs[srcIndex][1]
      const caption = this.md.utils.escapeHtml(token.content)
      return `<img src=${url} alt=${caption}" class="h-editor-images" />`
    }
  }

  /**
   * 给标签添加class值，用于toc跳转
   */
  initHeaderClassName() {
    const stack: any[] = [];
    this.md.core.ruler.push('anchor', (state: any) => {
      const tokens = state.tokens || [];
      tokens.forEach((token: any, index: number) => {
        if (token.type !== 'heading_open') {
          return
        }
        const title = this.getTokensText(tokens[index + 1].children)
        let className = `toc-${title}`
        stack.push({
          level: Number(tokens[index].tag.substring(1)),
          title: title,
          children: []
        })
        token.attrSet('class', className)
      })
      this.parseTocMenu(stack)
    })
  }

  /**
   * 解析toc菜单数据
   * @param stack
   */
  parseTocMenu(stack: any[]) {
    let result = [];
    while (stack.length) {
      if (!result.length) {
        result.push(stack.pop())
        continue
      }
      if (result[0].level <= stack[stack.length - 1].level) {
        result.unshift(stack.pop())
      } else {
        const stackTopValue = stack.pop();
        stackTopValue.children.push(...result.filter((item: any) => {
          return stackTopValue.level < item.level;
        }));
        result = result.filter((item: any) => {
          return stackTopValue.level >= item.level;
        })
        result.unshift(stackTopValue);
      }
    }
    if (result.length) {
      this.tocMenu.emit(result);
    }
  }

  getTokensText(tokens: any[]) {
    return tokens
      .filter(t => ['text', 'code_inline'].includes(t.type))
      .map(t => t.content)
      .join('')
  }

  setMarkdownItContainerOptions(container: any): any {
    if (container.type === 'normalContainer') {
      return this.normalContainer(container);
    }
    return {}
  }

  /**
   * 普通容器
   * @param container
   */
  normalContainer(container: any) {
    return {
      validate: function (params: string) {
        return params.trim().match(new RegExp(`^${container.keywords}`));
      },
      render: (tokens: any, idx: any) => {
        if (tokens[idx].nesting === 1) {
          return `<div class="custom-container ${container.keywords}">`;
        } else {
          return '</div>';
        }
      }
    }
  }

}
