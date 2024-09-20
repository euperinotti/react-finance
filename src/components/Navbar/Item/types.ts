import { HTMLAttributes } from "react";

export interface NavbarItemProps extends HTMLAttributes<HTMLLIElement> {
  label: string;
  href: string;
  isActive: boolean;
}
