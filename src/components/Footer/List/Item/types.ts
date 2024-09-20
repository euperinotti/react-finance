import { HTMLAttributes } from "react";

export interface FooterListItemProps extends HTMLAttributes<HTMLLIElement> {
  label: string;
  link?: string;
}
