import { BaseField } from "core/lib/entity/baseField";

export interface BaseColumn extends BaseField {
  key: string;

  title: string;

  value?: string | number | boolean;

  formatter?: Function;
}
