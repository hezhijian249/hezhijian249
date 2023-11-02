import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import { FormField } from "../entity/FormField";

/**
 * 创建表单group对象
 * @param formBuild
 * @param fields
 */
export function createGroup(formBuild: UntypedFormBuilder, fields: FormField[]): UntypedFormGroup {
  const group = formBuild.group({});
  fields.forEach((field: FormField) => {
    if (field.type === 'array') {
      group.addControl(field.key, formBuild.control([]))
    } else {
      group.addControl(field.key, formBuild.control(''))
    }
  })
  return group;
}
