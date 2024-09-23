import { TableHTMLAttributes } from "react";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  columns: string[];
  data: any[];
  title: string;
  onUpdateRow?: (rowId: string) => void;
  onDeleteRow?: (rowId: string) => void;
}
