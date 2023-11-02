import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from "@angular/cdk/drag-drop";
import { ComponentType } from "../../entity/componentType";
import { FormFieldEnum, SelectField } from "form-render";

@Component({
  selector: 'h-component-library',
  templateUrl: './component-library.component.html',
  styleUrls: ['./component-library.component.scss']
})
export class ComponentLibraryComponent implements OnInit {
  panels: ComponentType[] = [
    {
      name: '表单',
      components: [
        {
          name: '输入框',
          imgUrl: 'https://hezhijian.oss-cn-beijing.aliyuncs.com/lowCode/componentLibraryIcon/input.svg',
          schema: {
            key: 'field' + new Date().getMilliseconds(),
            type: 'string',
            component: FormFieldEnum.INPUT,
            label: '输入框',
            size: 'default',
            borderless: false
          }
        },
        {
          name: '选择器',
          imgUrl: 'https://hezhijian.oss-cn-beijing.aliyuncs.com/lowCode/componentLibraryIcon/select.svg',
          schema: {
            type: 'string',
            component: FormFieldEnum.SELECT,
            label: '选择器',
            key: 'field' + new Date().getMilliseconds(),
            options: [
              {
                label: '选项1',
                value: '选项1'
              },
              {
                label: '选项2',
                value: '选项2'
              },
              {
                label: '选项3',
                value: '选项3'
              }
            ],
            labelKey: 'label',
            valueKey: 'value'
          } as SelectField,
        }
      ]
    }
  ];

  searchValue?: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
