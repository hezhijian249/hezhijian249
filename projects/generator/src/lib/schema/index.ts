import { FormFieldEnum } from "form-render";
import { inputProperties } from "./properties/inputProperties";
import { selectProperties } from "./properties/selectProperties";

export const schema: any = {
  [FormFieldEnum.INPUT]: inputProperties,
  [FormFieldEnum.SELECT]: selectProperties
}
