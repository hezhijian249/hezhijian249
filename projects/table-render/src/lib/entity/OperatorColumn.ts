import { BaseColumn } from "./BaseColumn";
import { Button } from "core/lib/entity/Button";

/**
 * 操作列
 */
export interface OperatorColumn extends BaseColumn {
  operators: Button[];
}
