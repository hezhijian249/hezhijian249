import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  private _value: string = '';

  private container: any[] = [
    { description: '提示', keywords: 'tip', type: 'normalContainer' },
    { description: '注意', keywords: 'warning', type: 'normalContainer' },
    { description: '警告', keywords: 'danger', type: 'normalContainer' }
  ]

  private md: any = MarkdownIt({
    highlight: ((code: string, lang: string) => {
      let res;
      if (lang) {
        res = highlight.highlight(lang, code, true).value;
      } else {
        res = highlight.highlightAuto(code).value;
      }
      return res;
    })
  })

  @Output()
  tocMenu: EventEmitter<any> = new EventEmitter<any>();

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
  }

  ngOnInit(): void {
  }

  initContainer() {
    this.container.forEach(item => {
      this.md.use(MarkdownItContainer, item.keywords, this.setMarkdownItContainerOptions(item))
    })
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
