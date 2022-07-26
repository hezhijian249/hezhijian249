import { FormFieldEnum } from "../../../../form-render/src/lib/enum/FormFieldEnum";
import { inputProperties } from "./properties/inputProperties";
import { selectProperties } from "./properties/selectProperties";

export const schema: any = {
  [FormFieldEnum.INPUT]: inputProperties,
  [FormFieldEnum.SELECT]: selectProperties
}
