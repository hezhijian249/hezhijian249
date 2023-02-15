import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ComponentLibrary } from "../../entity/componentLibrary";
import * as lodash from 'lodash'
import { FormField } from "../../../../../form-render/src/lib/entity/FormField";

@Component({
  selector: 'h-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent implements OnInit {

  formGroup: FormGroup | undefined;

  componentLibraries: FormField[] = [];

  @Input()
  selectComponent?: FormField;

  @Output()
  selectComponentChange: EventEmitter<FormField> = new EventEmitter<FormField>();

  @Output()
  componentLibrariesChange: EventEmitter<FormField[]> = new EventEmitter<FormField[]>();

  constructor(private formBuild: FormBuilder) {
  }

  ngOnInit(): void {
  }

  createGroup(): FormGroup {
    const group = this.formBuild.group({});
    this.componentLibraries.forEach((componentLibrary: FormField) => {
      if (componentLibrary.type === 'array') {
        group.addControl(componentLibrary.key, this.formBuild.control([]))
      } else {
        group.addControl(componentLibrary.key, this.formBuild.control(''))
      }
    })
    return group;
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const cloneData: FormField[] = lodash.cloneDeep(event.previousContainer.data).map((item: ComponentLibrary) => item.schema);
      cloneData[event.previousIndex].id = new Date().getTime();
      cloneData[event.previousIndex].key = 'field' + new Date().getMilliseconds();
      transferArrayItem(
        cloneData,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.formGroup = this.createGroup();
    this.componentLibrariesChange.emit(this.componentLibraries);
  }

  evenPredicate() {
    return true;
  }

  resolveUndefined(value: any) {
    if (value === undefined) {
      return null;
    }
    return value;
  }

  clickComponentLibrary(event: Event, selectComponent: FormField) {
    event.stopPropagation();
    this.selectComponent = selectComponent;
    this.selectComponentChange.emit(this.selectComponent);
  }
}